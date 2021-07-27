import {useState,useEffect} from 'react'
import {getAllCategories} from "../../api";
import {CategoryList} from "../CategoryList";
import Preloader from "../Preloader";
import {Search} from "../Search";


function Home () {
    const [catalog,setCatalog] = useState([])
    useEffect(()=>{
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    },[])
    return <>
        <Search cb={}/>
        {!catalog.length ? <Preloader/> : (
            < CategoryList catalog={catalog}/>
        )}
    </>
}
export {Home}