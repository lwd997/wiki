import FloatingFormLayout from '../../layouts/FloatingFormLayout';
import LoginForm from '../../components/from/LoginForm';
import '../../style/floatingLayout.scss';
const LoginPage = () => {
	return (
		<FloatingFormLayout>
			<LoginForm />
		</FloatingFormLayout>
	);
};

export default LoginPage;
