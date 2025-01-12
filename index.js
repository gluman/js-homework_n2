
// Получаем элементы из DOM
const volumeBar = document.querySelector('.volume-bar');
const volumeRects = Array.from(document.querySelectorAll('.volume-rect'));
const volumeDown = document.querySelector('.volume-down');
const volumeUp = document.querySelector('.volume-up');
const indicator = document.querySelector('.indicator');

// Массив для хранения rect
let rectArray = [];

// Функция для добавления элементов в массив
function addToPseudoArray(elements) {
  rectArray = elements.map((rect, index) => {
    return { rect, index };
  });
}

// Добавляем элементы в псевдомассив
addToPseudoArray(volumeRects);

// Обработчик события увеличения громкости
volumeUp.addEventListener('click', () => {
  rectArray.forEach(rect => {
    rect.rect.classList.remove('volume-rect__active');
  });
  if (indicator.textContent >= rectArray.length) { indicator.textConten = 10 }
  else { indicator.textContent++ }
  let currentValue = parseInt(indicator.textContent);
  if (currentValue === 1) {
    rectArray.find(rect => rect.index === 0).rect.classList.add('volume-rect__active');
  }
  else if (currentValue > 1 && currentValue <= rectArray.length - 1) {
    let activeIndex = currentValue - 1;
    rectArray.find(rect => rect.index === activeIndex).rect.classList.add('volume-rect__active');
  }
  else if (currentValue === rectArray.length) {
    rectArray.find(rect => rect.index === rectArray.length - 1).rect.classList.add('volume-rect__active');
  }
}
);

// Обработчик события уменьшения громкости
volumeDown.addEventListener('click', () => {

  rectArray.forEach(rect => {
    rect.rect.classList.remove('volume-rect__active');
  });
  if (indicator.textContent <= 0) { indicator.textConten = 0 }
  else { indicator.textContent-- }
  let currentValue = parseInt(indicator.textContent);
  if (currentValue === 0) {
    rectArray.forEach(rect => {
      rect.rect.classList.remove('volume-rect__active');
    });

  }
  else if (currentValue > 0) {
    const activeIndex = currentValue - 1
    rectArray.find(rect => rect.index === activeIndex).rect.classList.add('volume-rect__active');
  }
});

