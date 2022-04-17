const API_URL = "https://api.spoonacular.com/";
/*
export async function getAllLaunches() {
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json()
        return data;
    } catch (error) {
        console.error("erroror en la petición a todos los launches: ", error)
    }
}

useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunchIndividual);
  }, [launchId]);

 */
export async function getPopular() {
    try {
        const response = await fetch(`${API_URL}/recipes/random?apiKey=82489cec06a2481abd433e1af301db95&number=10`);
        const data = await response.json()
        return data;
    } catch (error) {
        console.error("erroror en la petición a recipes/random: ", error)
    }
}