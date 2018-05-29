/**
 * yqing
 */
defineClass('ViewController', {
    viewDidLoad: function() {
        self.ORIGviewDidLoad();
        // Do any additional setup after loading the view, typically from a nib.
        {
            console.log("[yqing]<main.js viewDidLoad> success! 20180529");
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('Alert');
            alertView.setMessage('AlertView from js, author yqing');
            alertView.addButtonWithTitle('OK');
            alertView.show();
        }

    },
});
