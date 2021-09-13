/* eslint-disable space-before-function-paren */
import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, IconButton, MenuItem } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { FilterWrapper, SearchButtonWrapper } from '../../styles';
import { Context } from '../../contexts/DataContext';
import { getMoviesByRating } from '../../services/moviesService';

const imdbRatings = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '8.5',
    label: '8.5',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '9.5',
    label: '9.5',
  },
  {
    value: '10',
    label: '10',
  },
];

const rottenRatings = [
  {
    value: '80',
    label: '80',
  },
  {
    value: '81',
    label: '81',
  },
  {
    value: '82',
    label: '82',
  },
  {
    value: '83',
    label: '83',
  },
  {
    value: '84',
    label: '84',
  },
  {
    value: '85',
    label: '85',
  },
  {
    value: '86',
    label: '86',
  },
  {
    value: '87',
    label: '87',
  },
  {
    value: '88',
    label: '88',
  },
  {
    value: '89',
    label: '89',
  },
  {
    value: '90',
    label: '90',
  },
  {
    value: '91',
    label: '91',
  },
  {
    value: '92',
    label: '92',
  },
  {
    value: '93',
    label: '93',
  },
  {
    value: '94',
    label: '94',
  },
  {
    value: '95',
    label: '95',
  },
  {
    value: '96',
    label: '96',
  },
  {
    value: '97',
    label: '97',
  },
  {
    value: '98',
    label: '98',
  },
  {
    value: '99',
    label: '99',
  },
  {
    value: '100',
    label: '100',
  },
];

const defaultQuery = {
  imdb: 1,
  rotten_critics: 80,
  rotten_audience: 80,
};

const FilterCombinedRating = () => {
  const { setResults } = useContext(Context);

  const [query, setQuery] = useState(defaultQuery);

  const reset = () => {
    setResults(null);
  };

  const handleImdbChange = ({ target: { value } }) => {
    setQuery({
      ...query,
      imdb: value,
    });
  };

  const handleRottenCriticsChange = ({ target: { value } }) => {
    setQuery({
      ...query,
      rotten_critics: value,
    });
  };

  const handleRottenAudienceChange = ({ target: { value } }) => {
    setQuery({
      ...query,
      rotten_audience: value,
    });
  };

  const handleSearch = async () => {
    if (query.imdb == null || query.rotten_audience == null || query.rotten_critics == null) return;
    const {
      data: { movies },
    } = await getMoviesByRating(query);
    setResults(movies);
  };

  return (
    <FilterWrapper>
      <div>
        <TextField
          id="imdb"
          style={{ width: '300px' }}
          select
          label="IMDB rating >="
          value={query.imdb}
          onChange={handleImdbChange}
        >
          {imdbRatings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="rotten-critics"
          style={{ width: '300px' }}
          select
          label="Rotten critics rating >="
          value={query.rotten_critics}
          onChange={handleRottenCriticsChange}
        >
          {rottenRatings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="rotten-audience"
          style={{ width: '300px' }}
          select
          label="Rotten audience rating >="
          value={query.rotten_audience}
          onChange={handleRottenAudienceChange}
        >
          {rottenRatings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
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

export default FilterCombinedRating;
