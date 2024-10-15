import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        <div className='align-left'>
            <h1 className='texting'>Portfolio</h1>
        </div>
        <div className='align-right'>
            <a href='#Home'  className='a-text'>Home</a>
            <a href='#Skills' className='a-text'>Skills</a>
            <a href='#Projects' className='a-text'>Projects</a>
            <a href='#Contact' className='a-text'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
