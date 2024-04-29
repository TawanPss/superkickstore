// Simulated cookies object for browser environment
const cookies = {
    set: (name, value, options) => {
        // Simulated setting of cookie in the browser
        document.cookie = `${name}=${value}; expires=${options.expires}; sameSite=${options.sameSite}; secure=${options.secure}`;
    },
    delete: (name) => {
        // Simulated deletion of cookie in the browser
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    },
    get: (name) => {
        // Simulated retrieval of cookie in the browser
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : undefined;
    }
};

const AuthProvider = {
    login: (access_token, uid) => {
        //15 mins
        cookies.set('access_token', access_token, );
        //1 day
        // cookies.set('refresh_token', refresh_token, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), sameSite: 'lax', secure: true })
    },
    logout: () => {
        cookies.delete('access_token');
        cookies.delete('refresh_token');
    },
    getAccessToken: () => {
        return cookies.get('access_token');
    },
    setAccessToken: (access_token) => {
        cookies.set('access_token', access_token, );
    },
    getRefreshToken: () => {
        return cookies.get('refresh_token');
    },
};

export default AuthProvider;
