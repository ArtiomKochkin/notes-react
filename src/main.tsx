import ReactDOM from 'react-dom/client';
import "@/app/styles/index.scss";
import BaseLayout from './app/layouts/BaseLayout';
import Providers from './app/providers/Providers';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
	<Providers>
		<BaseLayout/>
	</Providers>
)