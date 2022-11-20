import { refs } from './refs';
// import { Spinner } from 'spin.js';

// const opts = {
//   lines: 13, // The number of lines to draw
//   length: 38, // The length of each line
//   width: 17, // The line thickness
//   radius: 45, // The radius of the inner circle
//   scale: 1, // Scales overall size of the spinner
//   corners: 1, // Corner roundness (0..1)
//   speed: 0.9, // Rounds per second
//   rotate: 25, // The rotation offset
//   animation: 'spinner-line-shrink', // The CSS animation name for the lines
//   direction: 1, // 1: clockwise, -1: counterclockwise
//   color: '#d50707', // CSS color or array of colors
//   fadeColor: 'transparent', // CSS color or array of colors
//   top: '50%', // Top position relative to parent
//   left: '50%', // Left position relative to parent
//   shadow: '0 0 1px transparent', // Box-shadow for the lines
//   zIndex: 2000000000, // The z-index (defaults to 2e9)
//   className: 'spinner', // The CSS class to assign to the spinner
//   position: 'absolute', // Element positioning
// };
// const spinner = new Spinner(opts);

// export function spinnerPlay() {
//   spinner.spin(refs.spinner);
//   refs.backdrop.classList.remove('is-hidden');
// }

// export function spinnerStop() {
//   refs.backdrop.classList.add('is-hidden');
//   spinner.stop();
// }

///////////////////
// spiner svg

export function spinnerPlay() {
  refs.body.classList.add('loading');
  // refs.backdrop.classList.remove('is-hidden');
}

export function spinnerStop() {
  window.setTimeout(function () {
    refs.body.classList.remove('loading');
    refs.body.classList.add('loaded');
    // refs.backdrop.classList.add('is-hidden');
  }, 1500);
}

// const spinner = new Spinner(opts);
// export function spinerPlay() {
//     refs.backdrop.classList.remove('is-hidden');

//     spinner.spin(refs.spiner);
// }

// export function spinerStop() {
//     spinner.stop();
//     refs.backdrop.classList.add('is-hidden');
// }
