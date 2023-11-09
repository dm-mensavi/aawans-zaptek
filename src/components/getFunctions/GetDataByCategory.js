function getDataByCategory(data, category) {
  // filter the data array by category
  const filteredData = data.find(item => item.category === category);

  // check if the filtered array is empty or not
  if (filteredData.length > 0) {
    // return the filtered array
    return filteredData;
  } else {
    // throw an error if no item matches the category
    throw new Error('Categories not found');
  }
}

export default getDataByCategory;
