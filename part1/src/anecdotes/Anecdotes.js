import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = ({ anecdotes }) => {

  const [selected, setSelected] = useState(0)
  const [saveVote , setSaveVote] = useState(Array(anecdotes.length).fill(0))


  const handleClickVote = () => {

    saveVote[selected] = (saveVote[selected] + 1)
    setSaveVote([...saveVote])
  }

  const handleClickNext = () => {

    setSelected( selected + 1 )
  }

  const votesanecdotemostpopular = Math.max(...saveVote)
  const positionanecdotepopular = saveVote.indexOf(votesanecdotemostpopular)

  return (
    <>
      <h1>Anecdote of the Day</h1>
      <p>{ anecdotes[selected] }</p>
      has { saveVote[selected] } vote
      <br />

      <button
        onClick={ handleClickVote }
      >
        vote
      </button>

      <button
        onClick={ handleClickNext }
      >
        next anecdotes
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[positionanecdotepopular]}</p>
      has { votesanecdotemostpopular } vote
    </>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={ anecdotes } />,
  document.getElementById('root')
)


