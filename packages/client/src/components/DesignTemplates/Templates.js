import Store from "./menus/Store"
import Orders from "./Inputs/order"
import Messenger from "./Inputs/messenger"
import Banking from "./HomePages/Banking"
import Restaurant from "./HomePages/Restaurant"
import designSchemes from "../../images/designObj"

const Templates = [
    {
        id: 111,
        name: "Restaurant",
        type: "HomePage",
        fileLocation: Restaurant, 
        image: designSchemes.image, 
    },
    {
        id: 112,
        name: "Bank",
        type: "HomePage",
        fileLocation: Banking, 
        image: designSchemes.image, 
    },
    {
        id: 113,
        name: "Order Form",
        type: "Inputs",
        fileLocation: Orders, 
        image: designSchemes.image, 
    },
    {
        id: 114,
        name: "Messenger",
        type: "Inputs",
        fileLocation: Messenger, 
        image: designSchemes.image, 
    },
    {
        id: 115,
        name: "E-Commerce",
        type: "Menu",
        fileLocation: Store, 
        image: designSchemes.image, 
    },
]

export default Templates;