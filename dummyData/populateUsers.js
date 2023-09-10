import users  from './users.js'
import axios from 'axios'
const API = "http://localhost:8000"
function populateUsers(){
    users.forEach(user=>{
        axios.post(`${API}/auth/signup`, user)
        .then(res=>{console.log(res.data.message)})
    })
}
populateUsers()
export default{populateUsers}