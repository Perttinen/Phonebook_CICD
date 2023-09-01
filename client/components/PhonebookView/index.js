import React, { useEffect, useState } from 'react'

import phoneBook from 'Components/PhonebookView/phoneBook'
import {
  getAll,
} from 'Utilities/services/persons'

const PhonebookView = () => {
  const [persons, setPersons] = useState([])
  const [searchStr, setSearchStr] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    getAll().then((initPers) => setPersons(initPers))
  }, [])

  return (
    <div>
      <div className="header">
        <h1>Phonebook</h1>
      </div>
      <phoneBook.Notification message={message} />
      <phoneBook.Filter searchStr={searchStr} setSearchStr={setSearchStr} />
      <hr />
      <div className="addNew">
        <phoneBook.AddNew
          persons={persons}
          setPersons={setPersons}
          setMessage={setMessage}
        />
      </div>
      <hr />

      <phoneBook.Numbers
        persons={persons}
        setPersons={setPersons}
        searchStr={searchStr}
        setMessage={setMessage}
      />
    </div>
  )
}

export default PhonebookView
