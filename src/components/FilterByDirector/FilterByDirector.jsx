/* eslint-disable space-before-function-paren */
import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, IconButton } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';
import { Context } from '../../contexts/DataContext';
import { getMoviesByDirector } from '../../services/moviesService';

const FilterByDirector = ({ directors }) => {
  const { setResults } = useContext(Context);

  const [director, setDirector] = useState(null);

  const options = directors.map((item) => {
    const { name } = item;
    const firstLetter = name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...item,
    };
  });

  const reset = () => {
    setResults(null);
  };

  const handleSearch = async () => {
    if (director == null) return;
    const {
      data: { movies },
    } = await getMoviesByDirector(director);
    setResults(movies);
  };

  return (
    <FilterWrapper>
      <Autocomplete
        id="director-title"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => setDirector(value)}
        renderInput={(params) => <TextField {...params} label="Directors" variant="outlined" />}
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

export default FilterByDirector;
