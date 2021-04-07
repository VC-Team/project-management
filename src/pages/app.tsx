import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	console.log('count: ', count);
	return (
		<div className="app">
			<header className="app-header">
				<p className="app_title">Hello Vite + React!</p>
				<p>
					<button type="button" onClick={() => setCount(() => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
				<p>
					<a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
					{' | '}
					<a
						className="app-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;