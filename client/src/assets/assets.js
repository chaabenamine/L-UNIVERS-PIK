import logo from './logo.png'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import closeIcon from './closeIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

// TODO: Replace these hotel images with actual food/restaurant images in your folder!
import dishImg1 from './dishImg1.jpg' 
import dishImg2 from './dishImg2.jpg'
import dishImg3 from './dishImg3.jpg'
import dishImg4 from './dishImg4.jpg'
import dishImg5 from './dishImg5.jpg'
import dishImg6 from './dishImg6.jpg'
import dishImg7 from './dishImg7.jpg'
import dishImg8 from './dishImg8.jpg'
import dishImg9 from './dishImg9.jpg'
import dishImg10 from './dishImg10.jpg'



import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.jpg";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.jpg";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.webp";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    closeIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    dashboardIcon,
    listIcon,
    totalBookingIcon,
    totalRevenueIcon,
    dishImg1,
    dishImg2,
    dishImg3,
    dishImg4,
    dishImg5,
    dishImg6,
    dishImg7,
    dishImg8,
    dishImg9,
    dishImg10

}

// Replaced Cities with Menu Categories
export const categories = [
    "Entrée Froide",
    "Entrée Chaude",
    "Plat Principal",
    "Dessert",
    "Boissons"
];

// Replaced Guest House Offers with Restaurant Experiences
export const exclusiveOffers = [
    { 
        _id: 1, 
        title: "Menu Dégustation Épik", 
        description: "Un voyage complet en 5 services à travers nos épices signatures. Accords mets et vins inclus.", 
        priceOff: 15, 
        expiryDate: "Jeu - Sam", 
        image: exclusiveOfferCardImg1 
    },
    { 
        _id: 2, 
        title: "Business Lunch", 
        description: "Entrée, Plat et Café Oriental pour vos déjeuners d'affaires rapides mais raffinés.", 
        priceOff: 20, 
        expiryDate: "Lun - Ven (Midi)", 
        image: exclusiveOfferCardImg2 
    },
    { 
        _id: 3, 
        title: "Soirée Orientale", 
        description: "Découvrez nos plats infusés aux épices douces (Cannelle, Ras el Hanout) avec un cocktail Red Spice offert.", 
        priceOff: 10, 
        expiryDate: "Mardi Soir", 
        image: exclusiveOfferCardImg3 
    }
];
    
// Testimonials Updated for Gastronomy
export const testimonials = [
    { id: 1, name: "Cristiano Ronaldo", address: "Critique Culinaire", image: "./ronaldo.webp", rating: 5, review: "Le Carpaccio Safrané est une merveille. L'équilibre des épices chez Épik transforme un repas classique en une véritable expérience." },
    { id: 2, name: "lionel messi", address: "Client Fidèle", image: "./messi.webp", rating: 5, review: "Le Filet Black Pepper Premium offre une cuisson parfaite. Le service est impeccable et l'atmosphère chaleureuse." },
    { id: 3, name: "ichrak brinsi", address: "Blogueuse Gastronomie", image: "./ichrak.jpg", rating: 4, review: "Gros coup de cœur pour le Mac & Cheese version gastronomique. Le piment chipotle apporte une chaleur progressive incroyable !" }
];

// Restaurant Core Values
export const restaurantValues = [
    { icon: assets.badgeIcon, title: "Épices Premium", description: "Sélectionnées à la main auprès des meilleurs producteurs mondiaux." },
    { icon: assets.heartIcon, title: "Fait Maison", description: "Toutes nos sauces et purées sont préparées fraîchement chaque jour." },
    { icon: assets.starIconFilled, title: "Gastronomie Moderne", description: "L'alliance parfaite entre techniques modernes et saveurs ancestrales." },
];

export const userDummyData = {
    "_id": "user_restaurant_epik",
    "username": "Admin Épik",
    "email": "contact@universepik.com",
    "image": "/logo.png",
    "role": "restaurantManager",
    "createdAt": "2026-05-25T09:00:00.000Z",
    "updatedAt": "2026-05-25T09:00:00.000Z",
    "__v": 1
}

// -----------------------------------------------------
// THE MENU DATA (Generated from your Word Document)
// -----------------------------------------------------
export const menuDummyData = [
  {
    _id: "m1",
    category: "Entrée Froide",
    name: "Carpaccio Safrané Signature",
    description: "Le safran apporte finesse et profondeur aromatique à la délicatesse du carpaccio.",
    ingredients: ["Bœuf finement tranché", "Huile de safran", "Parmesan affiné", "Roquette fraîche", "Poivre rose", "Réduction balsamique"],
    mainSpice: "Safran",
    price: 82, 
    image: assets.dishImg1,
    isAvailable: true,
    isSpicy: false
  },
  {
    _id: "m2",
    category: "Entrée Chaude",
    name: "Crevettes Volcano",
    description: "Une montée progressive de chaleur équilibrée par la douceur naturelle des crevettes.",
    ingredients: ["Crevettes grillées", "Sauce chili doux", "Ail rôti", "Coriandre fraîche", "Sésame torréfié"],
    mainSpice: "Chili",
    price: 119,
    image: assets.dishImg2,
    isAvailable: true,
    isSpicy: true
  },
  {
    _id: "m3",
    category: "Plat Principal",
    name: "Filet Black Pepper Premium",
    description: "Une viande tendre sublimée par l’intensité aromatique du poivre noir et l’élégance de la truffe.",
    ingredients: ["Filet de bœuf premium", "Sauce poivre noir torréfié", "Purée truffée", "Légumes glacés", "Jus réduit"],
    mainSpice: "Poivre Noir Torréfié",
    price: 127,
    image: assets.dishImg3,
    isAvailable: true,
    isSpicy: false
  },
  {
    _id: "m4",
    category: "Plat Principal",
    name: "Magret Fusion Oriental",
    description: "Une assiette élégante où le fondant du canard rencontre la douceur des épices orientales et la richesse du miel caramélisé.",
    ingredients: ["Magret de canard rôti", "Glaçage miel & épices", "Purée de patate douce", "Figues rôties"],
    mainSpice: "Cannelle & Ras el hanout",
    price: 134,
    image: assets.dishImg4,
    isAvailable: true,
    isSpicy: false
  },
  {
    _id: "m5",
    category: "Plat Principal",
    name: "Mac & Cheese Épicé Gastronomique",
    description: "Un mélange ultra crémeux de fromages premium relevé par un paprika fumé et une chaleur progressive de chipotle.",
    ingredients: ["Macaronis artisanaux", "Cheddar maturé", "Paprika fumé", "Piment chipotle", "Chapelure croustillante"],
    mainSpice: "Paprika Fumé & Chipotle",
    price: 107,
    image: assets.dishImg5,
    isAvailable: true,
    isSpicy: true
  },
  {
    _id: "m6",
    category: "Dessert",
    name: "Choco Inferno",
    description: "Une finale intense où le chocolat rencontre les épices douces et chaleureuses.",
    ingredients: ["Fondant chocolat noir", "Cannelle fumée", "Glace vanille artisanale", "Éclats caramel épicés"],
    mainSpice: "Cannelle Fumée",
    price: 76,
    image: assets.dishImg6,
    isAvailable: true,
    isSpicy: false
  },
  {
    _id: "m7",
    category: "Boissons",
    name: "Red Spice",
    description: "Une boisson rafraîchissante avec une légère chaleur épicée en fin de bouche.",
    ingredients: ["Fruits rouges frais", "Gingembre", "Citron vert", "Eau pétillante"],
    mainSpice: "Gingembre",
    price: 35,
    image: assets.dishImg7,
    isAvailable: true,
    isSpicy: false
  },
  {
    _id: "m8",
    category: "Boissons",
    name: "Spicy Mango Margarita",
    description: "Une réinterprétation moderne et audacieuse de la célèbre Margarita, associant la fraîcheur tropicale de la mangue à la chaleur progressive des épices.",
    ingredients: ["Purée de mangue", "Jus de citron jaune frais", "Tequila", "Triple sec", "Sirop épicé maison"],
    mainSpice: "Sirop Épicé Mexicain",
    price: 36,
    image: assets.dishImg8,
    isAvailable: true,
    isSpicy: true
  },
  {
    _id: "m9",
    category: "Boissons",
    name: "Amaretto Safran Sour",
    description: "Un cocktail sophistiqué mêlant la puissance du whisky à la douceur de l'amaretto, sublimé par un cordial de safran et râpée de muscade fraîche.",
    ingredients: [
      "Whisky", 
      "Amaretto", 
      "Sirop de vanille", 
      "Jus de citron frais", 
      "Muscade fraîche", 
      "Cordial de safran"
    ],
    mainSpice: "Safran & Muscade",
    price: 38,
    image: assets.dishImg9, // N'oubliez pas l'image dans vos assets
    isAvailable: true,
    isSpicy: false
  },
  {
    _id: "m10",
    category: "Boissons",
    name: "Bloody Mary Signature",
    description: "Inspirée des saveurs audacieuses, cette création offre un mélange intense de tomate et d'assaisonnements relevés qui réveille les sens.",
    ingredients: [
      "Vodka premium", 
      "Jus de tomate", 
      "Jus de citron", 
      "Sauce Worcestershire", 
      "Sauce pimentée (Tabasco)", 
      "Sel", 
      "Poivre noir"
    ],
    mainSpice: "Poivre Noir & Piment",
    price: 32,
    image: assets.dishImg10, // N'oubliez pas l'image dans vos assets
    isAvailable: true,
    isSpicy: true // On active le tag épicé pour le Tabasco et le poivre !
  }
]

// Converted Bookings to Table Reservations
export const tableReservationsDummyData = [
    {
        "_id": "res_1",
        "user": userDummyData,
        "dishPreOrders": [menuDummyData[2], menuDummyData[5]], 
        "reservationDate": "2026-06-15",
        "timeSlot": "20:00",
        "guests": 2,
        "tableNumber": 12,
        "status": "confirmed",
        "totalEstimatedPrice": 59,
        "createdAt": "2026-05-25T06:42:01.529Z"
    },
    {
        "_id": "res_2",
        "user": userDummyData,
        "dishPreOrders": [menuDummyData[4]], 
        "reservationDate": "2026-06-16",
        "timeSlot": "12:30",
        "guests": 4,
        "tableNumber": 5,
        "status": "pending",
        "totalEstimatedPrice": 112,
        "createdAt": "2026-05-25T08:15:00.000Z"
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalReservations": 2,
    "expectedRevenue": 171,
    "reservations": tableReservationsDummyData
}