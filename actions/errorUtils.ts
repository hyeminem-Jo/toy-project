export const handleError = (error: Error) => {
  console.error(error);
  throw new Error(error.message || 'An error occurred');
};
