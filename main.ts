input.onGesture(Gesture.ScreenDown, function () {
    passi += 1
})
let passi = 0
basic.showString("MICRO:BIT")
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
record.startRecording(record.BlockingState.Blocking)
basic.forever(function () {
    basic.showNumber(passi)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    1,
    5000,
    76,
    255,
    4003,
    SoundExpressionEffect.Tremolo,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.InBackground)
    if (input.logoIsPressed()) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        record.playAudio(record.BlockingState.Blocking)
    }
})
