import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'


const IndexSearcher = (props:{letter: any, setLetter:(letter: string)=>{}, setIsLoading: any}) => {
  /*
    Todo:
    [X] Create a data structure that will hold letters from A-Z
    [X] Create a function that will take the letter and search for it in the data
  */
  const {letter, setLetter, setIsLoading} = props

  const [currentLetter, setCurrentLetter] = React.useState<string>('A')
  const letters = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))

  useEffect(() => {
    setLetter(currentLetter)
  }, [currentLetter])

  const handleClick = (letter: string) => {
    setIsLoading(true)
    setCurrentLetter(letter)
  }



  return (
    <Wrapper>
      {letters.map((char, index) => {
        return <Letter key={index} className={`${currentLetter === char ? 'active' : ''}`} onClick={() => handleClick(char)}>{char}</Letter>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

const Letter = styled.div`

padding: 1rem;
  background-color: #ede5e3;
  width: 14px;
  text-align: center;
  height: 14px;
  cursor: pointer;
  font-weight: 600;
  color: #363636;

  &.active {
    background-color: var(--primary-color);
    color: white;
  }
`

export default IndexSearcher