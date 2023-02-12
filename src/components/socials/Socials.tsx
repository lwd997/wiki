import GithubIcon from '../icons/GithubIcon';
import TelegramIcon from '../icons/TelegramIcon';
import { Link } from 'react-router-dom';

type SocialLayout = 'vertical' | 'horizontal';

const Socials = ({ layout }: { layout: SocialLayout }) => {
	return (
		<div className={`socials ${layout}`}>
			<Link to="https://github.com/Klimenteen">
				<GithubIcon />
			</Link>
			<Link to="https://t.me/Kliment_dev">
				<TelegramIcon />
			</Link>
		</div>
	);
};

export default Socials;
