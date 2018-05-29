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

require('UILabel,UIColor');
defineClass('JSViewController : UIViewController', {
            viewDidLoad: function() {
            self.super().viewDidLoad();
            // Do any additional setup after loading the view.
            {
            console.log("[yqing]<main.js viewDidLoad> success! 20180529-1");
            var lab = require('UILabel').alloc().init();
            lab.setBackgroundColor(UIColor.lightGrayColor());
            lab.setFrame({x:10, y:44, width:250, height:40});
            lab.setText("JSViewController");
            self.view().addSubview(lab);
            }
            },
            didReceiveMemoryWarning: function() {
            self.super().didReceiveMemoryWarning();
            // Dispose of any resources that can be recreated.
            },
            });

require('UIWindow,UIScreen,UIColor,YQViewController,JSViewController');
defineClass('AppDelegate', {
    gotoRootViewController: function() {
        // Do any additional setup after loading the view, typically from a nib.
        {
            console.log("[yqing]<main.js gotoRootViewController> success! 20180529");
            self.setWindow(UIWindow.alloc().initWithFrame(UIScreen.mainScreen().bounds()));
            self.window().setBackgroundColor(UIColor.whiteColor());
            var rootViewController = JSViewController.new();
            self.window().setRootViewController(rootViewController);
            self.window().makeKeyAndVisible();
        }

    },
});

