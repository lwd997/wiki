export const animList = {
	JIGGLE: 'animation-jiggle',
	JUMP: 'animation-jump',
};

const animAlias = ['animation-jiggle', 'animation-jump', 'animation-runaway'];

let prevAnim = '';

export const randomAnim = () => {
	let anim = animAlias[Math.floor(Math.random() * animAlias.length)];
	if (prevAnim === anim) {
		anim = randomAnim();
	}
	prevAnim = anim;
	return anim;
};
