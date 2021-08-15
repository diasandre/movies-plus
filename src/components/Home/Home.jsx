import React, { useState } from 'react';
import { ChartsContainer, Container, FilterContainer } from './style';
import Buttons from '../Buttons';

import FilterActorsOnSameMovie from '../FilterActorsOnSameMovie';
import FilterByName from '../FilterByName';
import Charts from '../Charts';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const onFilterCallback = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <h1>Movies +</h1>
      <h3>find the best ones</h3>
      <Container>
        <Buttons onFilterCallback={onFilterCallback} />
        {filter != null ? (
          <FilterContainer>
            {filter === 'ACTORS_ON_SAME_MOVIE' && <FilterActorsOnSameMovie />}
            {filter === 'BY_NAME' && <FilterByName />}
          </FilterContainer>
        ) : (
          <ChartsContainer>
            <Charts />
          </ChartsContainer>
        )}
      </Container>
    </div>
  );
};

export default Home;
