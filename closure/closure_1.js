function showName(firstName, lastName) {

    return makeFullName();

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    var nameIntro = "My name is ";


}
console.log(showName("Sachin", "Tendulkar"));

