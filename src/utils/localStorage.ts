export const setToStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getFromStorage = (key: string) => localStorage.getItem(key);

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};
