import React from 'react'

export const PersonForm = ({
  addName,
  handleNameChange,
  newName,
  handleNumberChange,
  newNumber
}) => {
  return (
    <>
      <form onSubmit={ addName }>

      <div>
        name:{' '} 
        <input 
          onChange={ handleNameChange }
          placeholder="Add name"
          value={ newName }
        />
      </div>

      <div>
        numero:{' '} 
        <input 
          onChange={ handleNumberChange }
          placeholder="Add number"
          value={ newNumber }
        />
      </div>

      <div>
        <button type="submit">add</button>
      </div>

      </form>
    </>
  )
}
