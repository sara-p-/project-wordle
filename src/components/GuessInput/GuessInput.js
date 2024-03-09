import React from 'react'

function GuessInput({ handleSubmitGuess, gameOver }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmitGuess(tentativeGuess)
        setTentativeGuess('')
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        disabled={gameOver}
        onChange={(e) => {
          setTentativeGuess(e.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput
