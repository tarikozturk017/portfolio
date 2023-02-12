
import staticAuctionHub from "../../public/auctionhub.jpg"
import auctionHub from "../../public/auctionhub.gif"
import staticReasype from "../../public/staticReasype.jpg"
import reasype from "../../public/reasype.gif"
import planetBlue from "../../public/planetblue.jpg"
import planetBlueGif from "../../public/planetblue.gif"
import trivia from "../../public/trivia.jpg"
import triviaGif from "../../public/trivia.gif"
import speedTyping from "../../public/speed.jpg"
import speedTypingGif from "../../public/speed.gif"
import memeGenerator from "../../public/memeGenerator.jpg"
import memeGeneratorGif from "../../public/memeGenerator.gif"
import tenzies from "../../public/tenzies.jpg"
import tenziesGif from "../../public/tenzies.gif"
import pomodoro from "../../public/pomodoro.jpg"
import pomodoroGif from "../../public/pomodoro.gif"
import quoteGenerator from "../../public/quote-generator.jpg"
import quoteGeneratorGif from "../../public/quote-generator.gif"
import calculator from "../../public/calculator.png"
import calculatorGif from "../../public/calculator.gif"
import code from "../../public/code.jpeg"



const projectData = [
    {
        "name":"AuctionHub | Online Auction/Shopping Web Application",
        "technologies": ["javascript", "react", "Django", "Python", "CSS", "HTML"],
        "description": "AuctionHub is an online auction/shopping web application where you can bid the existing listings. You can add an item to your watchlist, comment on listings, create a listing, search items, and more features.",
        "images": {
            "static": staticAuctionHub,
            "dynamic": auctionHub            
        }
    },
    {
        "name":"Reasype | Smart Recipe Generator",
        "technologies": ["JavaScript", "React", "Axios", "CSS", "HTML"],
        "description": "This application generates based on user's need. You can filter the number of ingredients, cuisine type, diet type, health label and search with a keyword. You can exclude certain items and many more. It generates a recipe based on your selections. Therefore, you do not need to think what you will cook tonight!",
        "images": {
            "static": staticReasype,
            "dynamic": reasype            
        }
    },
    {
        "name":"PlanetBlue | Shooting Game With Web Application",
        "technologies": ["JavaScript", "Python", "Flask", "SQL","CSS", "HTML"],
        "description": "PlanetBlue is a shooting game, which users can register and track their score. Users can see their top scores as well as their standings on the leadership board. The game becomes harder every time the user levels up. ",
        "images": {
            "static": planetBlue,
            "dynamic": planetBlueGif,            
        }
    },
    {
        "name":"Trivia | Quiz Game",
        "technologies": ["JavaScript", "React", "CSS", "HTML"],
        "description": "This is a Trivia application that generates a 5-question quiz page. Everytime the questions answered, it displays the correct answered questions. This application uses Opentdb API to get the questions.",
        "images": {
            "static": trivia,
            "dynamic": triviaGif,            
        }
    },
    {
        "name":"Speed Typing Game",
        "technologies": ["React", "JavaScript","CSS"],
        "description": "This project aims to improve typing faster. It tracks the time, when the time is up, it disables writing. Users can see the number of words they write.",
        "images": {
            "static": speedTyping,
            "dynamic": speedTypingGif,            
        }
    },
    {
        "name":"Meme Generator",
        "technologies": ["React", "JavaScript","CSS"],
        "description": "Meme generator is a project to help you create your memes quickly. All you need to do is to click 'Get a new image' button on the screen until you find one you like. Then add a bottom text and/or top text. And it is ready! You can start getting more attraction with the memes you created.",
        "images": {
            "static": memeGenerator,
            "dynamic": memeGeneratorGif,            
        }
    },
    {
        "name":"Tenzies",
        "technologies": ["React", "JavaScript","CSS"],
        "description": "This is a Tenzies application that generates 10 random numbers to the screen. User can click on any number to keep it. If a number is kept, it will be green. When a new numbers generated, the selected numbers will not change. The goal is to keep the 10 numbers same to finish the game.",
        "images": {
            "static": tenzies,
            "dynamic": tenziesGif,            
        }
    },
    {
        "name":"Pomodoro Clock",
        "technologies": ["React", "JavaScript","CSS"],
        "description": "Pomodoro Clock is a browser based timer, where you can set your session time, and break time. The alarm starts beeping at the end of the session time and break time. This application enables users to work/study more efficiently.",
        "images": {
            "static": pomodoro,
            "dynamic": pomodoroGif,            
        }
    },
    {
        "name":"Random Quote Generator",
        "technologies": ["React", "JavaScript","CSS"],
        "description": "This web application randomly generates quotes from famous people.",
        "images": {
            "static": quoteGenerator,
            "dynamic": quoteGeneratorGif,            
        }
    },
    {
        "name":"Calculator",
        "technologies": ["React", "JavaScript","CSS"],
        "description": "Calculator is an application where you can do the mathematical operations.",
        "images": {
            "static": calculator,
            "dynamic": calculatorGif,            
        }
    },

    {
        "name":"Aid Management System",
        "technologies": ["C++"],
        "description": "Aid management system manages the list of items needed to be shipped to places. It is an application where users can keep track of perishable and non-perishable items. I used C++ classes, dynamic memory allocation, operation overload, and more to create this application. This application allows you to read, write, update from/to file. (This project does not have a UI.)",
        "images": {
            "static": code,
            "dynamic": code,            
        }
    },
    {
        "name":"Employee Management System",
        "technologies": ["C++", "Oracle"],
        "description": "Employee management system allows you to apply CRUD on Oracle NoSQL Database. It allows users to find, add, update, remove employee. Additionally, it retrieve employee data from the database. (This project does not have a UI.)",
        "images": {
            "static": code,
            "dynamic": code,            
        }
    },
    {
        "name":"Account Ticketing System",
        "technologies": ["C"],
        "description": "Account ticketing system is an application where the users can track reported tickets. Each tickets contain certain problems and its description. The user can also manage tickets, and persist data. (This project does not have a UI.)",
        "images": {
            "static": code,
            "dynamic": code,            
        }
    },
    {
        "name":"Assembly Workstation",
        "technologies": ["C++"],
        "description": "Assembly Workstation application is a simulation of an assembly line with any number of work stations. The assembly line consists of a set of workstations each of which holds a set of stock items, which are specific to the station. A line manager moves customer orders along the line filling the orders at each station, as requested. Each customer order consists of a list of items that need to be filled. Each station processes a queue of orders by filling the next order in the queue if that order requests the station's item and that item is in stock. The line manager keeps moving the customer orders from station to station until all orders have been processed. Any station that has used all the items in stock cannot fill any more orders. At the end of the line orders are either completed or incomplete due to a lack of inventory at one or more stations. The simulator lists the completed orders and those that are incomplete once the line manager has finished processing all orders. (This project does not have a UI.)",
        "images": {
            "static": code,
            "dynamic": code,            
        }
    },
    {
        "name":"School Database Management System",
        "technologies": ["JavaScript", "express", "PostgreSQL"],
        "description": "This application allows users to apply CRUD on the relational database system. Users can query, add, delete, update student and course data from the database. This is mainly a backend web application with a basic UI.",
        "images": {
            "static": code,
            "dynamic": code,            
        }
    },
];

export default projectData;