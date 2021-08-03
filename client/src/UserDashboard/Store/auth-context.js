import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => { },
	onLogin: () => { }
});

export const AuthContextProvier = props => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserInfo = localStorage.getItem("isLoggedIn");
		if (storedUserInfo === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logOutHandler = (email, password) => {
		localStorage.setItem("isLoggedIn", "0");
		setIsLoggedIn(false);
	};
	return <AuthContext.Provider
		value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logOutHandler }}
	>{props.children}</AuthContext.Provider>
}

export default AuthContext;