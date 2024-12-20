function x() {

    var a = "I am outside function y()";

    function y() {
        /*
        If a nested routine/function is declares an item with the same variable name,
        as like - the outer item, thus outer item is not available in the nested routine/function.
        */
        var a = 'I am inside of function y()';
        console.log(a);
    }
    y();

}

x(); // outputs