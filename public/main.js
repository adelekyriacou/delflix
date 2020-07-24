// Grab all items with the class of .tab-item
const tabItems = document.querySelectorAll('.tab-item');

// Grab all items with a class of .tab-content-item
const tabContentItems = document.querySelectorAll('.tab-content-item');



// Select tab content items
function selectItem(e) {
  removeBorder(); // remove all borders
  removeShow(); // remove all instances of the show class

  // Add border to the item that's been clicked
  this.classList.add('tab-border');

  // Grab corresponding item content that's been clicked from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  // Add show class to the item that's been clicked
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// For each item, take the item and listen for a click. When it's clicked, call the function selectItem
tabItems.forEach(item => item.addEventListener('click', selectItem));
