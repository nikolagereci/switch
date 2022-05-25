input.onButtonPressed(Button.A, function () {
    _switch = 1
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    _switch = 0
    basic.showIcon(IconNames.No)
})
let _switch = 0
_switch = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (_switch == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
