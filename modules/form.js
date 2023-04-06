import { user } from '/main.js';
import { addTaskData} from './storage.js';
import {numbers} from './table.js';

import create from  './create.js';
const {
    createRow,
    } = create;


export const checkInput = (form) => {
  const input = form.querySelector('input');
  const btnReset = form.querySelector('.btn-warning');
  const btnSub = document.querySelector('.btn-primary');

  input.addEventListener('input', function() {
    if (input.value.length > 1) {
      btnReset.removeAttribute('disabled');
       } else if (input.value.length < 1){
      btnReset.disabled = true;
       } else if (input.value.charAt(0) === ' ') {
      input.value = '';
      btnReset.disabled = (input.value === '');
    }
  });


  btnReset.addEventListener("click", function() {
      input.value = '';
      btnReset.disabled = true;
     
    })

    btnSub.addEventListener("click", function() {
      
      btnReset.disabled = true;
     
    })

}



  export const addTaskPage = (task, list) => {
    list.append(createRow(task));
  };

  
  export const random = () => Math.random().toString().substring(2, 5)

  export const formControl = (form,list,random) => {
    form.addEventListener('submit', e => {
      e.preventDefault();
    
      const formData = new FormData(e.target);
      const newTask = Object.fromEntries(formData);
      newTask.id = random();
      addTaskPage(newTask, list);
      addTaskData(newTask,user);
      numbers(list)
  
      form.reset()
     
      
    });
  }
  
  