import request from 'superagent';

export default function onPhotoSelected(files) {
  const url = 'https://api.cloudinary.com/v1_1/dpmxguze6/upload';
  const file = files[0].data;
  return request
    .post(url)
    .field('upload_preset', 'coinprofile')
    .field('file', file)
    .field('multiple', false);
}
