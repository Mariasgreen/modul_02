


import {renderToDo, renderTasks } from './modules/render.js';
import {checkInput,   formControl, random} from './modules/form.js';
import {setName, getStorage, } from './modules/storage.js';
import { checked, fixTable} from './modules/table.js';


export const user = prompt("write your name");


  const init = () => {

  const data = getStorage(user);
  setName(user, data);


  const toDo = renderToDo()
  const {list, form}= toDo;
  
  renderTasks(list, data,list);
  formControl(form,list,random) ;
  checkInput(form)
  fixTable(list, data)
  checked(list)


  };



init();


