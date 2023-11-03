function getDataById(data, id) {
  const foundData = data.find(item => item.id === Number(id));

  if (foundData) {
    return foundData;
  } else {
    throw new Error('Item not found');
  }
}

export default getDataById;