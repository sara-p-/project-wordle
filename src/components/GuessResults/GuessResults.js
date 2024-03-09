import React from 'react'
import Guess from '../Guess/Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({ guesses, answer }) {
  // 1. Create the rows
  // 2. Create the cells in each row
  // 3. Iterate through the Guess Results to populate the cells

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults
