/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { Container, SpinnerWrapper, Wrapper } from './style';
import Buttons from '../Buttons';

import FilterActorsOnSameMovie from '../FilterActorsOnSameMovie';
import FilterByName from '../FilterByName';
import FilterByDirector from '../FilterByDirector';
import FilterCombinedRating from '../FilterCombinedRating';

import Charts from '../Charts';
import { initialLoad } from '../../services/apiService';
import { ContextProvider } from '../../contexts/DataContext';
import MovieCard from '../MovieCard';
import FilterByActor from '../FilterByActor';

const Header = () => (
  <>
    <h1>Movies +</h1>
    <h3>find the best ones</h3>
  </>
);

const Filters = ({ filter, actors, movies, directors }) => (
  <Wrapper>
    {filter === 'ACTORS_ON_SAME_MOVIE' && <FilterActorsOnSameMovie actors={actors} />}
    {filter === 'BY_NAME' && <FilterByName movies={movies} />}
    {filter === 'BY_DIRECTOR' && <FilterByDirector directors={directors} />}
    {filter === 'COMBINED_RATING' && <FilterCombinedRating />}
    {filter === 'BY_ACTOR' && <FilterByActor actors={actors} />}
  </Wrapper>
);

const Results = ({ results }) => (
  <Wrapper>
    {results.map((item) => (
      <MovieCard key={item.title} movie={item} />
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
    setResults(null);
  };

  useEffect(async () => {
    const response = await initialLoad();
    console.log(response);
    setValues(response);
    setLoading(false);
  }, []);

  const { actors, movies, directors, info } = values;
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
              <Filters filter={filter} actors={actors} movies={movies} directors={directors} />
            ) : (
              <Wrapper>
                <Charts info={info} />
              </Wrapper>
            )}
            {results != null && filter != null && <Results results={results} />}
          </Container>
        </div>
      ) : (
        <SpinnerWrapper>
          <BounceLoader color="#da0037" loading={loading} size={150} />
        </SpinnerWrapper>
      )}
    </ContextProvider>
  );
};

export default Home;
