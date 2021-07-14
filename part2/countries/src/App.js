import { useEffect, useState } from 'react'
import axios from 'axios'
import { filterCountries } from './selectors/filterCountries'
import { ShowCountry } from './components/ShowCountry'
import { ShowWeatherCountry } from './components/ShowWeatherCountry'


export const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [weatherCountry, setWeatherCountry] = useState({})

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( (response) => {
        const allCountries = response.data
        setCountries( allCountries )
    })
  }, [])

  useEffect(() => {
    const url ="http://api.weatherstack.com/current" 
    const api_key = process.env.REACT_APP_API_KEY

    const weatherCountry  = filterCountries( countries, searchCountry )
    const nameCountry = ( weatherCountry.length === 1 ) ? weatherCountry[0].name : ''
    axios.get(url, {
      params: {
        access_key: api_key,
        query : nameCountry
      }
    })
      .then( ({ data }) => {
        setWeatherCountry(data)
      } 
      )

  }, [searchCountry])

  const handleCountryFilter = (e) => {
    setSearchCountry( e.target.value )
  }

  const handleShowClick = (click) => {
    setSearchCountry( click )
  }

  const getCountries = filterCountries( countries, searchCountry )
  console.log(getCountries)


  return (
    <>
      <div>
        find countries{' '}
        <input
          type="text"
          onChange={ handleCountryFilter }
        />
        {
          ( getCountries.length <= 10 && getCountries.length !== 1 ) && 
            getCountries.map( getCountry => 
              <p key={getCountry.name}>
                { getCountry.name } 
                <button
                  onClick={ () => handleShowClick( getCountry.name ) }
                >
                  show
                </button>
              </p> 
            )
        }
        {
          (getCountries.length === 1 ) && 
            <ShowCountry country={ getCountries } />
        }
        {
          ( weatherCountry.location?.name ) && 
            <ShowWeatherCountry weather={ weatherCountry } />
        } 
      </div>
    </>
  )
}




// useEffect(() => {

//   const url ="http://api.weatherstack.com/current" 
//   const key = process.env.REACT_APP_API_KEY
//   const entra = ( searchCountry.length === 1 ) ? searchCountry[0].capital : '';
//   axios.get(url, {
//     params: {
//       access_key: key,
//       query: entra
//     }
//   })
//   .then( ({data})  => {
//     setWeather(data)
//   })
//   .catch(error => console.log(error))

// //   fetch(`${url}?access_key=${key}&query='Helsink'`)
// //   .then( (response) => response.json())
// //   .then( (json) => {
// //     console.log(json)
// //     setWeather(json)
// //   })
// //   .catch(error => console.log(error))
// }, [searchCountry])






// useEffect( () => {
//   const url ="http://api.weatherstack.com/current" 
//   const key = process.env.REACT_APP_API_KEY
//   const entrar = ( showInfo !== null && showInfo !== undefined) ? showInfo.capital : '';

//   axios.get(url, {      
//     params: {
//       access_key: key,
//       query: entrar
//     }}
//   )
//   .then( ({data}) => {
//     setWeather(data)
//   })
//   .catch( (error) => {console.log(error);})

// }, [showInfo])