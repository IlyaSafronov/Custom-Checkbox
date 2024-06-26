'use strict';
const checkboxes = document.querySelectorAll('.checkbox');
const beginner = document.getElementById('beginner');
const advanced = document.getElementById('advanced');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if(e.target === beginner) {
      advanced.checked = false;
    }
    if(e.target === advanced) {
      beginner.checked = false;
    }
  });
});