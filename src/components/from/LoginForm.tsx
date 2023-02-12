import { useEffect, useRef, useState } from 'react';
import RestApi from '../../api/RestApi';

import { validateEmail, validatePass } from '../../tools/validate';
import MartiansIcon from '../icons/MartiansIcon';
import { randomAnim } from '../../tools/randomAmin';

const LoginForm = () => {
	const validateTimeOut = useRef<any>(null);

	const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
	const [isPassValid, setIsPassValid] = useState<boolean>(true);
	const [monsterAnim, setMonsterAnim] = useState<string>('');

	const checkValidity = (string: string, type: string) => {
		clearTimeout(validateTimeOut.current);
		validateTimeOut.current = setTimeout(() => {
			if (type === 'email') validateEmail(string) ? setIsEmailValid(true) : setIsEmailValid(false);
			else if (type === 'password') validatePass(string) ? setIsPassValid(true) : setIsPassValid(false);
		}, 200);
	};

	return (
		<div className="login-form-container">
			<div className="form">
				<form id="login-form">
					<h1>А ну-ка, входи</h1>
					{!isEmailValid && 'НЕПРАВИЛЬНО'}
					<input type="email" name="email" placeholder="email" onChange={(e) => checkValidity(e.target.value, 'email')} />
					{!isPassValid && 'НЕПРАВИЛЬНО'}
					<input type="password" name="password" placeholder="pas" onChange={(e) => checkValidity(e.target.value, 'password')} />

					{monsterAnim}
				</form>

				<div className="box">
					<div className="monstrik" onClick={() => setMonsterAnim(randomAnim())} style={{ animation: `${monsterAnim} 1s forwards` }}>
						<MartiansIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
