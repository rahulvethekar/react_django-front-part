import React, { memo, useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteStudent, getStudent } from './services/ProductServices'


function StudentList() {
    const [students,setStudent] = useState([])
    const [del,setDelete]=useState([]);
    useEffect(()=>{
        getStudent()
        .then((resp)=>{setStudent(resp.data)})
    },[del])

    console.log(students)
    console.log('helloo')

    function deleteByRn(id){
        // alert('hi')
        deleteStudent(id)
        .then((resp)=>{console.log(resp.data)
                        setDelete(resp.data)
                        })
    }
    
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
            <th>-</th>
            <th>-</th>
            <th>-</th>

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
                    <td><button className='btn btn-warning'> <Link to={`/editstudent/${data.rn}`}>Update</Link></button></td>
                    <td><button style={{color:'black'}}  className='btn btn-outline-danger' onClick={()=>deleteByRn(data.rn)}>Delete</button></td>
                    <td><button style={{color:'black'}} className='btn btn-primary'><Link to={`/view-details/${data.rn}`}>View Details</Link></button></td>

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
