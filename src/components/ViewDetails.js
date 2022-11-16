import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retriveStudent } from './services/ProductServices'

export default function() {
    const [student,setSudent]=useState([])
    let {rn}=useParams()
    useEffect(()=>{
        retriveStudent(rn)
    .then((resp)=>{setSudent(resp.data)})

    },[])
    
  return (
    <>
    <div className="p-3 border bg-info text-dark" >
  <div>
    <div className="card">
      <img src="https://picsum.photos/150" className="rounded-circle float-right p-3" width={'160px'} alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{student.name}</h2>
        <p className="card-text">Roll No:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {student.rn}</p>
        <p className="card-text">City:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{student.city}</p>
        <p className="card-text ">Marks:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{student.marks}</p>

      </div>
      <div className="card-footer">
        <small className="text-muted text-white">Last updated on {student.modified_on},  &nbsp;Created on {student.created_on}</small>

      </div>
    </div>
  </div>
    </div>
    
    </>
  )
}
