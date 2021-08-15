import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@material-ui/core';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';

const data = [
  { name: 'Leonardo DiCaprio', id: 1 },
  { name: 'Robert De Niro', id: 2 },
  { name: 'Tom Hanks', id: 3 },
  { name: 'Meryl Streep', id: 4 },
  { name: 'Kate Winslet', id: 5 },
  { name: 'Jennifer Lawrence', id: 6 },
];

const options = data.map(({ name, id }) => {
  const firstLetter = name[0].toUpperCase();
  return {
    id,
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    name,
  };
});

const FilterActorsOnSameMovie = () => (
  <FilterWrapper>
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Actors and actresses" variant="outlined" />
      )}
    />
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      className="margin-top-10"
      renderInput={(params) => (
        <TextField {...params} label="Actors and actresses" variant="outlined" />
      )}
    />
    <SearchButtonWrapper>
      <Button
        id="button"
        variant="contained"
        color="primary"
        className="reset-margin margin-top-10"
        disableElevation
      >
        Search
      </Button>
    </SearchButtonWrapper>
  </FilterWrapper>
);

export default FilterActorsOnSameMovie;
