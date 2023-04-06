import {user} from '/main.js';
import {removeStorage} from './storage.js';


export const numbers = (elem) => {
  const numTd = elem.querySelectorAll('.num');

  let n = 1;
  numTd.forEach((i) => {
    i.textContent = n++;
  });
};

export const checked = (list) => {
  list.addEventListener('click', (e) => {
    const target = e.target;
    const tddo = target.closest('.line').querySelector('.task');
    const status = target.closest('.line').querySelector('.status');

    if (target.closest('.btn-success')) {
      target.closest('.line').classList.remove('table-light');
      target.closest('.line').classList.add('table-success');
      tddo.classList.add('text-decoration-line-through');
      status.textContent = 'Выполнена';
    }
  });
};


export const fixTable = (list, data) => {
  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.btn-danger')) {
      const conectId = target.closest('tr').dataset.id;
      const conectIndex = data.findIndex(item => item.id == conectId);
      data.splice(conectIndex, 1);
      target.closest('.line').remove();
      numbers(list);
      removeStorage(target.dataset.thing, user);
    }
  });
};
