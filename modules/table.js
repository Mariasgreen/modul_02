import {user} from '/main.js';
import {removeStorage, getStorage, setStorage} from './storage.js';


export const numbers = (elem) => {
  const numTd = elem.querySelectorAll('.num');

  let n = 1;
  numTd.forEach((i) => {
    i.textContent = n++;
  });
};

export const checked = (list) => {
  list.addEventListener('click', (e) => {
    const data = getStorage(user);
    const target = e.target;
    const a = target.closest('.line').querySelector('.btn-success');
    const tddo = target.closest('.line').querySelector('.task');
    const statusItem = target.closest('.line').querySelector('.status');


    if (target === a) {
      data.forEach((item) => {
        if (item.id === target.dataset.id) {
          if (item.status === false) {
            item.status = true;
            target.closest('.line').classList.remove('table-light');
            target.closest('.line').classList.add('table-success');
            tddo.classList.add('text-decoration-line-through');
            statusItem.textContent = 'Выполнена';
          } else if (item.status === true) {
            item.status = false;
            statusItem.textContent = 'В процессе';
            target.closest('.line').classList.add('table-light');
            target.closest('.line').classList.remove('table-success');
            tddo.classList.remove('text-decoration-line-through');
          }
        }
      });
    }


    setStorage(user, data);
  });
};


export const fixTable = (list, data) => {
  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.btn-danger')) {
      const conectId = target.closest('tr').dataset.id;
      const conectIndex = data.findIndex(item => item.id === conectId);
      data.splice(conectIndex, 1);
      target.closest('.line').remove();
      numbers(list);
      removeStorage(target.dataset.thing, user);
    }
  });
};
