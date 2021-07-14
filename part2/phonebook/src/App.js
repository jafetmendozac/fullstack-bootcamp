import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { Notification } from './components/Notification'
import { NotificationError } from './components/NotificationError'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { filteredByName } from './selectors/filteredByName'
import { getByNames } from './selectors/getByNames'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ personSearch, setPersonSearch] = useState('')
  const [ success, setSuccess ] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {

    personService.getAll()
      .then( returnedPeople => {
        setPersons( returnedPeople )
      })

  }, [])


  const addName = (e) => {
    e.preventDefault()

    const newObject = {
      name: newName,
      number: newNumber
    }

    const getPerson = getByNames(persons, newName)

    if( getPerson.length === 1) {
      if (window.confirm(`${getPerson[0].name} is already added to phonebook, replace the old number with a new one`)) {
      
        personService.update( newObject, getPerson )
          .then( ( returnedPerson ) => {
            console.log('returnedPerson', returnedPerson);
            setPersons( persons.map( person => persons.id !== returnedPerson.id ? person : returnedPerson ) )
            setNewName('')
            setNewNumber('')

            setSuccess(`Updated number of ${ returnedPerson.name }`)
            setTimeout(() => {
            setSuccess(null)
            }, 4000);
          } )
          .catch( error => {
            setErrorMessage(`Information of ${ getPerson[0].name } has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 4000);
          })
      }
      setNewName('')
      setNewNumber('')

    } else {
      personService.create( newObject )
        .then( returnedPerson => {
          setPersons([ ...persons, returnedPerson ])
          setNewName('')
          setNewNumber('')

          setSuccess(`Added ${ returnedPerson.name }`)
          setTimeout(() => {
            setSuccess(null)
          }, 4000);
        })
    }
  }

  const handleNameChange = (e) => {
    setNewName( e.target.value )
  }

  const handleNumberChange = (e) => {
    setNewNumber( e.target.value )
  }

  const handleFilterChange = (e) => {
    setPersonSearch( e.target.value )
  }

  const handleDeleteChange = ({ name, id }) => {
    if(window.confirm(`Delete ${name}`)){
      
      personService.deletePerson(id)
        .then( response => {
          setPersons(persons.filter( person => person.id !== id ))
          
        })
        .catch( err => console.log('fail', err ))
    }
  }

  const filterPerson = filteredByName( persons, personSearch )


  return (
    <>
      <h1>Phonebook</h1>

      <Notification message={ success } />
      <NotificationError message={ errorMessage } />

      <Filter
        handleFilterChange={handleFilterChange}
        filterPerson={filterPerson}
      />


      <h1>add a new</h1>

      <PersonForm 
        addName={addName}
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />


      <h1>Numbers</h1>

      <Persons 
        persons={ persons }
        handleDeleteChange={ handleDeleteChange }
      />
    </>
  )
}

export default App
