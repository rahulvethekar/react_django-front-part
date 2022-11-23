import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/student/'
const SINGLE_STU_API_URL ='http://127.0.0.1:8000/studentbyid/' 
const UPDATE_API_URL = 'http://127.0.0.1:8000/updatestudent/'
const LOGIN_API_URL =  'http://localhost:8000/get_auth_token/'
async function getStudent(){
    return await axios.get(API_URL)

}
async function postStudent(data){
    return await axios.post(API_URL,data)

}


async function editStudentbyrn(data,id){
    return await axios.put(`${UPDATE_API_URL}${id}`,data)

}

async function retriveStudent(id){
    return await axios.get(`${SINGLE_STU_API_URL}${id}`)

}

async function deleteStudent(id){
    return await axios.delete(`${SINGLE_STU_API_URL}${id}`)

}

async function loginUser(credentials){
    return await axios.post(LOGIN_API_URL,credentials)

}






export {getStudent,postStudent,editStudentbyrn,retriveStudent,deleteStudent,loginUser}
