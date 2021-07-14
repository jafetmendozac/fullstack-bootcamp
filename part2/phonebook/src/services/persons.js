import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';


const getAll = () => {
  return (
    axios.get(baseUrl)
      .then( ({ data }) =>  data)
  )
}

const create = ( newPerson ) => {
  return (
    axios.post( baseUrl, newPerson )
      .then( ({ data }) => data )
  )
}

const deletePerson = (id) => {
  return (
    axios.delete( `${baseUrl}/${id}`)
  )
}

const update = ( newObject, getPerson ) => {

  const id = getPerson[0].id

  return (
    axios.put( `${baseUrl}/${id}`, newObject )
      .then(({ data }) => 
        data
      )
  )
}




const personService = {
  getAll,
  create,
  update,
  deletePerson
} ;

export default personService ;