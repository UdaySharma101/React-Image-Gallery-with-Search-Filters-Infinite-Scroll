
export const dataFetching = async ()=>{
  try {
    let response = await fetch(
      "https://api.pexels.com/v1/curated?per_page=30",
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API,
        },
      }
    );

    let data = await response.json();
        // console.log(data.photos);

    return data.photos

  } catch (error) {
    console.log(error);
  }
}

 
