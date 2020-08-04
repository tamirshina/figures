
let myFunc;
export function timer(homeBtnLogic) {

  myFunc = window.setTimeout(() => {
    homeBtnLogic();
  }, 480000);
}
export function removeTimer() {

  window.clearTimeout(myFunc);
}