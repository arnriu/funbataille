import React from 'react'
import { useHistory } from 'react-router-dom'

const BackButton = () => {
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

  return <button onClick={handleBack}>⬅ Retour</button>
}

export default BackButton
