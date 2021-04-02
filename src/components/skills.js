import React from 'react'
import Js from  './skills/js.png'
import React2 from './skills/react.png'
import Mongo from './skills/mongo.png'
import Node from './skills/nodejs.png'
import Python from './skills/python.png'
import Linux from './skills/linux.png'
import Docker from './skills/docker.png'
import SQL from './skills/sql.png'
import Aws from './skills/aws.png'
import Git from './skills/git.png'
import Boot from './skills/bootstrap.png'
import Css from './skills/css.png'
import Html from './skills/html.png'
import './skills.css'


function Skills() {
    return (
    <div   >
        <div className="bgs">
            <div className="center ">
                <h1>Technical Skills</h1>
                <div>
                <p>Javascript 
                <img className="" src={Js} alt="JS" />
                <input type="range" min="1" max="100" value="65" class="slider" ></input>
                </p>
                </div>
                <div>
                <p>Python
                <img className="" src={Python} alt="react" />
                <input type="range" min="1" max="100" value="60" class="slider lf1" ></input>
                </p>
                </div>
                <div>
                <p>HTML5
                <img className="" src={Html} alt="react" />
                <input type="range" min="1" max="100" value="70" class="slider lf1" ></input>
                </p>
                </div>
                <div>
                <p>CSS
                <img className="" src={Css} alt="react" />
                <input type="range" min="1" max="100" value="65" class="slider lf2" ></input>
                </p>
                </div>
                <div>
                <p>Bootstrap
                <img className="" src={Boot} alt="react" />
                <input type="range" min="1" max="100" value="68" class="slider lf3" ></input>
                </p>
                </div>
                <div>
                <p>ReactJS 
                <img className="" src={React2} alt="react" />
                <input type="range" min="1" max="100" value="70" class="slider lf1" ></input>
                </p>
                </div>
                <div>
                <p>NodeJS 
                <img className="" src={Node} alt="react" />
                <input type="range" min="1" max="100" value="68" class="slider lf1" ></input>
                </p>
                </div>
                <div>
                    <p>MONGODB  
                    <img className="" src={Mongo} alt="react" />
                    <input type="range" min="1" max="100" value="80" class="slider" ></input>
                    </p>
                </div>
                <div>
                    <p>SQLDB  
                    <img className="" src={SQL} alt="react" />
                    <input type="range" min="1" max="100" value="60" class="slider lf1" ></input>
                    </p>
                </div>
                
            </div>
        </div>
        <div className=" center bgT">
            <div>
                <h1>Technology's Known</h1>
                <div>
                    <p>GIT<img class="" src={Git} alt="react" />
                    Linux Command Line<img class="" src={Linux} alt="react" />
                    Docker<img class="" src={Docker} alt="react" />
                    </p>
                    AWS<img class="" src={Aws} alt="react" />
                      
                </div>
            </div>
        </div>
        <div>
        <p className="bt1 center">
            <a  href="/about"><i class="fas fa-3x fa-chevron-circle-left"></i></a>
            <a  className="next1" href="/projects"><i class="fas fa-3x fa-chevron-circle-right"></i></a>
        </p>
        </div>
      
    </div>
    );
  }
  
export default Skills;
  
