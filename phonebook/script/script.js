/* eslint-disable max-len */


import {getStorage} from './modules/serviceStorage.js';


import * as render from './modules/render.js';

import {formControl,  deleteControl, modalControl, hoverRow}  from './modules/control.js';

{
  



  

  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = getStorage('phonebook');

    const {list,
      logo,
      btnAdd,
      formOverlay,
      form,
      bthDel,
    } = render.renderPhoneBook(app, title);

    const {closeModal} = modalControl(btnAdd, formOverlay);
    const allRow = render.renderContacts(list, data);
    hoverRow(allRow, logo);

    deleteControl(bthDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}

