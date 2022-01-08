'use strict';

const text = 'Hello Cyril, est ce que tu viens pour les vacances?!!!';

let index = 0;

const writeText = function () {
  document.body.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
};

setInterval(writeText, 100);
