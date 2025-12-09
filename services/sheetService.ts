import { SCRIPT_URL } from '../constants';

export const sendToGoogleSheet = (phone: string, facebook: string, key: string): void => {
  const formData = new FormData();
  formData.append('phone', phone);
  formData.append('facebook', facebook || "Không nhập");
  formData.append('key', key);

  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  })
    .then(() => console.log('Data sent to sheet (Silent Mode)'))
    .catch(err => console.error('Connection error:', err));
};