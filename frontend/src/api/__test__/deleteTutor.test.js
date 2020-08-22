import deleteTutor from '../deleteTutor';

jest.mock('superagent', () => ({
  delete: jest.fn(),
}));

function setUp() {
  const data = {
    id: 1,
    effect: jest.fn(),
  };
  return data;
}

test('Calls delete tutor endpoint and trigger effect if request is successful', () => {
  const { id, effect } = setUp();

  // makes api call and test to make sure effect is called once
  return deleteTutor(id, effect).then(() => expect(effect).toBeCalledTimes(1));
});
