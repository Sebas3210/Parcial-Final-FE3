import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext, ActionType } from './utils/global.context'

const Navbar = () => {

  const { state, dispatch } = useGlobalContext()

  const handleClick = () => {
    (state.theme === "light") 
    ? dispatch({ type: ActionType.SetTheme, payload: "dark" }) 
    : dispatch({ type: ActionType.SetTheme, payload: "light" }) 
  }

  return (
    <nav className={state.theme}>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      <button onClick={handleClick} style={{borderRadius: 10}}>
      Change theme
      </button>
    </nav>
  )
}

export default Navbar
