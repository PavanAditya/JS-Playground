// ? If the useCapture is sent true to the eventListener, Event Capturing/Trickling will happen
// ? If the useCapture is sent false (or no value is passed to the eventListener), Event Bubbling will happen
const useCapture = false;

document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log('GrandPa Calling!!!!')
    }, useCapture);

document.querySelector("#parent")
    .addEventListener('click', () => {
        console.log('Papa Calling!!!!')
    }, useCapture);

document.querySelector("#child")
    .addEventListener('click', () => {
        console.log('Dude Calling!!!!')
    }, useCapture);


// ! Event Bubbling: Capturing events from inner div to the outer div. (Bubble Format)
// ! Event Capturing/Trickling: Capturing events from outer div to inner div. (Hirearchial Format)