/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */

import {remove, add, populateBooks} from './modules/app.js';
import { DateTime } from './modules/luxon.js';

const date = document.getElementById('dateTime');

const displayDate = () => {
  date.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  setTimeout(displayDate, 1000);
};
displayDate();

const anchors = document.body.querySelectorAll('.listStyle a');

const switchSection = (event) => {
  event.preventDefault();
//  const v = event.target;
//  console.log(v);
  event.target.classList.toggle('active', true);



  let recentSectionId;

  for (const anchor of anchors) {
    if (anchor !== this && anchor.classList.contains('active')) {
      [, recentSectionId] = anchor.href.split('#');
      anchor.classList.remove('active');
      break;
    }
  }

  if (recentSectionId !== undefined) {
    document.getElementById(recentSectionId).classList.add('invisible');
    document.getElementById(event.target.href.split('#')[1]).classList.remove('invisible');

  }
}

document.forms[0].addEventListener('submit', add);
document.body.addEventListener('click', remove);
document.addEventListener('DOMContentLoaded', populateBooks);
anchors.forEach((anchor) => anchor.addEventListener('click', switchSection));
