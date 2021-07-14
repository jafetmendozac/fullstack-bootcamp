


export const filteredByName = ( persons, personSearch ) => {

    
    const findPerson = persons.filter( person => person.name.toLocaleLowerCase().includes(personSearch) === true );
  
    return findPerson;
  
}
