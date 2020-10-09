import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let skiData = {
  total: 50,
  powder: 20, 
  backcountry: 10,
  goal: 100
}

const getPercent = decimal => {
  return decimal * 100 + '%';
}

const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal);
}

const SkiDayCounter = ({total, backcountry, powder, goal}) => {
  return (
    <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {powder}</p>
        </div>
        <div>
          <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
        </div>
      </section>
  )
}

ReactDOM.render(
  <SkiDayCounter 
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>, // what we want to render
  document.getElementById('root')// where we want to render it to
)