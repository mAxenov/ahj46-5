export default class Popover {
  constructor() {
    this._popover = [];
  }

  showPopover(message, element) {
    const popoverElement = document.createElement('div');
    const popoverHeader = document.createElement('H3');
    const popoverBody = document.createElement('div');
    const popoverArrow = document.createElement('div');

    popoverElement.classList.add('popover');
    popoverHeader.classList.add('popover-header');
    popoverHeader.textContent = message.title;
    popoverBody.classList.add('popover-body');
    popoverBody.textContent = message.message;
    popoverArrow.classList.add('popover-arrow');
    popoverElement.appendChild(popoverHeader);
    popoverElement.appendChild(popoverBody);
    popoverElement.appendChild(popoverArrow);
    document.body.appendChild(popoverElement);

    const id = performance.now();
    popoverElement.id = id;
    this._popover.push({
      id,
      element: popoverElement,
    });

    const { left, top } = element.getBoundingClientRect();

    popoverElement.style.left = `${left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 8}px`;
    popoverArrow.style.left = `${popoverElement.offsetWidth / 2 - popoverArrow.offsetWidth / 2}px`;
    return id;
  }

  removePopover(id) {
    const popover = this._popover.find((t) => t.id === id);

    popover.element.remove();

    this._popover = this._popover.filter((t) => t.id !== id);
  }
}
