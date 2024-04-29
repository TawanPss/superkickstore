import axios, { AxiosRequestConfig } from 'axios';

function getRequestConfig(method, url, data) {

    const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };

    return {
        method,
        url: `${process.env.NEXT_PUBLIC_API_PATH}${url}`,
        headers,
        data,
    };
}

async function sendRequest(config) {
    try {
        const response = await axios(config);
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        throw {
            status: error.response?.status,
            message: error.response?.data?.message,
            code: error.response?.data?.code,
        };
    }
}

export async function get(url, params) {
    let queryParams = '';
    if (params) {
        const nonEmptyParams = Object.entries(params)
            .filter(([_, value]) => value !== null && value !== undefined && value !== '')
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((item) => `${key}=${item}`).join('&');
                } else {
                    return `${key}=${value}`;
                }
            });
        queryParams = nonEmptyParams.join('&');
    }
    const fullUrl = queryParams ? `${url}?${queryParams}` : url;
    const config = getRequestConfig('get', fullUrl, undefined);
    return sendRequest(config);
}

export async function post(url, data) {
    const formData = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            formData.append(key, data[key]);
        }
    }
    const config = getRequestConfig('post', url, formData);
    return sendRequest(config);
}

export async function deleteRequest(url, data) {
    const config = getRequestConfig('delete', url, data);
    return sendRequest(config);
}

export async function put(url, data) {
    const config = getRequestConfig('put', url, data);
    return sendRequest(config);
}

