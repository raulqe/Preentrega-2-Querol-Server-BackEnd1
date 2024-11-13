// general imports
import { Router } from "express";
import Products from "../db/productsList.js";


const router = Router();
router.get('/',(req,res)=>{
    res.render("home",{Products});
})
router.get("/homeProducts",(req,res)=>{
    res.render("homeProducts",{Products});
})
router.get("/realtimeproducts",(req,res)=>{
    res.render("websockets");
})


export default router;