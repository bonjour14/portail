basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        servos.P2.setAngle(30)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        servos.P2.setAngle(130)
    }
})
