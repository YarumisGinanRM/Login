const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: sessionStorage.getItem('user'),
			token: sessionStorage.getItem('token'),
			idUser: sessionStorage.getItem('idUser')
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				const user = sessionStorage.getItem("user");
				const idUser = sessionStorage.getItem("idUser");
				if (token && token != "" && token != undefined) {
					setStore({ token: token, user: user, idUser: idUser })
				}
			},

			login: async (credentials) => {
				try {
					console.log(credentials);
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",
						{
							method: "POST", // *GET, POST, PUT, DELETE, etc.
							mode: "cors", // no-cors, *cors, same-origin
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(credentials) // body data type must match "Content-Type" header
						});
					const data = await resp.json();
					console.log(resp.status);
					if (resp.status != 200) return false;
					console.log(data);
					sessionStorage.setItem('token', data.token);
					sessionStorage.setItem('user', data.user);
					sessionStorage.setItem('idUser', data.idUser);
					setStore({ token: data.token, user: data.user, idUser: data.idUser });
					// don't forget to return something, that is how the async resolves
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error);
					setStore({ token: null, user: null, idUser: null });
					sessionStorage.removeItem('token');
					sessionStorage.removeItem('user');
					sessionStorage.removeItem('idUser');
				}
			},

			logOut: () => {
				setStore({ token: null, user: null, idUser: null });
				sessionStorage.removeItem('token');
				sessionStorage.removeItem('user');
				sessionStorage.removeItem('idUser');
			},

			newUser: async (user) => {
				try {
					console.log(user);

					const respUser = await fetch(process.env.BACKEND_URL + "/api/registro", {
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(user)
					});

					const data = await respUser.json();
					console.log(data);

					if (respUser.status === 200) {
						return true;
					}

					return false;
				} catch (error) {
					console.log("Error adding new user", error);
					return false;
				}
			}


		}
	};
};

export default getState;
