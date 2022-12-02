// TODO: write code here

import Popover from './components/popover';

const messagePopover = {
  title: 'Popover title',
  message: "And here's some amazing content.It's very engaging. Right?",
};

const button = document.querySelectorAll('.button');
const popoverFactory = new Popover();
const showPopover = (message, el) => {
  const idPopover = popoverFactory.showPopover(message, el);
  el.setAttribute('aria-describedby', `${idPopover}`);
};

const removePopover = (el) => {
  if (el.hasAttribute('aria-describedby')) {
    popoverFactory.removePopover(Number(el.getAttribute('aria-describedby')));
    el.removeAttribute('aria-describedby');
  }
  // actualMessages.forEach((el) => popoverFactory.removePopover(el.id));
  // actualMessages = [];
};

button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target.hasAttribute('aria-describedby')) {
      removePopover(e.target);
    } else {
      showPopover(messagePopover, e.target);
    }
  });
  btn.addEventListener('blur', (e) => removePopover(e.target));
});
