
export const filterCountries = ( countries, searchCountry ) => {


  
  return (countries.filter( country => 
    country.name.toLocaleLowerCase().includes( searchCountry.toLowerCase() ) === true ))
}
