import React, { useState } from 'react'
import { postStudent } from './services/ProductServices'
import { useNavigate } from 'react-router-dom'

export default function AddStudent() {
    const navigate = useNavigate()
    const [errors,setError]=useState(undefined)
    const [student,setStudent]=useState({})
    const [flag,setFlag] = useState(1)

    function handler(event){
        const {name,value} = event.target
        setStudent({...student,[name]:value})

    }
    console.log(student)
    

    function postData(e){
        e.preventDefault();
        postStudent(student)
        .then((resp)=>{console.log(resp.data.error);
                       if (resp.data.error){
                        setError(resp.data.error)
                        setFlag(1)
                        console.log(resp.data.error)
                        console.log('flag----',flag)
                        navigate('/addstu')

                       }     
                        else {
                            setFlag(0)
                            navigate('/students')

                        }                    })

                      
                        

                      
            
        // .catch((error)=>{
        //     console.log(typeof(error));
        //     setError(error);
        //     console.log('erorooooooo',errors)


        // })
        
    }
  return (
    <>
    <div className='container-sm'>
    <form onSubmit={postData} className='container' >
            <div className='form-group'>
                <label>Roll no</label>
                <input type='number' name='rn' className='form-control' onChange={handler} required/>
            </div>
            <div className='form-group'>
                <label>Student Name</label>
                <input type='text' name='name' className='form-control'  onChange={handler}/>
            </div><div className='form-group'>
                <label>marks</label>
                <input type='number' name='marks' className='form-control' onChange={handler}/>
            </div>
            <div className='form-group'>
                <label>City</label>
                <input type='text' name='city' className='form-control'  onChange={handler}/>
            </div>
            <br/>
            <input type="submit" value="Add" className="btn btn-success"/>
            <br/><br/>

            {errors ? <div className='alert alert-danger'>{errors}</div>:null}


        </form>
        </div>

       
    </>
  )
}
