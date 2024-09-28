import { useRouteLoaderData } from 'react-router-dom';
import UserInfo from '../components/userInfo/userInfo';
const AccountPage = () => {
	let userInfo;
	if (localStorage.getItem('user_info')) {
		userInfo = JSON.parse(localStorage.getItem('user_info'));
	}

	const token = useRouteLoaderData('root');
	return (
		<>
			{!token ? (
				<p
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)',
						fontSize: '30px',
						fontWeight: 'bold',
					}}>
					You are not logged in{' '}
				</p>
			) : (
				<UserInfo info={userInfo} />
			)}
		</>
	);
};
export default AccountPage;
