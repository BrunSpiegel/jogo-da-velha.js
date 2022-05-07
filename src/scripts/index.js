const $bigSquare0 = document.querySelector('.big-square-0')
const $bigSquare1 = document.querySelector('.big-square-1')
const $bigSquare2 = document.querySelector('.big-square-2')
const $bigSquare3 = document.querySelector('.big-square-3')
const $bigSquare4 = document.querySelector('.big-square-4')
const $bigSquare5 = document.querySelector('.big-square-5')
const $bigSquare6 = document.querySelector('.big-square-6')
const $bigSquare7 = document.querySelector('.big-square-7')
const $bigSquare8 = document.querySelector('.big-square-8')

let = currentMove = 'X'

function toggleMove() {
  if (currentMove == 'X') {
    currentMove = 'O'
  } else {
    currentMove = 'X'
  }
}

function verifyGame() {
  if (
    $bigSquare0.innerHTML != '' &&
    $bigSquare0.innerHTML == $bigSquare1.innerHTML &&
    $bigSquare1.innerHTML == $bigSquare2.innerHTML
  ) {
    return currentMove
  }
  if (
    $bigSquare3.innerHTML != '' &&
    $bigSquare3.innerHTML == $bigSquare4.innerHTML &&
    $bigSquare4.innerHTML == $bigSquare5.innerHTML
  ) {
    return currentMove
  }
  if (
    $bigSquare6.innerHTML != '' &&
    $bigSquare6.innerHTML == $bigSquare7.innerHTML &&
    $bigSquare7.innerHTML == $bigSquare8.innerHTML
  ) {
    return currentMove
  }

  if (
    $bigSquare0.innerHTML != '' &&
    $bigSquare0.innerHTML == $bigSquare3.innerHTML &&
    $bigSquare3.innerHTML == $bigSquare6.innerHTML
  ) {
    return currentMove
  }

  if (
    $bigSquare1.innerHTML != '' &&
    $bigSquare1.innerHTML == $bigSquare4.innerHTML &&
    $bigSquare4.innerHTML == $bigSquare7.innerHTML
  ) {
    return currentMove
  }

  if (
    $bigSquare2.innerHTML != '' &&
    $bigSquare2.innerHTML == $bigSquare5.innerHTML &&
    $bigSquare5.innerHTML == $bigSquare8.innerHTML
  ) {
    return currentMove
  }

  if (
    $bigSquare0.innerHTML != '' &&
    $bigSquare0.innerHTML == $bigSquare4.innerHTML &&
    $bigSquare4.innerHTML == $bigSquare8.innerHTML
  ) {
    return currentMove
  }

  if (
    $bigSquare2.innerHTML != '' &&
    $bigSquare2.innerHTML == $bigSquare4.innerHTML &&
    $bigSquare4.innerHTML == $bigSquare6.innerHTML
  ) {
    return currentMove
  }
}

$bigSquare0.addEventListener('click', function () {
  if ($bigSquare0.innerHTML != '') {
    return
  }
  $bigSquare0.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare1.addEventListener('click', function () {
  if ($bigSquare1.innerHTML != '') {
    return
  }

  $bigSquare1.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare2.addEventListener('click', function () {
  if ($bigSquare2.innerHTML != '') {
    return
  }

  $bigSquare2.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare3.addEventListener('click', function () {
  if ($bigSquare3.innerHTML != '') {
    return
  }

  $bigSquare3.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare4.addEventListener('click', function () {
  if ($bigSquare4.innerHTML != '') {
    return
  }

  $bigSquare4.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare5.addEventListener('click', function () {
  if ($bigSquare5.innerHTML != '') {
    return
  }

  $bigSquare5.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare6.addEventListener('click', function () {
  if ($bigSquare6.innerHTML != '') {
    return
  }

  $bigSquare6.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare7.addEventListener('click', function () {
  if ($bigSquare7.innerHTML != '') {
    return
  }

  $bigSquare7.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})

$bigSquare8.addEventListener('click', function () {
  if ($bigSquare8.innerHTML != '') {
    return
  }

  $bigSquare8.innerHTML = currentMove
  const gameResult = verifyGame()

  if (gameResult == 'X' || gameResult == 'O') {
    alert(currentMove)
  }

  toggleMove()
})
