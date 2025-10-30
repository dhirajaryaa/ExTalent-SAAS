import { storage } from "#imports";

const setLocalStorage = async (key, value) =>
  await storage.setItem(`local:${key}`, JSON.stringify(value)); // set data in extension local storage
const setSyncStorage = async (key, value) =>
  await storage.setItem(`sync:${key}`, JSON.stringify(value)); // set data in extension sync storage

const getLocalStorage = async (key) => {
  const data = await storage.getItem(`local:${key}`);
  return data ? JSON.parse(data) : null;
}; // get data in extension local storage
const getSyncStorage = async (key) => {
  const data = await storage.getItem(`sync:${key}`);
  return data ? JSON.parse(data) : null;
}; // get data in extension sync

const removeLocalStorage = async (key) =>
  await storage.removeValue(`local:${key}`); // remove data in extension local storage
const removeSyncStorage = async (key) =>
  await storage.removeValue(`sync:${key}`); // remove data in extension sync storage

export {
  setLocalStorage,
  setSyncStorage,
  getLocalStorage,
  getSyncStorage,
  removeLocalStorage,
  removeSyncStorage,
};
