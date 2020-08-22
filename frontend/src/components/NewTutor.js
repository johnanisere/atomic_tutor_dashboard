import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { AttachFile } from '@material-ui/icons';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import createTutor from '../api/createTutor';
import Modal from './Modal';
import useAsync from './useAsync';

// eslint-disable jsx-props-no-spreading
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    width: '400px',
    maxWidth: '100%',
  },
  margin: {
    margin: theme.spacing(1),
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '46%',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  center: {
    textAlign: 'center',
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
  },
}));
const initialValues = {
  name: '',
  specialty: '',
  experience: '',
};

export default function NewTutors({
  toggleModal, open, state, setState,
}) {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const { name, specialty, experience } = values;
  const [file, setfile] = useState('');
  const [show, setOpen] = useState(false);

  // handle form input change
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // toggle alert and close modal
  const handleClick = (payload) => {
    setOpen(!show);
    if (!show) {
      toggleModal();
      setValues(initialValues);
      setfile('');
      setState({ key: 'tutors', value: [...state.tutors, payload] });
    }
  };

  // handle submission of form
  const onSubmit = async () => createTutor({ file, values, alert: handleClick });

  const { execute, pending } = useAsync(onSubmit, false);

  return (
    <>
      <Snackbar open={show} autoHideDuration={6000} onClose={handleClick}>
        <Alert onClose={handleClick} severity="success">
          Tutor successfully created!
        </Alert>
      </Snackbar>
      <Modal open={open} toggleModal={toggleModal}>
        <div className={classes.root}>
          <Typography variant="h5" noWrap className={classes.center}>
            Add New Tutor
          </Typography>

          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              value={name}
              onChange={handleChange('name')}
              labelWidth={60}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth className={classes.margin}>
            <InputLabel htmlFor="outlined-specialty-native-simple">Specialty</InputLabel>
            <Select
              native
              value={specialty}
              onChange={handleChange('specialty')}
              label="Specialty"
              inputProps={{
                name: 'age',
                id: 'outlined-specialty-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              {['MATHAMATICS', 'ENGLISH', 'PHYSICS', 'CHEMISTRY'].map((val) => (
                <option value={val} key={val}>
                  {val}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth className={classes.margin}>
            <InputLabel htmlFor="outlined-experience-native-simple">Experience</InputLabel>
            <Select
              native
              value={experience}
              onChange={handleChange('experience')}
              label="Experience"
              inputProps={{
                name: 'experience',
                id: 'outlined-experience-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              {[1, 2, 3, 4, 5].map((val) => (
                <option value={val} key={val}>
                  {val}
                </option>
              ))}
            </Select>
          </FormControl>

          <div className={classes.margin}>
            <DropzoneAreaBase
              Icon={AttachFile}
              filesLimit={1}
              acceptedFiles={['image/*']}
              dropzoneText="Drag and drop your profile picture here"
              onAdd={(fileObjs) => {
                setfile(fileObjs);
              }}
            />
          </div>
          <Button
            disabled={pending}
            variant="contained"
            className={classes.margin}
            size="large"
            onClick={execute}
          >
            {pending ? 'processing....' : 'Submit'}
          </Button>
        </div>
      </Modal>
    </>
  );
}

NewTutors.defaultProps = {
  open: false,
  toggleModal: () => {},
  state: { tutors: [] },
  setState: () => {},
};
NewTutors.propTypes = {
  setState: PropTypes.func,
  open: PropTypes.bool,
  toggleModal: PropTypes.func,
  state: PropTypes.objectOf(PropTypes.checkPropTypes()),
};
