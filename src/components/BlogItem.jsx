import { Link } from 'react-router-dom';
import classes from './BlogItem.module.css';
const BlogItem = ({ items }) => {
	return (
		<Link
			to={`/blog/${items.id}`}
			style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
			<li className={classes.item}>
				<h1>{items.title}</h1>
				<p>{items.dateData}</p>
				<span>{items.description}</span>
				<a>Read more</a>
			</li>
		</Link>
	);
};
export default BlogItem;
