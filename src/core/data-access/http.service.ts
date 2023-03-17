import axiosObject from "../configs/axios.config";
import { HttpMethods } from "../enums/httpMethods.enum";

export type MakeRequest = {
	url: string;
	method: HttpMethods;
	data?: Object | undefined;
	params?: Object | undefined;
};

export const makeRequest = async (req: MakeRequest) => {
	const { url, method, data, params } = req;
	return axiosObject({
		url,
		method,
		data,
		params,
	}).then((res) => {
		return res.data;
	});
};
