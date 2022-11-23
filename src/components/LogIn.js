import React, { useState } from 'react'
import { loginUser } from './services/ProductServices'

export default function LogIn() {
    const [credentials,setCredentials] = useState([])

        function handler(event){
                const {name,value}=event.target
                setCredentials({...credentials,[name]:value})
            }
            console.log(credentials)

        function postData(event){
                event.preventDefault()
                loginUser(credentials)
                .then((resp)=>{console.log(resp.data)})

                // alert('hello')
        }

  return (
    <>
    <div className='p-3 w-25 mx-auto'>
    <h2>Log In</h2>

    <form onSubmit={postData}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="exampleInputPassword1" onChange={handler}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}
