import logo from '../assets/logo_dark.svg';
import classes from './MainNav.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';
const MainNav = () => {
	const token = useRouteLoaderData('root');
	return (
		<header>
			<nav>
				<section>
					<img src={logo} alt='My Icon' width={50} height={50} />
					<Link to={'/'}>
						<h2>React</h2>
					</Link>
				</section>
				<input placeholder='Search'></input>
				<ul>
					{!token && (
						<NavLink
							to={'auth?mode=login'}
							className={({ isActive }) => (isActive ? classes.active : '')}>
							Zaloguj sie
						</NavLink>
					)}

					<NavLink
						to={'add_entry'}
						className={({ isActive }) => (isActive ? classes.active : '')}>
						Dodaj wpis
					</NavLink>
					<NavLink
						to={'blog'}
						className={({ isActive }) => (isActive ? classes.active : '')}>
						Blog
					</NavLink>
					{token && (
						<Form method='POST' action='/logout'>
							<button>Wyloguj się</button>
						</Form>
					)}
				</ul>
			</nav>
		</header>
	);
};
export default MainNav;
