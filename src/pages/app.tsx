import React, { useState } from 'react';

import { Link } from '@utils/link';

function App() {
	const [count, setCount] = useState(0);

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
					<br />
					<Link to="/link">Link</Link>
				</p>
			</header>
		</div>
	);
}

export default App;
