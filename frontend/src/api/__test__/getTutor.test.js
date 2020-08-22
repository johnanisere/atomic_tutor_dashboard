import getTutors from '../getTutors';

jest.mock('superagent', () => ({
  get: jest.fn(() => ({
    body: { results: [] },
  })),
}));

// makes api call and test to make sure that the response result
// has a length of 0 as expected

test('Calls get tutors successfully', () => getTutors().then((response) => expect(response.length).toBe(0)));
