/* eslint-disable space-before-function-paren */
/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, IconButton } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';
import { getMoviesByActors } from '../../services/moviesService';
import { Context } from '../../contexts/DataContext';

const defaultQuery = {
  firstActor: null,
  secondActor: null,
};

const FilterActorsOnSameMovie = ({ actors = [] }) => {
  const { setResults } = useContext(Context);

  const [query, setQuery] = useState(defaultQuery);

  const options = actors.map(({ name }) => {
    const firstLetter = name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      name,
    };
  });

  const sortedOptions = options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter));

  const handleFirstActorChange = (value) => {
    setQuery({
      ...query,
      firstActor: value,
    });
  };

  const handleSecondActorChange = (value) => {
    setQuery({
      ...query,
      secondActor: value,
    });
  };

  const handleSearch = async () => {
    if (query.firstActor == null || query.secondActor == null) return;
    const {
      data: { movies },
    } = await getMoviesByActors([query.firstActor.name, query.secondActor.name]);
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
        getOptionSelected={(option) => option.name === query.firstActor?.name}
        renderInput={(params) => (
          <TextField {...params} label="Actors and actresses" variant="outlined" />
        )}
      />
      <Autocomplete
        id="second-actor"
        options={sortedOptions}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        className="margin-top-10"
        onChange={(event, value) => handleSecondActorChange(value)}
        getOptionSelected={(option) => option.name === query.secondActor?.name}
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
export default FilterActorsOnSameMovie;
