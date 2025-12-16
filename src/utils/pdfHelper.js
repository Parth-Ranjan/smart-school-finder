// src/utils/pdfHelper.js
export const fetchPdfBlob = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch PDF');
  }

  return await res.blob();
};
