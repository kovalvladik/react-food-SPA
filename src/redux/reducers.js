

 const defaultState = {
     catalog:[],
 }


 export const GET_CATALOG = "GET_CATALOG"
 export const FETCH_CATALOG = "FETCH_CATALOG"


 const reducer = (state = defaultState, action) => {
     switch (action.type) {
         case GET_CATALOG:
             return {
                 ...state,
                 catalog: action.payload
             }




         default:
             return state
     }

 }

 export {reducer}
 export const getCatalog = (payload) =>({type:GET_CATALOG,payload})
 export const fetchCatalog = () =>({type:FETCH_CATALOG})
