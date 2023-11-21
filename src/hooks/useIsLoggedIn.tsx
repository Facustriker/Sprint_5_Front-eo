export default function useIsLoggedIn() {
    window.localStorage.setItem('isLoggedIn',"true");
    return Boolean(window.localStorage.getItem('tokenLogIn'));
}