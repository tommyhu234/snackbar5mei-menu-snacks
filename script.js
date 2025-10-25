const items = document.querySelectorAll('.carousel-item');
let current = 0;
const intervalTime = 3000; // 3 seconds per item

function showNextItem() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  console.log(current);
  items[current].classList.add('active');
}

setInterval(showNextItem, intervalTime);