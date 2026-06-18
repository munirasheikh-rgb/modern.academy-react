export default function Dashboard(){

    return(
        <>
        <main className="content">
    <section className="dashboard">
      <h2>Welcome, <span id="student-name"></span>!</h2>
      <p>You have successfully logged into the student portal.</p>

      <div className="portal-links">
        <ul>
          <li><a href="#">Assignments</a></li>
          <li><a href="#">Grades</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="profile.html">Profile</a></li>
        </ul>
      </div>
    </section>
  </main>
        </>
    )
}