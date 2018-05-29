/**
 * yqing
 */
defineClass('SGAdverPageViewController', {
    viewDidLoad: function() {
        self.ORIGviewDidLoad();
        // Do any additional setup after loading the view, typically from a nib.
        {
            console.log("[yqing]<main.js viewDidLoad> success!");
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('Alert');
            alertView.setMessage('AlertView from js, author yqing');
            alertView.addButtonWithTitle('OK');
            alertView.show();
        }

    },
});
