import $, { event } from "jquery";
import './styles/index.scss';

// ПОКАЗАТЬ СПИСОК ФИЛЬТРОВ
const listFilter = document.querySelectorAll('.table__mode__list__filter');

listFilter.forEach((button) => {
  const descriptionButton = button.querySelector('.table__mode__list__filter__item__description');

  descriptionButton.addEventListener('click', () => {
    const descriptionText = button.querySelector('.table__mode__list__filter__item__description__text');

    if(descriptionText) {
      descriptionText.classList.toggle('table__mode__list__filter__item__description__text_active');
    };
    
    const dropdown = button.querySelector('.table__mode__list__filter__dropdown');

    if (dropdown) {
      dropdown.classList.toggle('table__mode__list__filter__dropdown_active');
    };
  });
});

// МОДАЛЬНОЕ ОКНО ДЕЙСТВИЯ С КАРТИНКАМИ
let modalPhoto = document.querySelector('.photo__modal');
let btnImage = document.querySelector('.table__mode__list__setting__hilton__image');

if (modalPhoto && btnImage) {
  btnImage.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPhoto.classList.toggle('photo__modal_active');
  });
};

// МОДАЛЬНОЕ ОКНО СКАЧАТЬ 
let modalDownload = document.querySelector('.download__modal');
let btnDownload = document.querySelector('.download');

if (modalDownload && btnDownload) {
  btnDownload.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalDownload.classList.toggle('download__modal_active');
  });
};
/*-------------------------------------------------------------------------*/
let backOverlay = document.querySelector('.overlay');
let modal  = document.querySelector('.modal');
let btnSend = document.querySelector('.choice__send');
let btnFull = document.querySelector('.modal__wrapper__buttons__wrapper__button-full');
let btnBascet = document.querySelector('.bascet');
let btnMessage = document.querySelector('.message');
let btnCancel = document.querySelector('.modal__wrapper__buttons__wrapper__button');
// МОДАЛЬНОЕ ОКНО ОТПРАВКИ СООБЩЕНИЯ
if (backOverlay && btnSend && modal && btnFull) {
  btnSend.addEventListener('click', function (evt) {
    evt.preventDefault();
    backOverlay.classList.toggle('overlay_active');
    modal.classList.toggle('modal_active');
  });
  btnFull.addEventListener('click', function() {
    backOverlay.classList.remove('overlay_active');
    modal.classList.remove('modal_active');
  });
};
// МОДАЛЬНОЕ ОКНО УДАЛЕНИЯ
if (btnBascet && backOverlay && modal && btnMessage && btnCancel) {
  btnBascet.addEventListener('click', function (evt) {
    evt.preventDefault();
    backOverlay.classList.toggle('overlay_active');
    modal.classList.toggle('modal_active');
    btnMessage.classList.toggle('message_hidden');
  });
  btnCancel.addEventListener('click' , function() {
    backOverlay.classList.remove('overlay_active');
    modal.classList.remove('modal_active');
    btnMessage.classList.remove('message_hidden');
  });
};
/*--------------------------------------------*/

// ТАБЛИЦА МАРЖИНАЛЬНОСТИ
let btnEdit = document.querySelector('.edit');
let btnSave = document.querySelector('.save');
let timeItem = document.querySelector('.firmware__marginality__time-item');
let timeInput = document.querySelector('.firmware__marginality__time-input');
let percentItem = document.querySelector('.firmware__marginality__percent-item');
let percentInput = document.querySelector('.firmware__marginality__percent-input');

if (btnEdit && btnSave && timeItem && timeInput && percentItem && percentInput) {
  btnEdit.addEventListener('click', function (evt) {
    evt.preventDefault();
    btnEdit.classList.toggle('edit_hidden');
    btnSave.classList.toggle('save_active');
    timeItem.classList.toggle('firmware__marginality__time-item_hidden');
    timeInput.classList.toggle('firmware__marginality__time-input_hidden');
    percentItem.classList.toggle('firmware__marginality__percent-item_hidden');
    percentInput.classList.toggle('firmware__marginality__percent-input_hidden');
  });
  btnSave.addEventListener('click', function (evt) {
    evt.preventDefault();
    btnEdit.classList.remove('edit_hidden');
    btnSave.classList.remove('save_active');
    timeItem.classList.remove('firmware__marginality__time-item_hidden');
    timeInput.classList.remove('firmware__marginality__time-input_hidden');
    percentItem.classList.remove('firmware__marginality__percent-item_hidden');
    percentInput.classList.remove('firmware__marginality__percent-input_hidden');
  });
};

//АККОРДЕОН
let accordionButtons = document.getElementsByClassName('accordion__button');  
     
for(let i = 0; i < accordionButtons.length; i++) {
  let plusActive = accordionButtons[i].classList.toggle('plus');
    accordionButtons[i].addEventListener('click',function(){  
      this.classList.toggle('active'); 
      this.classList.toggle('less'); 
      this.classList.toggle('plus');   
      let accordionList = this.nextElementSibling;

        if(accordionList.style.display ==='flex'){
          accordionList.style.display = 'none';    
        }else{
          accordionList.style.display='flex';    
        }  
        accordionList.classList.toggle('animation');  
    });
};



