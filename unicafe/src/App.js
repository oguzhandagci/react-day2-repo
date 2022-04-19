import { useState } from "react";
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;
  if(all === 0){
    return ( 
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
    )}else{
  return ( 
    <table>
      <tbody>
      <h1>statistics</h1>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive + '%'}  />
      </tbody>
      </table>
      
  )}
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => {
    setGood(good + 1);
  };

  const clickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const clickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={clickGood} text="good" />
      <Button handleClick={clickNeutral} text="neutral" />
      <Button handleClick={clickBad} text="bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
};

export default App;