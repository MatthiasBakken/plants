import React, { useState } from 'react'

function User(props) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setInput('');
  }

  return (
    <div>
      <form className='userForm' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a Plant'
          value={input}
          name='addPlant'
          onChange={handleChange}
          className='userInput'
        />
        <div>
        <button className='userButton'>Add a Plant</button>
        </div>
      </form>
    </div>
  )
}

export default User