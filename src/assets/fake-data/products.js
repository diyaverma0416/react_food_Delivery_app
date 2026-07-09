// all images imported from images directory
import aloo_payaz_parantha_image_01 from "../images/aloo_payaz_parantha_image_01.jpeg";
import paneer_paratha_image_01 from "../images/paneer_parantha_image_01.jpeg";
import aloo_paratha from "../images/aloo_paratha.jpg";

import chole_bhature from "../images/chole_bhature.jpeg";
import poha from "../images/poha.jpeg";
import paneer_butter_masala from "../images/paneer_butter_masala.jpeg";

import idli_sambar from "../images/idli_sambar.jpeg";
import masala_dosa from "../images/masala_dosa.jpeg";
import dal_makhni from "../images/dal_makhni.jpeg";

import butter_naan from "../images/butter_naan.jpeg";
import puri_sabzi from "../images/puri_sabzi.jpeg";
import rajma from "../images/rajma.jpeg";



const products = [
  {
    id: "01",
    title: "Aloo Pyaz Paratha",
    price: 95.0,
    image01: aloo_payaz_parantha_image_01,

    category: "Paratha",

    desc: "A classic stuffed paratha made with spiced potato and onion mixture, served with pickle and curd.",
  },
  {
    id: "02",
    title: "Paneer Paratha",
    price: 125.0,
    image01: paneer_paratha_image_01,
    
    category: "Paratha",

    desc: "Delicious paratha stuffed with seasoned cottage cheese, perfect for a hearty meal.",
  },
  {
    id: "03",
    title: "Chole Bhature",
    price: 150.0,
    image01: chole_bhature,
    
    category: "Main Course",

    desc: "A traditional North Indian dish featuring spicy chickpeas served with fluffy fried bread.",
  },
  {
    id: "04",
    title: "Paneer Butter Masala",
    price: 210.0,
    image01: paneer_butter_masala,
  
    category: "Main Course",

    desc: "A rich and creamy curry made with paneer (cottage cheese) in a tomato-based sauce.",
  },
  {
    id: "05",
    title: "Idli Sambar",
    price: 80.0,
    image01: idli_sambar,
    
    category: "Breakfast",

    desc: "A South Indian favorite: steamed rice cakes served with flavorful lentil curry and coconut chutney.",
  },
  {
    id: "06",
    title: "Masala Dosa",
    price: 90.0,
    image01: masala_dosa,
    
    category: "Breakfast",

    desc: "Crispy rice crepe filled with a spiced potato mixture, served with chutneys and sambar.",
  },
  {
    id: "07",
    title: "Dal Makhani",
    price: 180.0,
    image01: dal_makhni,
    
    category: "Main Course",

    desc: "A rich lentil curry cooked with butter and cream, best enjoyed with naan or rice.",
  },
  {
    id: "08",
    title: "Aloo Paratha",
    price: 90.0,
    image01: aloo_paratha,
    
    category: "Paratha",

    desc: "A classic North Indian breakfast dish of paratha stuffed with spiced mashed potatoes.",
  },
  {
    id: "09",
    title: "Poha",
    price: 50.0,
    image01: poha,
  
    category: "Breakfast",

    desc: "A light and healthy flattened rice dish cooked with onions, mustard seeds, and garnished with peanuts.",
  },
  {
    id: "10",
    title: "Butter Naan",
    price: 40.0,
    image01: butter_naan,
    
    category: "Main Course",

    desc: "Soft and fluffy Indian flatbread brushed with butter, perfect for pairing with curries.",
  },
  {
    id: "11",
    title: "Puri Sabzi",
    price: 70.0,
    image01: puri_sabzi,
   
    category: "Breakfast",

    desc: "Deep-fried bread served with a spicy and flavorful potato curry.",
  },
  {
    id: "12",
    title: "Rajma Chawal",
    price: 120.0,
    image01: rajma,
    
    category: "Main Course",

    desc: "A hearty dish of red kidney beans cooked in a spicy curry, served with steamed rice.",
  },
];

export default products;
