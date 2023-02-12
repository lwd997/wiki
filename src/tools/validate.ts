export const validateEmail = (email: string): boolean => {
	const validated = email
		.toLocaleLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	if (validated && Array.isArray(validated)) return true;

	return false;
};

export const validatePass = (pass: string): boolean => pass.length > 7;
