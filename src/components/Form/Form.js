import React from 'react'

function Form({ handleSubmitGuess }) {
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
        onChange={(e) => {
          setTentativeGuess(e.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default Form
