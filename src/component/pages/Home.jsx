import {useState,useEffect} from 'react'
import {getAllCategories} from "../../api";
import {CategoryList} from "../CategoryList";
import Preloader from "../Preloader";
import {Search} from "../Search";
import {useLocation, useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        backgroundColor:'#afc2cb',
    },

});


function Home () {

    const classes = useStyles();


    const {push} = useHistory()

    const {pathname,search} = useLocation()

    const [catalog,setCatalog] = useState([])

    const [filteredCatalog, setFilteredCatalog] = useState([])

     const handleSearch = (str) =>{
        setFilteredCatalog(
            catalog.filter((item)=> item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
         push({
             pathname,
             search: `?search=${str}`
         })
     }

    useEffect(()=>{
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(search ? data.categories.filter(item =>
                item.strCategory.toLowerCase().includes(search .split('=')[1].toLowerCase()))
                :data.categories
            )
        })
    },[search])
    return <>
        <div className={classes.root}>
            <Search cb={handleSearch} />
        </div>

        {!catalog.length ? <Preloader/> : (
            < CategoryList catalog={filteredCatalog}/>
        )}
    </>
}
export {Home}