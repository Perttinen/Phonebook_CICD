import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PhonebookView from 'Components/PhonebookView'

export default () => (
  <div className="content">
    <Routes>
      <Route exact path="/" element={<PhonebookView />} />
    </Routes>
  </div>
)
