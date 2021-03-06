import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, IconButton } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';
import { Context } from '../../contexts/DataContext';

const FilterByName = ({ movies }) => {
  const { setResults } = useContext(Context);

  const [movie, setMovie] = useState(null);

  const options = movies.map((item) => {
    const { title } = item;
    const firstLetter = title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...item,
    };
  });

  const reset = () => {
    setResults(null);
  };

  const handleSearch = () => {
    if (movie == null) return;
    setResults([movie]);
  };

  return (
    <FilterWrapper>
      <Autocomplete
        id="movie-title"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) => setMovie(value)}
        renderInput={(params) => <TextField {...params} label="Movies" variant="outlined" />}
      />
      <SearchButtonWrapper>
        <IconButton color="secondary" aria-label="Reset" onClick={reset}>
          <RestoreIcon />
        </IconButton>
        <Button
          id="button"
          variant="contained"
          color="primary"
          onClick={handleSearch}
          className="reset-margin"
          disableElevation
        >
          Search
        </Button>
      </SearchButtonWrapper>
    </FilterWrapper>
  );
};

export default FilterByName;
