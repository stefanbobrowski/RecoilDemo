import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import RecoilLogger from 'recoil-logger';
import Loading from './components/Loading/Loading';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
	<BrowserRouter>
		<ErrorBoundary>
			<RecoilRoot>
				<React.Suspense fallback={<Loading />}>
					<RecoilLogger />
					<App />
				</React.Suspense>
			</RecoilRoot>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root')
);
