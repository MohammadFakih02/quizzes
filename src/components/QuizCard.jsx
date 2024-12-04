const QuizCard = ({ quiz }) => {
    const { name, description, points } = quiz;

    return (
        <div className="quiz-card">
            <div>
                <h3>{name}</h3>
                <h3>{points}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default QuizCard;