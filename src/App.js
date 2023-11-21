import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Rectangle_1 } from './components/Rectangle';
import { Banner_1 } from './components/Banner';
import Login_1 from './components/Login';
import Recipie from './components/Recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					{/* Render both Banner_1 and Rectangle_1 components on the landing page (localhost:3000/) */}
					<Route
						path="/"
						element={
							<div>
								<Banner_1 />
								<Rectangle_1 />
							</div>
						}
					/>
					<Route path="/login" element={<Login_1 />} />
					<Route path="/other" element={<Rectangle_1 />} />

					<Route path="/recipes" element={<Recipie />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
