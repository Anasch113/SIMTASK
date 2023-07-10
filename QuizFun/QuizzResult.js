import React from 'react'
import quizzes from './QuizzData'
import "./QuizzResult.scss"

const QuizzResult = ({score, correctAns, handlePlayAgain}) => {
  return (
    <div class="card">
  <div class="card-body">
  <div className='result-section'>
      <h2 className='h2-text'>Completed</h2>
      <h4 className='h4-text'>Total Score {score}/50</h4>
    <h4 className="h4-text">Your correct question {correctAns} out of {quizzes.length}</h4>
    
    <button type="button" onClick={handlePlayAgain} class="btn btn-success">Play Again</button>
    </div>
  </div>
</div>
   
  )
}

export default QuizzResult
