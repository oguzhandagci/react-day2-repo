import { useState } from 'react'


const Button = ({ handleClick, text, }) => (
  <button onClick={handleClick}> {text} </button>
); 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const myPoints = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(myPoints);
  const [topVoted, setTopVoted] = useState({
    anecdote: anecdotes[selected],
    thumbsUp: 0
  })

 
  const Vote = () => {
  const copy = [...points]
  copy[selected] += 1;
  if(copy[selected] > topVoted.thumbsUp){
    setTopVoted({
      anecdote: anecdotes[selected],
      thumbsUp: copy[selected]
    })
  }
  setPoints(copy);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes.
      <br/>
      <Button
      handleClick={() => Vote()}
      text = {"Vote"}
       />
      <Button
      handleClick={() => setSelected(Math.floor(Math.random()*6))}
      text = {"Next Anectode"}
       />
       <h1>Anecdote with most votes</h1>
       {topVoted.anecdote}
      <br/>
      has {topVoted.thumbsUp} votes.
    </div>
  )
}

export default App