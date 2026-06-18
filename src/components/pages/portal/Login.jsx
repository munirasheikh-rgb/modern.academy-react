export default function Login (){

    return(
        <>
        <main className="content">
    <section className="portal-login">
      <h2>Student Portal Login</h2>
      <form className="portal-login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" required/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required/>

        <button type="submit">Login</button>
      </form>
      <p>Forgot your password? <a href="#">Reset it here</a>.</p>
    </section>
  </main>
        </>
    )
}