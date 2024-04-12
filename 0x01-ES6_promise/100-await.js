import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const resUploadPhoto = await uploadPhoto();
    const resCreateUser = await createUser();
    
    return ({ photo: prom1, user: prom2 });
   } catch (error) {
     return ({ photo: null, user: null });
   }
}
