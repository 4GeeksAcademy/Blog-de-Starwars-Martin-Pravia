const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBaseStarWars: "https://www.swapi.tech/api",
			people: JSON.parse(localStorage.getItem("people")) || []
		},
		actions: {
			getAllPeople: async () => {
				const store = getStore()
				if(store.people <=0) {
					try {
						const response = await fetch(`${store.urlBaseStarWars}/people`)
						const data = await response.json()
						console.log(data)
						console.log(data.results)
						for(let person of data.results) {
							console.log(person)
							const responsePerson = await fetch(person.url)
							const dataPerson = await responsePerson.json()
							console.log(dataPerson)
							setStore({
								people: [...store.people, dataPerson.result]
							})
							localStorage.setItem("people", JSON.stringify(store.people))
						}
					} catch (error) {
						console.log(error)
					}
				}
				
			}
			}
		}
	};


export default getState;
