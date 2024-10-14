import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        <div className='align-left'>
            <h1 className='texting'>Portfolio</h1>
        </div>
        <div className='align-right'>
            <a href='/'  className='a-text'>Home</a>
            <a href='/' className='a-text'>Skills</a>
            <a href='/' className='a-text'>Projects</a>
            <a href='/' className='a-text'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
