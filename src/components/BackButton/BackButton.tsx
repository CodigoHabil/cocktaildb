import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './Components'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <ButtonContainer onClick={()=>{navigate(-1)}}>
      <AiOutlineArrowLeft />
      Go back
    </ButtonContainer>
  )
}

export default BackButton