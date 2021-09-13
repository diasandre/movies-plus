import React from 'react';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import InsertChartRoundedIcon from '@material-ui/icons/InsertChartRounded';
import { Wrapper } from './style';

const filters = [
  {
    label: 'By name',
    type: 'BY_NAME',
  },
  {
    label: 'By actor',
    type: 'BY_ACTOR',
  },
  {
    label: 'By director',
    type: 'BY_DIRECTOR',
  },
  {
    label: 'Actors on same movie',
    type: 'ACTORS_ON_SAME_MOVIE',
  },
  {
    label: 'Combined rating',
    type: 'COMBINED_RATING',
  },
];

const Buttons = ({ onFilterCallback }) => (
  <Wrapper>
    <div>
      {filters.map(({ label, type }) => (
        <Button
          key={type}
          id={type}
          variant="contained"
          color="primary"
          className="filter-button"
          onClick={() => onFilterCallback(type)}
          disableElevation
        >
          {label}
        </Button>
      ))}
    </div>
    <IconButton color="secondary" aria-label="Statistics" onClick={() => onFilterCallback(null)}>
      <InsertChartRoundedIcon />
    </IconButton>
  </Wrapper>
);

export default Buttons;
