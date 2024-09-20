import BlogItem from './BlogItem';
import classes from './BlogList.module.css';
const BlogList = ({ data }) => {
	return (
		<ul className={classes.list}>
			<section>
				<h1>React Blog</h1>
				<p>
					This blog is the official source for the updates from the React team.
					Anything important, including release notes or deprecation notices,
					will be posted here first. You can also follow the @reactjs account on
					Twitter, but you won’t miss anything essential if you only read this
					blog.
				</p>
			</section>
			{data.map((item) => {
				return <BlogItem key={item.id} items={item} />;
			})}
		</ul>
	);
};
export default BlogList;
