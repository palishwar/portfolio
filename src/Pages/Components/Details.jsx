import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from './Data'
function Details() {
  var { pro_id } = useParams()
  let pro_details = Data.find((pd) => pd.id == pro_id)
  return (
    <>
      <div className="contain text-center m-5">
        <div className="row">
          <div className="col"><img src={pro_details.image} /></div>
          <div className="col">
            <h1> <p>Name of Project : {pro_details.title}</p></h1>
            <h2><p>Project Type : {pro_details.type}</p></h2>
            <h2><p>Script used : {pro_details.script}</p></h2>
            <Link to={`${pro_details.link}`} target='_blank'>Link to Website</Link>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Details