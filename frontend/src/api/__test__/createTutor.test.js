import createTutor from '../createTutor';

jest.mock('superagent', () => ({
  post: jest.fn(() => ({
    send: jest.fn(() => ({
      body: {},
    })),
  })),
}));

jest.mock('../upload');

function setUp() {
  const data = {
    file: '',
    values: { name: 'me', specialty: 'english' },
    alert: jest.fn(),
  };

  return data;
}

test('Calls create tutor endpoint and trigger alert if request is successfull', () => {
  const data = setUp();

  // makes api call and test to make sure alert is called once
  return createTutor(data).then(() => expect(data.alert).toBeCalledTimes(1));
});
