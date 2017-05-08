var gpio = require("onoff").Gpio;
var led = new gpio(18, 'out');
var isOpened = false; 

var unlockRelay = function (cb) {
  if (!isOpened) {
    led.writeSync(1);
    isOpened = true;
    console.log('In gpio-write: open');
    setTimeout(function () {
      led.writeSync(0);
      isOpened = false;
      console.log('In gpio-write: close');
      cb();
    }, 3000);
  }
}

module.exports = { unlockRelay: unlockRelay };
