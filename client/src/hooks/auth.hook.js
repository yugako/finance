import { useState, useCallback, useEffect } from "react";

const storageName = 'userData';

export const useAuth = () => {
    /**
     * Set local state
     */

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [ready, setReady] = useState(false);

    /**
     * Login handler
     */
    const login = useCallback((jwtToken, id, keep_logged = false) => {
        setToken(jwtToken);
        setUserId(id);

        if (keep_logged) {
            localStorage.setItem(storageName, JSON.stringify({
                userId: id, token: jwtToken
            }));
        } else {
            sessionStorage.setItem(storageName, JSON.stringify({
                userId: id, token: jwtToken
            }));
        }
    }, []);

    /**
     * Logout handler
     */
    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);

        localStorage.removeItem(storageName);
        sessionStorage.removeItem(storageName);

        localStorage.removeItem("userName");
        sessionStorage.removeItem("userName");
    }, []);

    /**
     * Perform login if user data is in in local storage
     */
    useEffect(() => {
        let data = null;
        if(localStorage.getItem(storageName)) {
            data = JSON.parse(localStorage.getItem(storageName));
        } else {
            data = JSON.parse(sessionStorage.getItem(storageName));
        }

        if (data && data.token) {
            login(data.token, data.userId);
        }

        setReady(true);
    }, [login]);

    return {login, logout, token, userId, ready};
}