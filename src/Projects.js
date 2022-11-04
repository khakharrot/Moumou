import React from 'react'
import proj1 from './Photo/proj1.jpg'
import proj2 from './Photo/proj2.jpg'
import proj3 from './Photo/proj3.jpg'
import proj4 from './Photo/proj4.jpg'
const tab=[
    {
        projectName:"project 1",
        imgSrc: proj1,

    },
    {
        projectName:"project 2",
        imgSrc: proj2,

    },
    {
        projectName:"project 3",
        imgSrc: proj3,

    },

    {
        projectName:"project 4",
        imgSrc: proj4,

    }

     ]

function projet() {
  return ( 
    <section id="projects">
       <h2 className="text-important">Projects</h2>
      <div className="projects-container">
         { tab.map((el,i)=>(
         <div className="project-card">
          <img src={el.imgSrc} alt="project" />
          <h3>{el.projectName}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>))}
        </div>
      </section>
  )
}

export default projet