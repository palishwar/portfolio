import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from './Data'
function Projects() {
  return (
   
    <>
    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      
    </div><div className="row">
          <p><h2>Ongoing Projects </h2></p>
          <p><b> Here are few of my completed as well as completed projects based on HTML, CSS, SCSS, BOOTSTRAP,jquery and React.</b></p>
            {Data.map((pro)=>
          <div className="col">
          <div className="card bg-secondary">
               <div className="image"><img src={pro.image}></img></div>
               <div className="text">
              <div className="Name"><b>Project Name: {pro.title}</b></div>
               <div className="Type"><b>Projecct Type: {pro.type}</b></div>
               </div>
               <button><Link to={`/Details/${pro.id}`} target='_blank'>Details</Link></button>
               
            </div>
          </div>
            )}
          </div>
    </>
  )
}

export default Projects