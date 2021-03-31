import React from 'react';

import './header.css'

function Header() {
    return (
    <div className="bg">
      
        <div>
           <div>
               
               
              <h1 className="tx1"> I'm Aditya Gujar.</h1><br></br>
              <h3 className="top"> I'm a Full Stack Developer(MERN).
              <br></br>Excited to be at the deployment phase of my new career as a web developer. <br></br>
              
              </h3>
              <hr />
              
              <div className='top1' >
                  <p>
                      <span className="col-6"><a href="https://github.com/Adigujar"><i class="fab fa-3x fa-github"></i></a></span>
                      <a  href="https://www.linkedin.com/in/aditya-gujar-52876915b/"><i class="fab fa-3x fa-linkedin"></i></a>
                  </p>
                </div>
           </div>
        </div>
        
        <p className="top2">
           <a  href="/about"><i class="fas fa-3x fa-chevron-circle-right"></i></a>
        </p>
    </div>
      
    );
  }
  
export default Header;
  
