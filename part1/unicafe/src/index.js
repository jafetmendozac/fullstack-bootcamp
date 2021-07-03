import ReactDOM from 'react-dom';
import { useState } from 'react'


const Button = ({ handleClick, text }) => {

  return (
    <>
      <button onClick= { handleClick }> { text } </button>
    </>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  return (
    <>
      <table>
        <tbody>
          <Statistic text="good" value={ good } />
          <Statistic text="neutral" value={ neutral } />
          <Statistic text="bad" value={ bad } />

          <All all={ all } text="all"/>
          <tr> 
            <td>average</td>
            <td>{ average }</td>
          </tr> 
          <Positive positive={ positive } text="positive"/>
        </tbody>
      </table>
    </>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr> 
        <td>{ text }</td>
        <td>{ value }</td>
      </tr> 
    </>
  )
}

const All = ({ all, text }) => {
  return (
    <>
      <tr> 
        <td>{ text }</td>
        <td>{ all }</td>
      </tr> 
    </>
  )
}

const Positive = ({ positive, text }) => {
  return (
    <>
      <tr> 
        <td>{ text }</td>
        <td>{ positive } %</td>
      </tr> 
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleClickGood = () => {
    setGood( good + 1 )
  }

  const handleClickNeutral = () => {
    setNeutral( neutral + 1 )
  }

  const handleClickBad = () => {
    setBad( bad + 1 )
  }

  const all = good + neutral + bad;
  const average = ( good - bad ) / ( good + neutral + bad );
  const positive =  (( good / ( good + neutral + bad ) ) * 100) ;

  return (
    <>
      <h1>give feedback</h1>

      <Button handleClick={ handleClickGood } text="good" />
      <Button handleClick={ handleClickNeutral } text="neutral" />
      <Button handleClick={ handleClickBad } text="bad" />


      <h1>statistics</h1>
      {
        ( good === 0 && neutral === 0 && bad === 0 )
  
        ?
          <p>No feedback given</p> 
        :
          <Statistics 
            good={ good } 
            neutral={ neutral } 
            bad={ bad } 
            all={ all }
            average={ average }
            positive={ positive }
          />
      }
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


