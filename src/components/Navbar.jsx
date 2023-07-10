import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href="/" style={{ color: "gold", fontWeight: "bold" }} className='navbar-brand px-4'>Gestión de Clientes</a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;