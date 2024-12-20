// ? If the useCapture is sent true to the eventListener, Event Capturing/Trickling will happen
// ? If the useCapture is sent false (or no value is passed to the eventListener), Event Bubbling will happen
const useCapture = false;

document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log('GrandPa Calling!!!!')
    }, useCapture); // ? Third Param (useCapture) is not mandatory. Even if none is passed it is considered as false.

document.querySelector("#parent")
    .addEventListener('click', () => {
        console.log('Papa Calling!!!!')
    }, useCapture); // ? Third Param (useCapture) is not mandatory. Even if none is passed it is considered as false.

document.querySelector("#child")
    .addEventListener('click', () => {
        console.log('Dude Calling!!!!')
    }, useCapture); // ? Third Param (useCapture) is not mandatory. Even if none is passed it is considered as false.


// ! Event Bubbling: Capturing events from inner div to the outer div. (Bubble Format)
// ! Event Capturing/Trickling: Capturing events from outer div to inner div. (Hirearchial Format)

// TODO: Be it any propogation chosen (Bubbling or Capturing) Both the cycles are followed. Chosing our cycle (by passing the useCapture param value) we are basically setting up which one to be executed first
// TODO: Check will be done whether the method is executed in the previous cycle or not and will execute the method accordingly in this cycle (will execute it only if not covered in the previous cycle.)

// * If the Click is only to be associated with the child div or the div only where the click happened, e.stopPropogation() can be used for stopping the next hirerachical event calls in the cycle.