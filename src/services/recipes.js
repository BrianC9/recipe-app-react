
const API_URL = "https://api.spoonacular.com/";
const API_KEY = "82489cec06a2481abd433e1af301db95";
const NUM_RECIPES = 12;
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
export async function getRecipeBySearch(name) {
    try {
        const response = await fetch(`${API_URL}/recipes/complexSearch?query=${name}&apiKey=${API_KEY}&number=15`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Fallo en la petición a busqueda por nombre: " + name, error)
    }
}
export async function getRecipeDetails(id) {
    try {
        const response = await fetch(`${API_URL}/recipes/${id}/information?apiKey=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error en la petición de buscar receta por id: " + id, error)
    }

}