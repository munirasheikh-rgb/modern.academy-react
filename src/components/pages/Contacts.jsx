export default function Contacts(){

    return(
        <>
        <main className="content">
    <section className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out. We are happy to assist you!</p>

      <form className="contact-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your name" required/>

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" required/>

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Type your message here" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
   </main>
        </>
    )
}