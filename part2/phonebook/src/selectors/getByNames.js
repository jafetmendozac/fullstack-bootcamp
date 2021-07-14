

export const getByNames = ( persons, newName='' ) => {

  return persons.filter( person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase() )

}