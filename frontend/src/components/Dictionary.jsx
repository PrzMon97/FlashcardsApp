import React, { useState } from 'react'
import DictionarySearch from './DictionarySearch'
import { Card } from '@mui/joy'

const Dictionary = () => {
  const [word, setWord] = useState('')
  const [definitions, setDefinitions] = useState([])

  const searchWord = (word) => {

    //tu try-catch, bo inaczej sie rozwala gdy word = ''

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(resp => resp.json())
      .then(resp => setDefinitions(resp[0]))
      .catch(err => alert(err.message))
     
  }

  const clearSearch = () => {
    setWord('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchWord(word)
  }


  return (
    <Card className='dictionaryCard'>
      <div className='search'>
        <form className='searchform' onSubmit={handleSubmit}>
          <label htmlFor='searchtext'>Wyszukaj Słówko</label>
          <input type='text' id='searchtext' value={word} onChange={(e) => setWord(e.target.value)}/>
          <button type='submit'>Wyszukaj w słowniku</button>
          <button onClick={clearSearch}>Wyczyść</button>
        </form>
      </div>
    { definitions && <DictionarySearch {...{ definitions }}/>}
    </Card>
  )
}

export default Dictionary