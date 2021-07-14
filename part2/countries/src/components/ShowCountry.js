

export const ShowCountry = ({ country }) => {


  return (
    <>

      <h1>{ country[0].name }</h1>
      <p>capital-{ country[0].capital }</p>
      <p>population: { country[0].population }</p>
      <h3> Spoken languages </h3>
      <ul>
        {
          country[0].languages.map( language => <li key={language.name}>{ language.name }</li> )
        }
      </ul>
      <img src={ country[0].flag } height="90" alt="bandera Peruana"/>
    </>
  )
}
