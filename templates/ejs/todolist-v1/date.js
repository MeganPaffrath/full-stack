//jshint esversion: 6

exports.getDate = function() {
    const today = new Date();
    // var currDay = today.getDay();
    // console.log(currDay);
    
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const today = new Date();
    
    const options = {
      weekday: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
}
