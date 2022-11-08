import React, { memo, useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { getStudent } from './services/ProductServices'


function StudentList() {
    const [students,setStudent] = useState([])
    useEffect(()=>{
        getStudent()
        .then((resp)=>{setStudent(resp.data)})
    },[])

    console.log(students)
    console.log('helloo')
    
  return (
    <>
    <h2 className='p-3 mb-2 bg-primary text-white'>Student List</h2>
    <div className='container'>
    <table className="table table-striped">
        <tr className='p-3 mb-2 bg-info text-white'>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
            <th>City</th>
            <th></th>
        </tr>
    {
        students.map((data,index)=>{
            return (
                <>
                <tr key={index} className='p-3 mb-2 bg-light text-dark'>
                    <td>{data.rn}</td>
                    <td>{data.name}</td>
                    <td>{data.marks}</td>
                    <td>{data.city}</td>
                    <td><button className='btn btn-warning'> <Link to={`/editstudent/${data.rn}`}>Edit</Link></button></td>
                </tr>
                </>
            )

        })
    }

    </table>
    </div>
    </>
  )
}

export default memo(StudentList)
