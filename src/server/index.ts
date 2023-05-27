import express from 'express'; 
import { createServer } from "http";
import { Server } from "socket.io";

export const app = express();

const httpServer = createServer();
const port = process.env.PORT || 4076

const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

  io.on("connection", (socket) => {
    socket.on('client-message',(data:any)=>{
      socket.broadcast.emit('server-message',data);
    })
  });

httpServer.listen(port, function (){
    console.log('Socket server started at port ' + port);
    
});


app.get('/api/test', (_, res) => 
    res.json({ importMetaEnvBaseUrl: `${port}` }

))