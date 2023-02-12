import { ReactNode } from 'react';
import Socials from '../components/socials/Socials';

const FloatingFormLayout = ({ children }: { children?: ReactNode }) => {
	return (
		<>
			<div className="login-layout">{children}</div>
			<div className="floating-socials">
				<Socials layout="vertical" />
			</div>
		</>
	);
};

export default FloatingFormLayout;
