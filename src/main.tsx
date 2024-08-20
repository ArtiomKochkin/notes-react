import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BaseLayout } from './app/layouts';
import { Providers } from './app/providers';
import "./app/styles/index.scss";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
	<Providers>
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<BaseLayout/>
		</BrowserRouter>
	</Providers>
)