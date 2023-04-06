
import {numbers} from './table.js';

import create from './create.js';
const {createContainer,
  createDiv,
  createForm,
  createRow,
  createTable,
  createTitle} = create;


export const renderToDo = () => {
  const container = createContainer();
  document.body.appendChild(container);

  const title = createTitle();
  container.append(title);

  const form = createForm();
  container.append(form);

  const div = createDiv();
  container.append(div);

  const table = createTable();
  div.appendChild(table);


  return {
    list: table.tbody,
    form,
    table,
    div,
    title,
  };
};


export const renderTasks = (elem, data, list) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  numbers(list);
  return allRow;
};

