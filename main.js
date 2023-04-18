

import {renderToDo, renderTasks} from './modules/render.js';
import {checkInput, formControl, random} from './modules/form.js';
import {getStorage} from './modules/storage.js';
import {checked, fixTable} from './modules/table.js';


export const user = prompt('write your name');


const init = () => {
  const data = getStorage(user);
  const toDo = renderToDo();
  const {list, form} = toDo;

  renderTasks(list, data, list);
  formControl(form, list, random);
  checkInput(form);
  checked(list);
  fixTable(list, data);
  
};


init();


