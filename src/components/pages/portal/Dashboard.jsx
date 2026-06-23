import { useLocation } from "react-router-dom"

export default function Dashboard(){
 const location = useLocation()
 const student = location.state?.student

    return(
        <>
    <main style={{"fontFamily":"serif"}} className="content">
      <section className="dashboard">
        <h2 style={{fontFamily:"serif",fontSize:"20px",fontWeight:"bold"}}>Welcome, {student?.name}!</h2>
        <p>You have successfully logged into the student portal.</p>
     
     <div style={{"width":"500px"}}  className="card col-4 m-3 p-4">
        <h4>Students Details</h4>
        <p><strong>Student Name:</strong> {student?.name}</p>
        <p><strong>Grade: </strong>{student?.grade}</p>
        <p><strong>Class Teacher: </strong>{student?.classTeacher}</p>

     </div>
     <div style={{"width":"500px"}}   className="card col-4 m-3 p-4">
        <h4>Fee statment and Balance</h4>
          <p><strong>Total Fees: </strong>Ksh {student?.totalfees}</p>
          <p><strong>Balance: Ksh </strong>{student?.feesBalance}</p>

     </div>
     
     <div style={{"width":"500px"}} className="card col-4 m-3 p-4">

        <h4>Teachers Remarks</h4>
        <p style={{fontStyle:"italic"}}>{student?.remarks}</p>
     </div>
      </section>
    </main>
        </>
    )
}