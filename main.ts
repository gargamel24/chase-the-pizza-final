info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(timer)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(20, 140), randint(10, 110))
    info.changeScoreBy(1)
    info.startCountdown(timer)
})
let timer = 0
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(monkey, 200, 200)
monkey.setStayInScreen(true)
scene.setBackgroundColor(7)
let hunter = sprites.create(img`
    ........................
    ..............fff.......
    .............f2fffff....
    ...........ff22eeeeeff..
    ..........ff222eeeeeeff.
    ..........feeeefffeeeef.
    .........fe2222eeefffff.
    .........f2efffff222efff
    ..cc.....fffeeefffffffff
    ..cdcc...fee44fbbe44efef
    ..ccddcc..feddfbb4d4eef.
    ....cdddceefddddd4eeef..
    .....ccdcddee2222222f...
    ......cccdd44e544444f...
    .........eeeeffffffff...
    .............ff...fff...
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
hunter.setPosition(randint(20, 140), randint(10, 110))
timer = 2
info.startCountdown(timer)
info.setLife(3)
music.setVolume(5)
game.onUpdate(function () {
    if (info.score() == 50) {
        game.over(true)
    }
})
