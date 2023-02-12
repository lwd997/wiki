import LoginPage from './pages/login/LoginPage';
import Blob from './components/Blob';

function App() {
	return (
		<div className="App">
			<div className="app-frame" style={{ height: '100%', width: '100%', zIndex: 1 }}>
				<LoginPage />
			</div>
			<Blob
				size={{ height: 100, width: 100 }}
				color="magenta"
				wanderCoords={[
					{ x: 0, y: 0 },
					{ x: 20, y: 50 },
					{ x: 30, y: 70 },
					{ x: 70, y: 30 },
				]}
			/>
			<Blob
				size={{ height: 120, width: 120 }}
				color="cyan"
				wanderCoords={[
					{ x: 400, y: 700 },
					{ x: 270, y: 620 },
				]}
			/>
			<Blob
				size={{ height: 40, width: 40 }}
				color="blue"
				wanderCoords={[
					{ x: 500, y: 90 },
					{ x: 560, y: 190 },
				]}
			/>
		</div>
	);
}

export default App;
