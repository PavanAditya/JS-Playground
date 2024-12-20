var locales = {
  india: function () { // The Europe continent's local scope
    var myFriend = 'Kapil';

    var karnataka = function () { // The France country's local scope
      var myFriend = 'Subash';

      var bangalore = function () { // The Paris city's local scope
        var myFriend = 'Lokesh';
        console.log(myFriend);
      };

      console.log(myFriend);
      bangalore();
    };


    console.log(myFriend);
    karnataka();
  }
};

locales.india();