import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'


const IndexSearcher = (props:{letter: any, setLetter:(letter: string)=>{}}) => {
  /*
    Todo:
    [X] Create a data structure that will hold letters from A-Z
    [X] Create a function that will take the letter and search for it in the data
  */
  const {letter, setLetter} = props

  const [currentLetter, setCurrentLetter] = React.useState<string>('A')
  const letters = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))

  useEffect(() => {
    console.log(currentLetter)
    setLetter(currentLetter)
  }, [currentLetter])


  return (
    <Wrapper>
      {letters.map((char, index) => {
        return <Letter key={index} className={`${currentLetter === char ? 'active' : ''}`} onClick={() => setCurrentLetter(char)}>{char}</Letter>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex-wrap: wrap;
`

const Letter = styled.div`
  padding: 1rem;
  background-color: antiquewhite;
  width: 14px;
  text-align: center;
  height: 14px;
  cursor: pointer;
  &.active {
    background-color: red;
  }
`

export default IndexSearcher