/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react';
import { Container, Wrapper } from './style';
import Buttons from '../Buttons';

import FilterActorsOnSameMovie from '../FilterActorsOnSameMovie';
import FilterByName from '../FilterByName';
import Charts from '../Charts';
import { initialLoad } from '../../services/apiService';
import { ContextProvider } from '../../contexts/DataContext';
import MovieCard from '../MovieCard';

const Header = () => (
  <>
    <h1>Movies +</h1>
    <h3>find the best ones</h3>
  </>
);

const Filters = ({ filter, actors, movies }) => (
  <Wrapper>
    {filter === 'ACTORS_ON_SAME_MOVIE' && <FilterActorsOnSameMovie actors={actors} />}
    {filter === 'BY_NAME' && <FilterByName movies={movies} />}
  </Wrapper>
);

const Results = ({ results }) => (
  <Wrapper>
    {results.map((item) => (
      <MovieCard key={item.id} movie={item} />
    ))}
  </Wrapper>
);

const Home = () => {
  const [filter, setFilter] = useState(null);
  const [results, setResults] = useState(null);
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);

  const onFilterCallback = (value) => {
    setFilter(value);
  };

  useEffect(async () => {
    const response = await initialLoad();
    console.log(response);
    setValues(response);
    setLoading(false);
  }, []);

  const { actors, movies, info } = values;
  return (
    <ContextProvider
      value={{
        ...values,
        setResults,
      }}
    >
      {!loading ? (
        <div>
          <Container>
            <Header />
            <Buttons onFilterCallback={onFilterCallback} />
            {filter != null ? (
              <Filters filter={filter} actors={actors} movies={movies} />
            ) : (
              <Wrapper>
                <Charts info={info} />
              </Wrapper>
            )}
            {results != null && filter != null && <Results results={results} />}
          </Container>
        </div>
      ) : (
        <p>ta carregando</p>
      )}
    </ContextProvider>
  );
};

export default Home;
