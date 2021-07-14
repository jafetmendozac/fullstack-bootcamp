

export const Persons = ({ persons, handleDeleteChange }) => {


  return (
    <>
      <ol>

        {persons.map( person => 
          <li key={person.name}>
            {person.name} {person.number} {' '}
            <button
              onClick={ () => handleDeleteChange( person ) }
            >
              delete
            </button>
          </li>  
        )}

      </ol>
    </>
  )
}
