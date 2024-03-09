import React from 'react'

function BannerSad({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  )
}

function BannerHappy({ num }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{num} guesses</strong>.
    </p>
  )
}

function Banner({ theClass, num, win, answer }) {
  return (
    <div className={theClass}>
      {win ? <BannerHappy num={num} /> : <BannerSad answer={answer} />}
    </div>
  )
}

export default Banner
