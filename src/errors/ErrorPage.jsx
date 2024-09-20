import { useRouteError } from 'react-router-dom';
import classes from './ErrorPage.module.css';
const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div id={classes.error}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};
export default ErrorPage;
