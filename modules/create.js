

const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('app-container', 'h-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

  return container;
};


const createTitle = () => {
  const text = document.createElement('h3');
  text.innerHTML = 'Todo App';

  return text;
};


const createForm = () => {
  const form = document.createElement('form');


  form.classList.add('form', 'd-flex', 'align-items-center', 'mb-3');

  form.insertAdjacentHTML('beforeend', `
   <label class = "form-group me-3 mb-0">
   <input class = "form-control"   name = "thing" type = "text" placeholder="ввести задачу" required>
  
   </label>
 
  `);

  const btn1 = document.createElement('button');
  btn1.className = 'btn btn-primary me-3';
  btn1.textContent = 'Сохранить';
  btn1.type = 'submit';
  btn1.setAttribute('disabled', 'disabled');
  const btn2 = document.createElement('button');
  btn2.className = 'btn btn-warning';
  btn2.textContent = 'Очистить';
  btn2.type = 'reset';
  btn2.setAttribute('disabled', 'disabled');
  form.append(btn1, btn2);

  return form;
};

const createDiv = () => {
  const div = document.createElement('div');
  div.classList.add('table-wrapper');
  return div;
};


const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');


  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
    <th>№</th>
    <th>Задача</th>
    <th>Статус</th>
    <th>Действия</th>
    </tr>
    `);

  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  table.tbody = tbody;


  return table;
};


const createRow = ({id, thing, status, action}) => {
  const tr = document.createElement('tr');
  tr.classList.add('line', 'table-light');
  tr.setAttribute('data-id', id);

  const tdnumber = document.createElement('td');
  tdnumber.classList.add('num');


  const tddo = document.createElement('td');
  tddo.classList.add('task');
  tddo.textContent = thing;

  const tdstatus = document.createElement('td');
  tdstatus.classList.add('status');
  tdstatus.textContent = 'В процессе';

  const tdaction = document.createElement('td');

  const button1 = document.createElement('button');
  button1.classList.add('btn', 'btn-danger');
  button1.textContent = 'Удалить';
  button1.dataset.thing = thing;

  const button2 = document.createElement('button');
  button2.classList.add('btn', 'btn-success');
  button2.textContent = 'Завершить';


  tdaction.append(button1, button2);
  tr.append(tdnumber, tddo, tdstatus, tdaction);

  return tr;
};

export default {
  createContainer,
  createDiv,
  createForm,
  createRow,
  createTable,
  createTitle,
};
