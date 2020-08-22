import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import useAsync from './useAsync';
import getTutors from '../api/getTutors';
import deleteTutors from '../api/deleteTutor';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function Tutors({ setState, state }) {
  const classes = useStyles();
  const { value, execute } = useAsync(getTutors);

  useEffect(() => {
    if (value) {
      setState({ key: 'tutors', value });
    }
  }, [value, setState]);

  const onDeleteTutor = (id) => () => {
    deleteTutors(id, execute);
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={450} className={classes.gridList}>
        {state.tutors.map((tutor) => (
          <GridListTile key={tutor.name} cols={1 / 2}>
            <img src={tutor.photo} alt={tutor.name} />
            <GridListTileBar
              title={tutor.name}
              subtitle={(
                <span>
                  specialty:
                  {tutor.specialty}
                </span>
              )}
              actionIcon={(
                <IconButton
                  onClick={onDeleteTutor(tutor.id)}
                  aria-label={`${tutor.experience} years of experience`}
                  className={classes.icon}
                >
                  <CancelIcon />
                </IconButton>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Tutors.defaultProps = {
  state: { tutors: [] },
  setState: () => {},
};
Tutors.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.objectOf(PropTypes.checkPropTypes()),
};
