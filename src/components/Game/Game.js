import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { checkGuess } from '../../game-helpers'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner/Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [banner, setBanner] = React.useState({ num: 0, win: false })
  let gameOver = false

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)
    const num = nextGuesses.length
    const win = tentativeGuess === answer
    setBanner({ num, win })
  }

  if (banner.win || banner.num >= 6) {
    gameOver = true
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />

      {gameOver && (
        <Banner
          theClass={banner.win ? 'happy banner' : 'sad banner'}
          num={banner.num}
          win={banner.win}
          answer={answer}
        />
      )}
    </>
  )
}

export default Game
