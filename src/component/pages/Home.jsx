import {useState,useEffect} from 'react'
import {getAllCategories} from "../../api";
import {CategoryList} from "../category/CategoryList";
import Preloader from "../Preloader";
import {Search} from "../Search";
import {useLocation, useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalog} from "../../redux/reducers";


const useStyles = makeStyles({
    root: {
        backgroundColor:'#afc2cb',
    },
    main:{
        minHeight: 'calc(100vh - 70px - 64px)',

    },

});


function Home () {

    const classes = useStyles();

    const  dispatch  = useDispatch()
    const data = useSelector(state => state.catalog)
console.log(data)

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
    return <div className={classes.main}>
        <div className={classes.root}>
            <Search cb={handleSearch} />
        </div>

        {!catalog.length ? <Preloader/> : (
            < CategoryList catalog={filteredCatalog} />
        )}
    </div>
}
export {Home}