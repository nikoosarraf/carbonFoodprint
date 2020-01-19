import React, {useState} from 'react'
import QuestionBox from './QuestionBox'
import QuizBank from './quizbank'
import './QuizContainer.css'
import Bad from './img/bad.png'
import Good from './img/good.png'
import ReallyBad from './img/reallybad.png'

function QuizContainer() {
    const [currentQuestion, setQuestion] = useState(0);
    const [currentCarbon, setCarbon] = useState(0)
    const computeAnswer = (values) => {
        setCarbon(((currentCarbon+Number(values)) +0.75))
    }
    const nextQuestion = () => {
        setQuestion(currentQuestion+1)
    }
    const generateResult = () => {
        if (currentCarbon < 27.6) {
            return (
                <div>
                    <h2>Based on your answers, you generate {currentCarbon.toFixed(2)} Kg of CO2 on average in one week.</h2>
                    <img src={Good} style={{height: '300px'}}/>
                    <h2>Great job, your average carbon foodprint is less than the average Canadian's. Keep it up!</h2>
                </div>
            )
        } else if (currentCarbon >= 27.6 && currentCarbon <55.2) {
            return (
                <div>
                    <h2>Based on your answers, you generate {currentCarbon.toFixed(2)} Kg of CO2 on average in one week.</h2>
                    <img src={Bad} style={{height: '300px'}}/>
                    <h2>Your carbon foodprint is more than the average Canadian's. You can do better!</h2>
                    <h2>Try some of these low-foodprint-emitting recipes to bring your foodprint down!</h2>
                    <a href="https://www.foodnetwork.com/recipes/ree-drummond/chickpea-curry-with-rice-2813244">Chickpea Curry</a>
                    <a href= "https://www.simplyrecipes.com/recipes/vegetarian_spinach_and_mushroom_lasagna/">Vegetarian Lasagna</a>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Based on your answers, you generate {currentCarbon.toFixed(2)} Kg of CO2 on average in one week.</h2>
                    <img src={ReallyBad} style={{height: '300px'}}/>
                    <h2>Your carbon foodprint is more than twice the average Canadian's. Do better!</h2>
                    <h2>Try some of these low-foodprint-emitting recipes to bring your foodprint down!</h2>
                    <a href="https://minimalistbaker.com/1-pot-everyday-lentil-soup/">Lentil Soup</a>
                    <a href="https://www.foodnetwork.com/recipes/ree-drummond/chickpea-curry-with-rice-2813244">Chickpea Curry</a>
                    <a href="https://minimalistbaker.com/creamy-thai-carrot-soup-with-basil/">Creamy Thai Carrot Soup</a>
                    <a href= "https://www.simplyrecipes.com/recipes/vegetarian_spinach_and_mushroom_lasagna/">Vegetarian Lasagna</a>
                    <h2>Or, read this article to learn more about how you can lower your carbon foodprint :)</h2>
                    <a href="https://www.foodnetwork.com/healthyeats/2009/04/low-carbon-diet">Eat Green: Create a Lower-Carbon Diet</a>
                </div>
            )
        }
    }
    const generateQuestion = () => {
        if (QuizBank.length > 0 && currentQuestion < 9 ) {
            if (QuizBank[currentQuestion] !== undefined) {
                const {question, answers, values} = QuizBank[currentQuestion]; 
                return (<QuestionBox
                    question={question}
                    options={answers}
                    key={currentQuestion}
                    computeAnswer={computeAnswer}
                    nextQuestion={nextQuestion}
                    values={values}
                />)
            }
        }
        else if (QuizBank.length >= 9) {
        return generateResult()
        }
    }
    return( <div className="questions">
                {generateQuestion()}
        </div>
        )
}
export default QuizContainer