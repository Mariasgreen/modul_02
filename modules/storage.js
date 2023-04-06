

export const setName = (key, obj) => {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(obj));
};


export const getStorage = (key) => (localStorage.getItem(key) ?
     JSON.parse(localStorage.getItem(key)) : []);

export const setStorage = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));

export const addTaskData = (task, key) => {
  const data = getStorage(key);
  data.push(task);
  setStorage(key, data);
};


export const removeStorage = (elem, key) => {
  const data = getStorage(key);
  const result = data.filter(item => item.elem !== elem);
  setStorage(key, result);
};

