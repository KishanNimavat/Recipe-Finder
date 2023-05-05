import { useState, useEffect } from "react";
import Search from "../component/Search";
import RecipeList from "../component/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchResult();
    }, [searchedQuery])

    const getSearchResult = async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }
    }

    return (
        <>

            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </>
    )
}

export default Recipes;