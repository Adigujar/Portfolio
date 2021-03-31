import React from 'react';


function Nav() {
    return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/" >Home</a>
        <a class="nav-item nav-link active" href="/about">Resume</a>
        <a class="nav-item nav-link" href="/skills">Skills</a>
        <a class="nav-item nav-link" href="/projects">Projects</a>
        <a class="nav-item nav-link" href="/blogs">Blogs</a>
        </nav>
    </div>
    );
  }
  
export default Nav;
  
