export default async function upload(formData: any) {
  return fetch(
    'https://api.cloudinary.com/v1_1/dih1r5web/image/upload',
    {
      method: 'post',
      body: formData,
    },
  ).then((response) => response.json());
  //
}


