import React, { useState, useEffect } from 'react'
import './styles/App.css'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import { fetchData } from './util/persistence'


function App() {

  const [persons, setPersons] = useState([]);
  const APIURL = 'http://localhost:3000/api'

  function getPersons(callback) {
    fetchData(APIURL, callback)
  }

  useEffect(() => {
    getPersons((data) => {
      setPersons(data)
    })
  }, []);
  

  return (
    <div>
      <h1>Person DB</h1>
      <PersonList persons={persons} />
      <PersonForm />


    </div>
  )
}

export default App
