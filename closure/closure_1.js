function showName(firstName, lastName) {

    // var nameIntro = "Hi,"; // ? var dec here can be used inside the child func as it is init before return
    return makeFullName();

    function makeFullName() {
        return nameIntro + " " + firstName + " " + lastName;
    }
    
    var nameIntro = "Hi,"; // ? var dec here cannot be used inside the child func as it is init after return
    
}
console.log(showName("I am", "Pavan"));
// ? OP: (Hi, I am Pavan) if var is init before return 
// ? OP: (undefined I am Pavan) if var is init after return 