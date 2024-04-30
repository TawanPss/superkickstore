import Cookies from "js-cookie";

const AuthProvider = {
  login: (access_token) => {
    Cookies.set("access_token", access_token);
    // Cookies.set('uid', uid)
  },
  logout: () => {
    Cookies.remove("access_token");
    // Cookies.remove('uid')
  },
  getAccessToken: () => {
    return Cookies.get("access_token");
  },
  setAccessToken: (access_token) => {
    Cookies.set("access_token", access_token);
  },
  // getUid: () => {
  //     return Cookies.get('uid');
  // },
};

export default AuthProvider;
