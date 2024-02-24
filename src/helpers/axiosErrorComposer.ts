export const axiosErrorComposer = (error: any) => {
  return () => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 404) {
      console.log("The requested resource does not exist or has been deleted");
    }

    if (statusCode === 401) {
      console.log("Please login to access this resource");
    }
  };
};
