import '../css/Homepagestyles.css'

function HomePage() {
  return (
    <>
    <div className="background">
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <a href="/" className="nav-logo">
                    <img src="/images/logo 3.png" alt="Yummy" />
                </a>
                <div className="nav-links">
                    <a href="/" className="nav-link">Explore</a>
                </div>
            </div>
        </div>
    </nav>
    <div className="text-container">
        <cite><h1>Yummy recipes from all around the world</h1></cite>
        <cite><h6>Create, Review and Share differnt recipes of your choice in the food community</h6></cite>
    </div>
    <div className="buttons">
        <a href="/signup" className="btn">SignUp</a>
        <a href="/login" className="btn">Login</a>
        <a href="/" className="btn">About</a>
    </div>
    </div>
    <footer className="page-footer">
        <p>&copy; <span id="date">2023</span><span className="footer-logo">
            YummyRecipes
          </span></p>
    </footer>
    </>
  )
}

export default HomePage