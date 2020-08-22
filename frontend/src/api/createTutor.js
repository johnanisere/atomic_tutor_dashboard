import request from 'superagent';
import uploadImage from './upload';

export default async function onCreateTutor({ file, values, alert }) {
  try {
    let payload = {};

    if (file) {
      // upload image
      const {
        body: { secure_url },
      } = await uploadImage(file);
      payload = { ...values, photo: secure_url };
    } else {
      payload = { ...values };
    }

    // create tutor
    const { body } = await request
      .post(`${process.env.REACT_APP_BACKEND_URL}/tutor/`)
      .send(payload);

    return alert(body);
  } catch (error) {
    return error;
  }
}
