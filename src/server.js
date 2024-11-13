import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import vewsRouter from "./routs/view.routers.js";
import { Server } from "socket.io";
import { log } from "console";

const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(path.join(process.cwd(),"src","public")));

    app.engine('handlebars',handlebars.engine());
    app.set('views', path.join(process.cwd(),"src","views"));
    app.set('view engine','handlebars');

    app.use('/',vewsRouter);
    // app.use('/products', productRouter);
    // app.use('/carts',cartsRouter);

const httpServer= app.listen(8080,()=>console.log('server okey express, port 8080'));
const socketServer= new Server(httpServer);
const arrayProducts=[]
socketServer.on("connection",(socket)=>{console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect",()=>{console.log(`User ${socket.id} disconnect sesion`);});
    socketServer.emit("arrayProducts",arrayProducts);

    socket.on("newProduct",(prod)=>{console.log(prod);
        arrayProducts.push(prod);
        console.log(arrayProducts);
        socketServer.emit("arrayProducts",arrayProducts);
    });
});
