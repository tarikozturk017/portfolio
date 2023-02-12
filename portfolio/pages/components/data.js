
import staticAuctionHub from "../../public/auctionhub.jpg"
import auctionHub from "../../public/auctionhub.gif"
import staticReasype from "../../public/staticReasype.jpg"
import reasype from "../../public/reasype.gif"

// import projectData from "./components/data"

const projectData = [
    {
        "name":"AuctionHub | Online Auction/Shopping Web Application",
        "technologies": ["javascript", "react", "Django", "Python", "CSS", "HTML"],
        "description": "AuctionHub is an online auction/shopping web application where you can bid the existing listings. You can add an item to your watchlist, comment on listings, create a listing, search items, and more features.",
        "features": ["some", "major", "features"],
        "images": {
            "static": staticAuctionHub,
            "dynamic": auctionHub            
        }
    },
    {
        "name":"Reasype",
        "technologies": ["javascript", "React", "Axios", "CSS", "HTML"],
        "description": "This application generates based on user's need. You can filter the number of ingredients, cuisine type, diet type, health label and search with a keyword. You can exclude certain items and many more. It generates a recipe based on your selections. Therefore, you do not need to think what you will cook tonight!",
        "features": ["some", "major", "features"],
        "images": {
            // img: require("../../public/staticReasype.jpg"),
            "static": staticReasype,
            "dynamic": reasype            
        }
    }
];

export default projectData;