const storage = window.localStorage;

export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

export const getItem = (key, defalutValue) => {
  const value = storage.getItem(key);

  if (value === null) return defalutValue;

  if (typeof value === Number) return value;

  return JSON.parse(value);
};

export const getSize = () => {
  return storage.length;
};
