import React from 'react'
import './project.css'
import Blogs1 from './images/blogs.jpg'




function Blogs() {
    return (
        <div className="">
            <div className="row w-100 p-3 bbg pos2 " >
            <img className="img-responsive" max-width= "100%" height="200" src={Blogs1} alt="Blogs" />
                <div className="bbg1">
                <div >
                    <a href="https://adi-gujar.medium.com/difference-between-http1-1-vs-http2-60aaec0befd" target="_blank" rel="noreferrer">
                        <h3>1.'Difference between HTTP1.1 vs HTTP2.'</h3>
                    </a>
                </div>
                <div>
                    <a href="https://adi-gujar.medium.com/what-is-the-difference-between-window-screen-and-document-in-javascript-e2f0f832a257" target="_blank" rel="noreferrer">
                        <h3>2.'What is the difference between window, screen, and document in JavaScript?'</h3>
                    </a>
                </div>
                <div>
                    <a href="https://adi-gujar.medium.com/how-do-you-copy-by-value-a-composite-data-type-in-javascript-8093a239cf60" target="_blank" rel="noreferrer">
                        <h3>3.'How do you copy by value a composite data type in JavaScript?'</h3>
                    </a>
                </div>
                <div>
                    <a href="https://adi-gujar.medium.com/why-there-is-a-difference-in-behavior-for-copying-contents-in-primitive-and-non-primitive-type-42a852170f16" target="_blank" rel="noreferrer">
                        <h3>4.'Why there is a difference in behavior for copying contents in primitive and non primitive type?'</h3>
                    </a>
                </div>
                <div>
                    <a href="https://adi-gujar.medium.com/objects-and-its-internal-representation-in-javascript-35061a08e1a1" target="_blank" rel="noreferrer">
                        <h3>5.'Objects and its internal representation in JavaScript URL.'</h3>
                    </a>
                </div>
                </div>
            </div>
            
            <p className="bt1 center">
                <a  href="/projects"><i class="fas fa-3x fa-chevron-circle-left"></i></a>
               
            </p>
        
        </div>
        
        
    );
  }
  
export default Blogs;
  
