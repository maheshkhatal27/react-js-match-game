import './index.css'

const WinOrLose = props => {
  const {currentScore, playAgainClick} = props
  const onClickPlay = () => {
    playAgainClick()
  }
  return (
    <div className="trophy-win-game-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score">{currentScore}</p>
      <button type="button" className="button" onClick={onClickPlay}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        <p className="play-again">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default WinOrLose
