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
    const login = useCallback((jwtToken, id, keep_logged = false, firstName, lastName) => {
        setToken(jwtToken);
        setUserId(id);

        if (keep_logged) {
            localStorage.setItem(storageName, JSON.stringify({
                userId: id, token: jwtToken, userFullName: `${firstName} ${lastName}`,
            }));
        } else {
            sessionStorage.setItem(storageName, JSON.stringify({
                userId: id, token: jwtToken, userFullName: `${firstName} ${lastName}`,
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
            login(data.token, data.userId, data.userFirstName, data.userLastName);
        }

        setReady(true);
    }, [login]);

    return {login, logout, token, userId, ready};
}