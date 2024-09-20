import { Fragment } from 'react';
import MainNav from '../components/MainNav';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
	return (
		<Fragment>
			<MainNav />
			<Outlet />
		</Fragment>
	);
};
export default RootLayout;
