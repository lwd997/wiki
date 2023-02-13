import { useEffect, useRef, useState } from 'react';
import RestApi from '../../api/RestApi';

import { validateEmail, validatePass } from '../../tools/validate';
import MartiansIcon from '../icons/MartiansIcon';
import { randomAnim } from '../../tools/randomAmin';
import Lock from '../icons/Lock';
import Spinner from '../Spinner';

const LoginForm = () => {
	const validateTimeOut = useRef<any>(null);

	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const [isPassValid, setIsPassValid] = useState<boolean>(false);
	const [monsterAnim, setMonsterAnim] = useState<string>('');
	const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);

	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [requesting, setRequesting] = useState<boolean>(false);

	console.log(isEmailValid && isPassValid);

	const checkValidity = (string: string, type: string) => {
		clearTimeout(validateTimeOut.current);
		validateTimeOut.current = setTimeout(() => {
			if (type === 'email') validateEmail(string) ? setIsEmailValid(true) : setIsEmailValid(false);
			else if (type === 'password') validatePass(string) ? setIsPassValid(true) : setIsPassValid(false);
		}, 200);
	};

	const blankRequest = async () => {
		setRequesting(true);
		setTimeout(() => {
			setRequesting(false);
			setWasSubmitted(true);
		}, 400);
	};

	useEffect(() => {
		checkValidity(login, 'email');
	}, [login]);

	useEffect(() => {
		checkValidity(password, 'password');
	}, [password]);

	return (
		<div className="login-form-container">
			<div className="form">
				<form
					id="login-form"
					onSubmit={(e) => {
						e.preventDefault();
						blankRequest();
					}}
				>
					<h1>А ну-ка, входи</h1>

					<input
						className={!isEmailValid && wasSubmitted ? 'non-valid' : ''}
						type="email"
						name="email"
						value={login}
						placeholder="email"
						onChange={(e) => {
							setLogin(e.target.value);
						}}
					/>
					<input
						className={!isPassValid && wasSubmitted ? 'non-valid' : ''}
						type="password"
						name="password"
						value={password}
						placeholder="pas"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>

					<button type="submit" disabled={!isEmailValid || !isPassValid || requesting}>
						{(!isEmailValid || !isPassValid) && <Lock />}
						{requesting && <Spinner />}
						{!requesting && <span>Вход</span>}
					</button>
				</form>
				<div className="box">
					<div className="monstrik" onClick={() => setMonsterAnim(randomAnim())} style={{ animation: `${monsterAnim} .5s forwards` }}>
						<MartiansIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
