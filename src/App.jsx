import './App.css'

function App() {
  const handleMenuClick = () => {
    window.open('/menu.pdf', '_blank')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Tokyo Station</div>
        <button className="menu-btn" onClick={handleMenuClick}>Menu</button>
      </header>
      <div className="video-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/tokyo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default App
