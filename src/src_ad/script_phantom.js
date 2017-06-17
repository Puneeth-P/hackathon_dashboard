var page = require('webpage').create();
var address = "http://www.google.com";
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            page.render("myimg.png");
            phantom.exit();
        }, 2000); // Change timeout as required to allow sufficient time 
    }
});
