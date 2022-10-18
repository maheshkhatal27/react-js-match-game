import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabColor = isActive ? 'tab-color' : ' '

  const onClickSwitchingTab = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab-btn ${tabColor}`}
        onClick={onClickSwitchingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
