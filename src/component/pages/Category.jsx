import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Preloader from "../Preloader";
import {MealList} from "../meal/MealList";
import {getFilteredByCategory} from "../../api";
import ButtonNavigation from "../ButtonNavigation";

function Category (){
    const {name} = useParams()
    const [meals, setMeals] = useState([])

    useEffect(()=>{
        getFilteredByCategory(name).then((data) => setMeals(data.meals))
    },[name])

    return<>
        <ButtonNavigation/>
        {!meals.length ? <Preloader/> : <MealList meals={meals}/> }
    </>
}
export {Category}
