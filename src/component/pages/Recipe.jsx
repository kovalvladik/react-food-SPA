import {useHistory,useParams} from "react-router-dom";
import {getMealById} from '../../api'
import {useEffect,useState} from "react";
import ButtonNavigation from "../ButtonNavigation";
import Preloader from "../Preloader";
import {RecipeTable} from "../RecipeTable";
import {VedeoRecipe} from "../VedeoRecipe";

function Recipe() {

    const [recipe, setRecipe] = useState({})

    const {id} = useParams()

    const {goBack } = useHistory()

    useEffect(()=>{
        getMealById(id).then((data) =>setRecipe(data.meals[0 ]))
    },[id])
    return<>
        <ButtonNavigation/>
        {!recipe.idMeal ? <Preloader/> :(
            <div>
                <img src={recipe.strMealThumb} />
                <h1>{ recipe.strMeal}</h1>
                <h6> { recipe.strCategory}</h6>
                {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
                <RecipeTable/>
                <VedeoRecipe recipe={recipe}/>
                {/*<div>*/}
                {/*    <iframe*/}
                {/*    title={id}*/}
                {/*    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}*/}
                {/*    allowFullScreen*/}
                {/*    />*/}
                {/*</div>*/}

            </div>
        )}

    </>
}
export {Recipe}