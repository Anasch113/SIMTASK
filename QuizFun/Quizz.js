import React from 'react'
import QuizzResult from "./QuizzResult"
import quizzes from "./QuizzData"
import { useState } from 'react'
import Footer from "./Footer"
import "./Quizz.scss"
const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextOption = ()=>{
    setClicked(false)
const nextOption = currentQuestion + 1;
if(nextOption<quizzes.length){
  setCurrentQuestion(nextOption)
}
else{
  setShowResult(true)
}

  }
 
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false)
  const handleAnswerOptions = (isCorrect)=>{
if(isCorrect){
setScore(score+5)
setCorrectAns(correctAns +1)
}
setClicked(true)


  }

  const handlePlayAgain = ()=>{
    setScore(0);
    setCorrectAns(0);
    setCurrentQuestion(0);
    setShowResult(false)
  }
  return (
  
    <div className="main-container">
        <div className="hero-banner">
            
<div className="heading">
<h2 className='heading-h2'>Quiz Fun</h2>
<h4 className='heading-h4'>Challenge  your  <span>Knowledge</span></h4>
</div>
        </div>
        <div className="quiz-section">
          {showResult?(<QuizzResult handlePlayAgain ={handlePlayAgain} score= {score} correctAns = {correctAns}/>):
          (         <>
<div class="card-m">
  <div class="card-body-m">
  <div className="card-qs" >
  
  <div className="card-body-qs">
    
    
    <div className="question-section">
      <h4 className="h4-text">Your Score: {score}</h4>
      <h4 className='h2-text'>Question {currentQuestion + 1} of {quizzes.length}</h4>
      <h3 className='h5-text'>Q.{quizzes[currentQuestion].questionText}</h3>
    </div>
    </div>
    </div>
    <div className="card-as">
  <div className="card-body-as">
  <div className="answer-section">
    {quizzes[currentQuestion].answerOptions.map((ans, i)=>{

return  <button  key={i} type="button" disabled={clicked} onClick={()=>handleAnswerOptions(ans.isCorrect)} className={`btn-o btn-warning mx-3 my-3 ${clicked & ans.isCorrect? "correct" : "btn"}`}><h5 className='ans-h5'>{ans.answerText}</h5></button>
    })}

      
    </div>
  
  </div>
</div>
</div>
</div>
<div class="card-bt">
  <div class="card-body-bt">
  <div className="actions">
      <button type="button" onClick={handlePlayAgain} className="btn btn-danger mx-3 my-3">Quit</button>
      <button onClick={handleNextOption} type="button" disabled = {!clicked} className="btn btn-primary mx-3 my-3">Next</button>
      </div>
  </div>
</div>
 
     

  
 
  </>)}
 
        </div>
        <Footer/>
    </div>
  
  )
}

export default Quizz
