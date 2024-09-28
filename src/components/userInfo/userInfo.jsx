import classes from './userInfo.module.css';
const UserInfo = ({ info }) => {
	return (
		<section className={classes.userInfo}>
			<span
				style={{
					display: 'flex',
					textAlign: 'center',
					alignItems: 'center',
					fontWeight: 'bold',
					fontSize: '30px',
				}}>
				User name: <p>{info.name}</p>
			</span>
			<span
				style={{
					display: 'flex',
					textAlign: 'center',
					alignItems: 'center',
					fontWeight: 'bold',
					fontSize: '30px',
				}}>
				email-adress: <p>{info.email}</p>
			</span>
		</section>
	);
};
export default UserInfo;
