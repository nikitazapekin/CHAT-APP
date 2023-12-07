/*
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
//app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/auth.routes'))
//app.use('/api/link', require('./routes/link.routes'))




const PORT = config.get('PORT') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
     useUnifiedTopology: true,
    });
  
    
app.post('http://localhost:3000/api/link/generate', (req, res)=> { 
console.log("GETTT")
res.json("GETTTt")
})
app.post('/test', (req, res) => {
  // Handle the POST request to '/test'
  console.log("POST request received:", req.body);
  // Process the data received from the client
  // Send back a response as needed
  res.send('Data received successfully');
});

    app.listen(PORT, () => {
      console.log(`Server started on porrt ${PORT}`);
    });
  } catch (err) {
    console.error('Server error: ' + err.message);
    process.exit(1);
  }
}

start();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//yarn server

// CATALOGUEOFPURCHASES > DATABASES 

*/



//npm i express mongoose 
// npm i -D  nodemon concurrently
//console.log(1)
//npm i config

/*
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const mysql = requir("mysql")
const app = express();


app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
//app.use('/api/link', require('./routes/link.routes'))
const PORT = config.get('PORT') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //  useCreateIndex: true,
    });

app.post('http://localhost:3000/api/link/generate', (req, res)=> { 
  //  });
console.log("GETTT")
res.json("GETTT")
})
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Server error: ' + err.message);
    process.exit(1);
  }
}

start();

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}); */




const ws = require('ws');

const wss = new ws.Server({
    port: 5000,
}, () => console.log(`Server started on 5000`))

// Store connected clients
const clients = new Map();

wss.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'connection':
                handleConnection(message, ws);
                break;
            case 'privateMessage':
                handlePrivateMessage(message);
                break;
        }
    });

    ws.on('close', () => {
        // Remove the client from the clients map
        clients.delete(ws.username);
        broadcastUserList();
    });
});

function handleConnection(message, ws) {
    const { username } = message;
    ws.username = username;
    clients.set(username, ws);

    broadcastUserList();
}

function handlePrivateMessage(message) {
    const { to, text, username } = message;
    const from = message.username;
    console.log("USERR"+username)
   // console.log("reci[ieent"+ recipient)
    console.log("message "+text)

console.log("from "+from +": text "+text+": recipient"+to )
console.log("clients" +JSON.stringify(clients))
for (const [clientId, clientSocket] of clients) {
  console.log(`Client ID: ${clientId}`);
  // Perform actions with clientSocket if needed
}
/*if (clients.has("test")) {
  const targetClient = clients.get("test");
  targetClient.send(JSON.stringify({
      event: 'privateMessage',
      from,
      text,
  }));
} */
    if (clients.has(to)) {
      console.log("user is found:"+to)
        const targetClient = clients.get(to);
        console.log("TARGET CLIENT"+targetClient)
console.log("FUNCTION TO SEND from"+from)
console.log("username"+ username)
 //     if(from==username ){

       targetClient.send(JSON.stringify({
          event: 'privateMessage',
          from,
          text,
        })); 
  //    }
    } 
}

function broadcastUserList() {
    const userList = Array.from(clients.keys());
    const userListMessage = JSON.stringify({
        event: 'userList',
        userList,
    });

    // Broadcast the updated user list to all connected clients
    clients.forEach(client => {
      console.log("CLIENT:"+ JSON.stringify(client.message), "message:"+userListMessage)
        client.send(userListMessage);
    });
}
