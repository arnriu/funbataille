import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return <button onClick={handleBack}>⬅ Retour</button>
}

export default BackButton
