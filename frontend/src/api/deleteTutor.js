import request from 'superagent';

export default async function onDeleteTutor(id, effect) {
  try {
    // delete tutors
    await request.delete(`${process.env.REACT_APP_BACKEND_URL}/tutor/${id}/`);
    return effect();
  } catch (error) {
    return error;
  }
}
