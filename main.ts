input.onGesture(Gesture.ScreenDown, function () {
    passi += 1
})
let passi = 0
basic.forever(function () {
    basic.showNumber(passi)
    if (input.logoIsPressed()) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
