import React from 'react';
import ProPic from './images/propic.jpg'
import  './about.css'



function About() {
    return (
        
        <div >
           <div className="row w-100 p-3 bg1 ">
            <br></br>
           <div >
               <br></br>
               <br></br>
              <img className="profile-pic" src={ProPic} alt="Aditya Gujar Profile pic" />
           </div>
           <div className="col-7  font1">
           <br></br>
           <br></br>
              <h2 className="pos2">Career Objective</h2>

              <p className="pos2">To achieve high career growth through a continuous process in learning for achieving goals<br></br>
               & keeping myself dynamic in the changing scenario to become a successful professional & leading to best opportunity.

              </p>
              <div className="row w-100 p-3 ">
                 <div className="col-6">
                    <h2>Contact Details</h2>
                    <p>
                       <span>Canary Tailor P D A college road<br></br>
                        Station Bazar
                        Kalabuargi,<br></br>
                        Karanataka- 585102 
                       
                          
                       </span><br />
                       <span><b>Phone:</b> 8088555562</span><br />
                       <span><b>Email:</b> agujar432@gmail.com</span>
                    </p>
                 </div>
                 
                 <div className="columns ">
                    <p>
                        <br></br>
                        <a href="https://drive.google.com/file/d/1_bfuRZNkQ3e1EbShepxXPPxC5PvRft81/view?usp=sharing" target="_blank" rel="noreferrer">
                       <button className="button  btn btn-primary bg-primary" onClick=""><i className="fa fa-download"></i>Download Resume</button>
                       </a>
                    </p>
                 </div>
              </div>
              <div className="row w-100 p-3 ">
                <div className="col-12">
                    <h1><span>Education</span></h1>
                    <div>
                    <h3><b><u>B.E Mechanical Engineering</u></b></h3>
                    Visvesvaraya Technological University (VTU), 
                    SDM Institute of Technology, Ujire(2019)
                    </div>
                    <div>
                    <h3><b><u>Pre-University</u></b></h3>
                    Mahesh PU Gulbarga(2015)
                    </div>
                    <div>
                    <h3><b><u>School</u></b></h3>
                    St. Mary Gulbarga(2013)
                    </div>  
                </div>
            </div>
            </div>
            
            
           </div>
           <p className="bt1  center">
                     <a  href="/"><i class="fas fa-3x fa-chevron-circle-left"></i></a>
                     <a  className="next1" href="/skills"><i class="fas fa-3x fa-chevron-circle-right"></i></a>
            </p>
        </div>

     

    );
  }
  
export default About;
  
