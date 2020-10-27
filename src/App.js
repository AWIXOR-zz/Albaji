import React from 'react';
import './App.css';
import Home from './views/Home';
import 'tailwindcss/dist/base.css';
import './styles/globalStyles.css';
import Provider from './Provider';
import Context from './Context';
import { DefaultLayout } from './layouts';

function App() {
	return (
		<Provider>
			{/* <Context.Consumer> */}
			<DefaultLayout>
				<Home />
			</DefaultLayout>
			{/* </Context.Consumer> */}
		</Provider>
	);
}

export default App;
