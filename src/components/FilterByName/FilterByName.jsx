import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@material-ui/core';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';

const FilterByName = ({ movies }) => {
  const options = movies.map(({ title, year }) => {
    const firstLetter = title[0].toUpperCase();
    return {
      title,
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      year,
    };
  });

  return (
    <FilterWrapper>
      <Autocomplete
        id="movie-title"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Movies" variant="outlined" />}
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
};

export default FilterByName;
