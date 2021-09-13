/* eslint-disable space-before-function-paren */
/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, IconButton } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';
import { getMoviesByActor } from '../../services/moviesService';
import { Context } from '../../contexts/DataContext';

const FilterByActor = ({ actors = [] }) => {
  const { setResults } = useContext(Context);

  const [actor, setActor] = useState(null);

  const options = actors.map(({ name }) => {
    const firstLetter = name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      name,
    };
  });

  const sortedOptions = options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter));

  const handleFirstActorChange = (value) => setActor(value);

  const handleSearch = async () => {
    if (actor == null) return;
    const {
      data: { movies },
    } = await getMoviesByActor(actor.name);
    setResults(movies);
  };

  const reset = () => {
    setResults(null);
  };

  return (
    <FilterWrapper>
      <Autocomplete
        id="first-actor"
        options={sortedOptions}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => handleFirstActorChange(value)}
        getOptionSelected={(option) => option.name === actor?.name}
        renderInput={(params) => (
          <TextField {...params} label="Actors and actresses" variant="outlined" />
        )}
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
export default FilterByActor;
