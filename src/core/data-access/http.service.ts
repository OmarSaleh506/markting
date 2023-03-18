import { AxiosHeaders, AxiosRequestHeaders,} from "axios";
import axiosObject, { axiosObjects } from "../configs/axios.config";
import { HttpMethods } from "../enums/httpMethods.enum";

export type MakeRequest = {
	url: string;
	method: HttpMethods;
	data?: Object | undefined;
	params?: Object | undefined;
	headers?:AxiosRequestHeaders | undefined
};

export const makeRequest = async (req: MakeRequest) => {
	const { url, method, data, params, headers } = req;
	return axiosObject({
		url,
		method,
		data,
		params,
		headers,
	}).then((res) => {
		return res.data;
	});
};

export const makeRequests = async (req: MakeRequest) => {
	const { url, method, data, params, headers } = req;
	return axiosObjects({
		url,
		method,
		data,
		params,
		headers,
	}).then((res) => {
		return res.data;
	});
};
