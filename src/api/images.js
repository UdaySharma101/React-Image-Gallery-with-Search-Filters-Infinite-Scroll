export const dataFetching = async (page) => {
  try {

    const response = await fetch(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=20`,
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API,
        },
      }
    );

    const data = await response.json();

    return data.photos;

  } catch (error) {
    console.log(error);
  }
};