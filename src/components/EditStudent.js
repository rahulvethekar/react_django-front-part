import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { retriveStudent,editStudentbyrn } from './services/ProductServices'

export default function EditStudent() {
    // const [student,setStudent] = useState([])
    const [editStudent,setEditStudent]= useState({})
    let {rn} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        retriveStudent(rn)
        .then((resp)=>{setEditStudent(resp.data);
        console.log(resp.data)})


    },[])

    function handler(event){
        const {name,value} = event.target
        setEditStudent({...editStudent,[name]:value})
        console.log(editStudent)


    }

    function postData(e){
        e.preventDefault()
        editStudentbyrn(editStudent,rn)
        .then((resp)=>{console.log(resp.data)})
        navigate('/students')


    }


  return (
    <div className='container'>
    <h2 className='text-center'>Edit Student</h2>
    <br/>
    <form onSubmit={postData} className='container' >
            <div className='form-group'>
                <label>Roll no:{rn}</label>
                <input type='number' name='rn' className='form-control' onChange={handler} hidden/>
            </div>
            <div className='form-group'>
                <label>Student Name</label>
                <input type='text' name='name' value={editStudent.name} className='form-control'  onChange={handler}/>
            </div><div className='form-group'>
                <label>marks</label>
                <input type='number' name='marks' value={editStudent.marks} className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label>City</label>
                <input type='text' name='city' value={editStudent.city} className='form-control'  onChange={handler}/>
            </div>
            <br/>
            <input type="submit" value="Add" className="btn btn-success"/>
            <br/><br/>

            {/* {errors ? <div className='alert alert-danger'>{errors}</div>:null} */}


        </form>

       

    </div>
  )
}
