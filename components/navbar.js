import React from "react";

const Navbar = () => {
  return (
    <nav>

      <div>Movie Hooked</div>
    
      <style jsx>{`
        nav {
          display: flex;
          background: black;
          color: white;
          height: 50px;
          justify-content: center; 
        }

        div {
          align-self: center;
        }
      `}</style>
    
    </nav>
  )
}

export default Navbar;