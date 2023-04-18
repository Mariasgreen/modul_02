import {user} from '/main.js';
import {addTaskData} from './storage.js';
import {numbers} from './table.js';

import create from './create.js';
const {
  createRow,
} = create;


export const checkInput = (form) => {
  const input = form.querySelector('input');
  const btnReset = form.querySelector('.btn-warning');
  const btnSub = document.querySelector('.btn-primary');

  input.addEventListener('input', () => {
    btnReset.disabled = (input.value === '');
    btnSub.disabled = (input.value === '');

    if (input.value.charAt(0) === ' ') {
      input.value = '';
      btnReset.disabled = (input.value === '');
    }
  });


  btnReset.addEventListener('click', () => {
    input.value = '';
    btnReset.disabled = true;
    btnSub.disabled = true;
  });

  btnSub.addEventListener('click', () => {
    btnReset.disabled = true;
  });
};

export const addTaskPage = (task, list) => {
  list.append(createRow(task));
};


export const random = () => Math.random().toString().substring(2, 5);

export const formControl = (form, list, random) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btnSub = document.querySelector('.btn-primary');
    const formData = new FormData(e.target);
    const newTask = Object.fromEntries(formData);
    newTask.id = random();
    newTask.status = false;
    addTaskPage(newTask, list);
    addTaskData(newTask, user);
    numbers(list);
    btnSub.disabled = true;
    form.reset();
  });
};


