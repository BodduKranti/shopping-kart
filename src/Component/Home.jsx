import React, { useContext } from 'react'
import { ContextApi } from '../Contest/ContestApi'

const Home = () => {
    const {user} = useContext(ContextApi)
  return (
    <div>Home {user?<>{user.email}</>:<></>}</div>
  )
}

export default Home