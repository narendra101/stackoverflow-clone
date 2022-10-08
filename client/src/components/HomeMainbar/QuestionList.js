import React from 'react'
import Questions from './Questions.js'
const QuestionList = ({questionsList}) => {
    return (
        <>
            {
                questionsList.map((question) => (
                    <Questions question={question} key={question._id}/>
                ))
            }
        </>
    )
}

export default QuestionList
