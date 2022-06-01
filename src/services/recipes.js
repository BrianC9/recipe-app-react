
const API_URL = "https://api.spoonacular.com/";
const API_KEY = "82489cec06a2481abd433e1af301db95";
const NUM_RECIPES = 10;
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
        const response = await fetch(`${API_URL}recipes/random?apiKey=${API_KEY}&number=${NUM_RECIPES}`);
        const data = await response.json()
        return data.recipes;
    } catch (error) {
        console.error("error en la petición a recipes/random: ", error)
    }
}
export async function getVegetarian() {
    try {
        const response = await fetch(`${API_URL}recipes/random?apiKey=${API_KEY}&tags=vegetarian&number=${NUM_RECIPES}`);
        const data = await response.json();
        return data.recipes
    } catch (error) {
        console.error("fallo en la peticion a recipes/randon/tags=Vegetaria ", error)
    }
}
export async function getCuisine(typeCuisine) {
    try {
        const response = await fetch(`${API_URL}recipes/complexSearch?cuisine=${typeCuisine}&number=${NUM_RECIPES}&apiKey=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Fallo en la la peticion a tipo de cocina: " + typeCuisine, error)
    }
}
