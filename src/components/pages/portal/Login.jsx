import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
export default function Login (){
  const[formData,setFormData] = useState({
    username :"",
    password:""
  })

  const [user,setUser]=useState(null)
  const navigate = useNavigate()

    function handlesubmit(e){
        e.preventDefault()
    fetch(`http://localhost:3001/students?username=${formData.username}`)
    .then((response)=>response.json()) 
    .then((data) =>{
      if(data.length > 0 && data[0].password === formData.password) {
       setUser(data[0])
       alert("Welcome Dear Student!")
       navigate("/dashboard",{
        state:{student: data[0]}
       })
    }else{
        alert("Invalid username or password")    
    }
    } ).catch((error)=>console.log(error))

    }
     function handleOnchange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
     }

    return(
        <>
        <main className="content">
    <section className="portal-login">
      <h2>Student Portal Login</h2>
      <form onSubmit={handlesubmit} className="portal-login-form" >
        <label htmlFor="username">Username</label>
        <input type="text" 
        id="username"
        name="username"
        placeholder="Enter your username" 
        value={formData.username}
        onChange={handleOnchange}
        required/>

        <label htmlFor="password">Password</label>
        <input type="password" 
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleOnchange}
        required/>

        <button type="submit">Login</button>
      </form>
      <p>Forgot your password? <a href="#">Reset it here</a>.</p>
    </section>


  </main>
        </>
    )
}