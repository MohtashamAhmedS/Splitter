import React, { useState } from 'react'
import PeopleIcon from './icon/peopleIcon.png'
const Form = () => {
  const [count, setCount] = useState(1)
  const [activeTip, setActiveTip] = useState(5)
  const [amount, setAmount] = useState('')

  const handleChange = (e) => {
    const value = e.target.value

    // Allow empty field, or parse to number
    setAmount(value === '' ? '' : Number(value))
  }

  const handlePlus = () => {
    setCount((setCout) => setCout + 1)
  }

  const handleMinus = () => {
    setCount((setCout) => setCout - 1)
  }

  const tips = [5, 10, 15, 20]
  return (
    <div className="form-main">
      <div className="first-field">
        <p className="first-field-text">Bill amount</p>
        <span className="first-field-span">
          $
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            className="first-field-input"
            placeholder="4.00"
          />
        </span>
      </div>
      <div className="people-main">
        <div className="people-heading">
          <div>
            {' '}
            <img src={PeopleIcon} className="people-icon" alt="" />
          </div>
          <p className="people-text">Number of people</p>
        </div>
        <div className="people-count">
          <p className="people-minus" onClick={handleMinus}>
            -
          </p>

          <p className="people-number">{count}</p>
          <p className="people-plus" onClick={handlePlus}>
            +
          </p>
        </div>
      </div>
      <div className="tips">
        <p className="tips-title">Tips Percentage</p>
        <div className="tips-main">
          {tips.map((tip) => (
            <p
              key={tip}
              className={
                tip === activeTip ? 'tips-percent-active' : ' tips-percent'
              }
              onClick={() => setActiveTip(tip)}
            >
              {tip}%
            </p>
          ))}
        </div>
      </div>
      <div className="total">
        <p className="total-heading">Per person</p>
        <p className="total-amount">
          $
          {amount && count
            ? ((amount + (amount * activeTip) / 100) / count).toFixed(2)
            : '0.00'}
        </p>
        <div className="total-main">
          <p className="total-amount2">
            Total: $
            {amount ? (amount + (amount * activeTip) / 100).toFixed(2) : '0.00'}
          </p>
          <p className="total-tip">
            Tip: ${amount ? ((amount * activeTip) / 100).toFixed(2) : '0.00'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Form
