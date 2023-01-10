import Restaurant from "./HomePages/Restaurant"
import tonysPizza from "./templateAssets/tonysPizza/tonysPizza.jpg"

import Store from "./menus/Store"
import Orders from "./Inputs/order"
import Messenger from "./Inputs/messenger"
import Banking from "./HomePages/Banking"

import temp from "../../components/DesignTemplates/templateAssets/tempTempate.jpg"





const Templates = [
    {
        id: 111,
        name: "Restaurant",
        type: "HomePage",
        fileLocation: Restaurant,
        routeLink:'/restaurant', 
        image: tonysPizza, 
    },
    {
        id: 112,
        name: "Bank",
        type: "HomePage",
        fileLocation: Banking,
        routeLink:'/bankhome',  
        image: temp, 
    },
    {
        id: 113,
        name: "Order Form",
        type: "Inputs",
        fileLocation: Orders, 
        routeLink:'/orderform', 
        image: temp, 
    },
    {
        id: 114,
        name: "Messenger",
        type: "Inputs",
        fileLocation: Messenger, 
        routeLink:'/messenger', 
        image: temp, 
    },
    {
        id: 115,
        name: "E-Commerce",
        type: "Menu",
        fileLocation: Store,
        routeLink:'/e-commerce',  
        image: temp, 
    },
]

export default Templates;
