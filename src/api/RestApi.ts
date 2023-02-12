export interface ApiResponse {
	status: number;
}

export interface LoginResponse extends ApiResponse {
	data: {
		access_toke: string;
		refresh_token: string;
	};
}

export interface RestApiProps {
	url?: string;
	endpoint?: string;
}

type Method = 'POST' | 'GET' | string;
export interface RequestProps extends RestApiProps {
	url: string;
	method: Method;
	body?: { [key: string]: any };
}

class RestApi {
	private url?: string;
	private endpoint?: string;
	constructor({ url, endpoint }: RestApiProps) {
		this.url = url;
		this.endpoint = endpoint;
	}

	prepareFormData(data: { [key: string]: any }): FormData {
		const fd = new FormData();
		for (const key in data) {
			fd.append(key, data[key]);
		}
		return fd;
	}

	async request({ url, method, body }: RequestProps) {
		try {
			const response = await fetch(url, { method, ...(body && { body: this.prepareFormData(body) }) }).then((response) =>
				response.json().then((data) => ({ status: response.status, data }))
			);
			return response;
		} catch (error) {
			return null;
		}
	}

	async post({ url, body }: { url: string; body: { [key: string]: any } }) {
		const response = await this.request({ url, method: 'POST', body });
		console.log(response);

		if (response) return response;
		return null;
	}

	async loginRequest<LoginResponse>() {
		try {
			const response = await fetch('https://kokojambo.requestcatcher.com/test').then((response) =>
				response.text().then((data) => ({ status: response.status, data }))
			);
			return response;
		} catch (error) {
			throw new Error('ОШИБКА АПИ');
		}
	}
}

// export const api = new RestApi();
export default RestApi;
