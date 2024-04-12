import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadph = uploadPhoto();
  const createph = createUser();

  return Promise.all([uploadph, createph]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
