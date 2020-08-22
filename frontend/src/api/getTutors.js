import request from 'superagent';

export default async function onRetrieveTutor() {
  try {
    // get all tutors
    const {
      body: { results },
    } = await request.get(`${process.env.REACT_APP_BACKEND_URL}/tutor/`);
    return results;
  } catch (error) {
    return error;
  }
}
