import classes from './DetailItem.module.css';

import { useRouteLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';
const DetailItem = ({ data }) => {
	const token = useRouteLoaderData('root');
	return (
		<section className={classes.section}>
			<h1>{data.title}</h1>
			<span>{data.description}</span>
			{token != data.userId ? (
				<p>Wpis dodał użytkownik: {data.userName}</p>
			) : (
				<Form method='POST'>
					<button type='submit'>Usuń wpis</button>
				</Form>
			)}
		</section>
	);
};
export default DetailItem;
