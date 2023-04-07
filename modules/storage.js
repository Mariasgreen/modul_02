

export const getStorage = (key) => (localStorage.getItem(key) ?
     JSON.parse(localStorage.getItem(key)) : []);

export const setStorage = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));

export const addTaskData = (task, key) => {
  const data = getStorage(key);
  data.push(task);
  setStorage(key, data);
};


export const removeStorage = (thing, key) => {
  const data = getStorage(key);
  const result = data.filter(item => item.thing !== thing);
  setStorage(key, result);
};

