import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import './styles.scss'
import { SiLinkedin, SiGithub} from 'react-icons/si'
// SiRedux, SiMongodb, SiJavascript, SiPostgresql,SiPostman,, SiHeroku
// import {GrReactjs} from 'react-icons/gr'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail, AiOutlineHome} from 'react-icons/ai'
// import {FaCss3, FaHtml5, FaJava, FaNodeJs} from 'react-icons/fa'
import { BsFillDiamondFill } from "react-icons/bs";

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img
              src="ema.jpeg"
              alt="avatar"
              className="rounded-circle"
              // style={{height: '250px' }}
               />
            </div>

            <h2 style={{paddingTop: '2em'}}>Emmanuel Adedeji</h2>
            <h4 style={{color: 'grey'}}>Profile</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>An IT professional with good expertise as Test Analyst and Web Developer.
              That's what I am.
              "Never stop learning" is my mantra and
              I've proved it even to myself taking every opportunity that can lead me to learn something more.
              My excellent understanding of Software Development Lifecycle and the role of QA, will boost your projects,
              and thanks to my organizational and intercommunication skills
              I will definetly be a valuable team player.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5><AiOutlineHome size={30} /> <span className="info-text">Helsinki Finland</span></h5>
           
            <h5><FiPhone size={30}/><span className="info-text">(358) 449-767777</span></h5>
            
            <h5><AiOutlineMail size={30} /> <span className="info-text">emmans4destiny@gmail.com</span> </h5>
           
            <p className="info-text-link">
            <a href="https://www.linkedin.com/in/emmas4impact/" >
            <SiLinkedin size={30} style={{marginRight: "10px"}}/> https://linkedin.com/in/emmas4impact/
            </a>
            </p>
            <p>
            <a href="https://github.com/emmas4impact">
            <SiGithub size={30} style={{marginRight: "10px"}} /> https://github.com/emmas4impact
            </a>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          
          <h2>Skills</h2>
              <p><h4><BsFillDiamondFill/> Test Tools:</h4> <span>Eclipse, VS Code, Visual Studio, Bugzilla, JIRA, Selenium, WebDriver(JAva),TestNg, Log4J, JUnit, Maven, Jekins, Posman, GIT</span></p>
              <p><h4><BsFillDiamondFill/>Development Methodology:</h4>  <span>Waterfall, AGILE-SCrum</span></p>
              <p><h4><BsFillDiamondFill/> Databases:</h4> <span>MongoDb, PostgrsSQL, Mongo Atlas and MySQL</span> </p>
              <p><h4><BsFillDiamondFill/> Operating System: </h4><span>Windows, Linux</span></p>
              <p><h4><BsFillDiamondFill/> Programming/Scripting langauge: </h4><span>Java, JavaScript, Express, Node, React, Redux, TyprScript, Bootstrap, HTML5, CSS</span>  </p>
              <p><h4><BsFillDiamondFill/> Cloud:</h4><span>Azure, Heroku</span></p>
              <p><h4><BsFillDiamondFill/> Browers:</h4><span>Google Chrome, Firefox, Internet Explorer</span></p>
              
              <h5>OTHER SKILLS</h5>
              
          <hr style={{borderTop: '3px solid #e22947'}} />
          
         
          
          <h2>Experience</h2>

<Experience
  startYear={2019}
  endYear={2020}
  jobName="Web Developer/Logistics Engineer/Automation Tester"
  CompanyName="Fawtech Logistics and Tech – Helsinki, Finland"
  jobDescription="Help design Podcast website for a client using Bootstrap and CSS3
   As an entrepreneur, I understand what it takes to relate with my customer
  Utilising agile tooling (Jira) to effectively manage the testing process in the different environments (Dev Test/ UAT / Staging /Production)
  Attending and contributing to sprint reviews, retrospectives and show and tell sessions with the product owners"
  />

  <Experience
    startYear={2018}
    endYear={2019}
    jobName="Lan Migration Engineer (Consultant)"
    CompanyName="BT Global – Helsinki, Finland"
    jobDescription="Work collaboratively with remote Engineer, CLAN Engineer and PM to ensure a successful migration at ABB.
    Responsible for Racking and stacking the switches.
    Worked with different Router and Switches
    "
    />
   <Experience
    startYear={2016}
    endYear={2017}
    jobName="Automation Test Analyst (Consultant)"
    CompanyName="YankosTech – HatField, UK| 05/2016 - 08/2016"
    jobDescription="Work collaboratively with remote Engineer, CLAN Engineer and PM to ensure a successful migration at ABB.
    Responsible for Racking and stacking the switches.
    Worked with different Router and Switches
    "
    />
  <hr style={{borderTop: '3px solid #e22947'}} />
 
            <h2>Education</h2>
            

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Strive School"
              schoolDescription="Six Months Program based on M.E.R.N Stack: node.js, react.js, Redux.js, Express, TypeScript, MongoDB, Postgres, HTML5, CSS"/>

               <Education
                 startYear={2018}
                 endYear={2019}
                 schoolName="SEDU"
                 schoolDescription="One year program for starting a business and and being a Sole Trader"
                  />
                   <Education
                 startYear={2008}
                 endYear={2014}
                 schoolName="Savonia University Of Applied Sciences"
                 schoolDescription="Software Engineering Specialization
                 Four years Program in Information Technology Covering: Java, C, Object Oriented Programming, Data Strutures and Algorithms, Computer Networks,
                 Visual Basic, Design Patterns, Sensors and Microproccessors"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

             
              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
