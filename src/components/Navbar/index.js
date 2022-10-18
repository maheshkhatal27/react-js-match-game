import './index.css'

const Navbar = props => {
  const {topScore, remainingTime} = props

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="display-score-time-container">
        <p className="score-text">
          Score:<span className="dis-text"> {topScore}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="dis-text">{remainingTime} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
