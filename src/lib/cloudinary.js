export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);

  const isImage = file.type.startsWith('image/');
  const resourceType = isImage ? 'image' : 'raw';

  const uploadUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/${resourceType}/upload`;

  const response = await fetch(uploadUrl, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Erro detalhado do Cloudinary:", errorText);
    throw new Error('Erro ao fazer upload no Cloudinary');
  }

  return await response.json();
};
