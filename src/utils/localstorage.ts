// get data into local storage
export const getItemLocalStorage = (key: string) => {
  const getItem = localStorage.getItem(key);
  if (getItem) {
    return JSON.parse(getItem);
  }
};

// set data into local storage
export const setItemLocalstorage = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
