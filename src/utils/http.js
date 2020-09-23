export default async (url, options) => {
  const response = await fetch(url, options);
  const { status } = response;

  if (status >= 400) {
    throw new Error(response.message || 'Error');
  }

  return response.json();
};
