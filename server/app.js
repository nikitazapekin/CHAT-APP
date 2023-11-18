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
    const { to, text } = message;
    const from = message.username;

    if (clients.has(to)) {
        const targetClient = clients.get(to);
        targetClient.send(JSON.stringify({
            event: 'privateMessage',
            from,
            text,
        }));
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
        client.send(userListMessage);
    });
}
/*
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const mysql = require("mysql")
const app = express();



app.use(express.json());
const db= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
})
// Routes
app.use('/api/auth', require('./routes/auth.routes'));
//app.use('/api/link', require('./routes/link.routes'))
const PORT = config.get('PORT') || 5000;

async function start() {

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }

start();

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}); */