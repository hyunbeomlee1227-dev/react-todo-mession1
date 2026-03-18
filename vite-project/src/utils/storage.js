const storage = window.localStorage;

export const storageKey = "todos";

export const setStorage = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key, defalutValue) => {
  const value = storage.getItem(key);

  if (value === null) return defalutValue;

  if (typeof value === Number) return value;

  return JSON.parse(value);
};

export const getSize = () => {
  return storage.length;
};
