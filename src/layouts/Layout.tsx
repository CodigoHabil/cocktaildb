import React from 'react'
import { Main } from '../components/general'
import Navbar from '../components/Navbar'

const Layout = (props: any) => {
  return (
    <>
        <Navbar />
        <Main>
            {props.children}
        </Main>
    </>
  )
}

export default Layout