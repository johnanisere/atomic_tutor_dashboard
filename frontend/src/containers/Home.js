import React from 'react';
import Layout from '../components/Layout';
import Tutors from '../components/Tutors';
import NewTutor from '../components/NewTutor';
import { TutorContext } from '../context';

export default () => {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <TutorContext.Consumer>
      {({ state, setState }) => (
        <Layout toggleModal={toggleModal}>
          <NewTutor open={open} state={state} setState={setState} toggleModal={toggleModal} />
          <Tutors setState={setState} state={state} />
        </Layout>
      )}
    </TutorContext.Consumer>
  );
};
