const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

getData();



