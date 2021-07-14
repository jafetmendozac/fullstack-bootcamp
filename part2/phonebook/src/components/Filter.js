
export const Filter = ({
  handleFilterChange,
  filterPerson
}) => {
  return (
    <>
      <div>

        filter show with{' '}
        <input
          type="text"
          onChange={ handleFilterChange }
        />

        <br />

        { 

          ( filterPerson?.length <= 2 ) && 
          filterPerson.map( filter => <li key={filter.name}> { filter.name } { filter.number } </li> ) 

        }
        
      </div>
    </>
  )
}
