import './App.css';

function App() {
	// const baseUrl = '/tokyo_station';
	const baseUrl = '';

	const handleMenuClick = () => {
		window.open(`${baseUrl}/menu.pdf`, '_blank');
	};

	const handleReserveClick = () => {
		window.open(`https://widgets.libroreserve.com/WEB/QC017394612547/book`, '_blank');
	};

	return (
		<div className='app'>
			<header className='header'>
				<div className='logo' style={{ fontFamily: 'tokyoFont' }}>
					Tokyo Station
				</div>
				<button className='menu-btn' onClick={handleMenuClick}>
					Menu
				</button>
				<button className='menu-btn' style={{ marginLeft: '10px' }} onClick={handleReserveClick}>
					Reserve
				</button>
			</header>
			<div className='video-container'>
				<video autoPlay muted loop playsInline className='background-video'>
					<source src={`${baseUrl}/tokyo.mp4`} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default App;
