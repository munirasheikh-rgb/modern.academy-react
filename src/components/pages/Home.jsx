import { Link } from "react-router-dom"
export default function Home(){

    return(
        <>
        <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-bg">
      <img
        className="hero-bg__img"
        src="../assets/modernhomepage.jpeg"
        alt="Modern Academy campus"
        width="1920"
        height="1080"
        decoding="async"
        fetchPriority="high"/>
    </div>
    <div className="hero-scrim" aria-hidden="true"></div>
    <div className="hero-content">
      <h2 id="hero-heading">Welcome to Modern Academy</h2>
      <p className="hero-tagline">YES WE CAN</p>
      <Link to="/explore-more" className="btn-primary hero-cta">Explore More</Link>
    </div>
  </section>

  <main className="content">
    <section className="news">
      <h2>Latest News</h2>
      <article className="news-card">
        <img src="../assets/images/news1.jpg" alt="News 1"/>
        <h3>News Headline 1</h3>
        <p>Short description of the news article.</p>
        <Link to="/read-more">Read More</Link>
      </article>
      <article className="news-card">
        <img src="../assets/images/news2.jpg" alt="News 2"/>
        <h3>News Headline 2</h3>
        <p>Short description of the news article.</p>
        <Link to="/read-more">Read More</Link>
      </article>
    </section>

    <aside className="portal">
      <h2>Student Portal</h2>
      <ul>
        <li><a href="../portal/login.html">Login</a></li>
        <li><a href="#">Assignments</a></li>
        <li><a href="#">Grades</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </aside>
  </main>

        </>
    )
}