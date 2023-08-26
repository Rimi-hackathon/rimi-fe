import { atom } from 'recoil';

export const main = atom({
  key: 'main', default: {
    name: '',
    email: '',
    id: '',
    field: '',
    exp: '',
    sns: '',
    site: ''
  }
});
