/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
import { list as listActors } from './actorsService';
import { list as listDirectors } from './directorService';
import { list as listMovies } from './moviesService';

export const initialLoad = async () => {
  const {
    data: { count: countMovies, movies },
  } = await listMovies();

  const { data: dataDirectors } = await listDirectors();

  const { data: dataActors } = await listActors();

  const mappedActors = Object.entries(dataActors).map(([name, count]) => ({ name, count }));
  const mappedDirectors = Object.entries(dataDirectors).map(([name, count]) => ({ name, count }));

  return {
    directors: mappedDirectors,
    actors: mappedActors,
    movies,
    info: {
      movies: countMovies,
      actors: mappedActors.length,
      directors: mappedDirectors.length,
    },
  };
};
