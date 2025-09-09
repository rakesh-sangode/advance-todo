import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Upcoming from './pages/Home';
import Today from './pages/Today';
import MainSidebar from './components/sidebar/MainSidebar';

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainSidebar />}
			>
				<Route
					index
					element={<Upcoming />}
				/>
				<Route
					path="today"
					element={<Today />}
				/>
				{/* Redirect for unknown routes */}
				<Route
					path="*"
					element={<Navigate to="/" />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
