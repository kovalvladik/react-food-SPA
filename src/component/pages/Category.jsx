import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {getFilteredByCategory} from "../../api";
import Preloader from "../Preloader";

function Category (){
    const {name} = useParams()
    const [meals, setMeals] = useState()
    useEffect(()=>{
        getFilteredByCategory(name).then(data => setMeals(data.meals))
    },[name])

    return<>
        {!meals.lenght ? <Preloader/> : <MealList meals={meals}/> }
    </>
}
export {Category}
