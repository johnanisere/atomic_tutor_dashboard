import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Homepage from '../Home';
import { TutorContext } from '../../context';
import getTutors from '../../api/getTutors';

jest.mock('superagent');
jest.mock('../../api/getTutors');

test("'renders Dashboard'", async () => {
  const stub = {
    state: { tutors: [{ id: 1, name: 'james', specialty: 'math' }] },
    setState: () => jest.fn(),
  };
  getTutors.mockResolvedValue(stub.state.tutors);

  const { getByText, getAllByText } = render(
    <TutorContext.Provider value={stub}>
      <Homepage />
    </TutorContext.Provider>,
  );
  expect(getByText('Tutors')).toBeInTheDocument();
  expect(getAllByText('Reliance').length).toBe(2);

  // Component makes request to get tutors
  expect(getTutors).toBeCalledTimes(1);
});
