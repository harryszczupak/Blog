import { Form, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { useState } from 'react';
import { useActionData } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
const AuthForm = () => {
	const data = useActionData();
	const navigation = useNavigation();

	const [params] = useSearchParams();
	const isLogged = params.get('mode') == 'login';
	const [inputsState, setInputsState] = useState({
		user: '',
		password: '',
		email: '',
	});

	const [isTouched, setIsTouched] = useState({
		user: false,
		password: false,
		email: false,
	});
	let userIsInvalid =
		(inputsState.user.length && isNaN(inputsState.user)) == 0 && isTouched.user;
	let passIsInvalid =
		(inputsState.password.length && inputsState.password.length > 8) == 0 &&
		isTouched.password;
	let emailIsInvalid = inputsState.email.length == 0 && isTouched.email;
	let formIsinValid;
	if (params.get('mode') == 'login') {
		formIsinValid =
			(inputsState.user.length && isNaN(inputsState.user)) == 0 ||
			(inputsState.password.length && inputsState.password.length > 8) == 0;
	} else {
		formIsinValid =
			(inputsState.user.length && isNaN(inputsState.user)) == 0 ||
			(inputsState.password.length && inputsState.password.length > 8) == 0 ||
			inputsState.email.length == 0;
	}

	const handleChange = (e) => {
		setInputsState((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleBlur = (name) => {
		setIsTouched((prev) => {
			return { ...prev, [name]: true };
		});
	};

	return (
		<Form method='post' className={classes.Authform}>
			<div className={classes.inuptsArea}>
				<h1
					style={{
						color: 'black',
						textAlign: 'start',
						width: '95%',
						margin: '10px',
					}}>
					{isLogged ? 'Log in' : 'Sign Up'}
				</h1>
				<div className={classes.titlefield}>
					<label>username</label>
					<input
						type='text'
						name='user'
						onBlur={(e) => {
							handleBlur('user', e);
						}}
						onChange={handleChange}
						className={userIsInvalid ? classes.invalid : ''}
						value={inputsState.name}></input>
				</div>
				<div className={classes.desc}>
					<label>password</label>
					<input
						type='password'
						name='password'
						onBlur={(e) => {
							handleBlur('password', e);
						}}
						onChange={handleChange}
						className={passIsInvalid ? classes.invalid : ''}
						value={inputsState.password}></input>
					{data && JSON.parse(data).message && (
						<p style={{ color: 'black' }}>{JSON.parse(data).message}</p>
					)}
				</div>
				{!isLogged && (
					<div className={classes.email}>
						<label>email</label>
						<input
							type='email'
							name='email'
							onBlur={(e) => {
								handleBlur('email', e);
							}}
							onChange={handleChange}
							className={emailIsInvalid ? classes.invalid : ''}
							value={inputsState.email}></input>
					</div>
				)}
			</div>

			<div className={classes.buttons}>
				<Link to={`?mode=${isLogged ? 'signup' : 'login'}`}>
					{isLogged ? 'Create User' : 'Login'}
				</Link>
				<button
					onClick={() => {
						setIsTouched(() => {
							return { user: true, password: true, email: true };
						});
					}}>
					{isLogged ? 'Log in' : 'Register'}
					{navigation.state == 'submitting' && 'submitting'}
				</button>
			</div>
		</Form>
	);
};
export default AuthForm;
