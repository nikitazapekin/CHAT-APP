



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
           case 'publicMessage':
                  handlePublicMessage(message);
                  break;
        }
    });

    ws.on('close', () => {
        
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
function handlePublicMessage(message) {
  const { title, participants, id, event } = message;
console.log("PUBLIC" +title, participants, id, event)


for(let i=0; i< participants.length; i++){

  if (clients.has(participants[i])) {
   
    const targetClient = clients.get(participants[i]);
    
   targetClient.send(JSON.stringify({
      event: 'publicMessage',
participants: participants,
title: title,
    })); 
  }
//    }
} 




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
}
 
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
          too: to
        })); 
  //    }
    } 
}

function broadcastUserList() {
    const userList = Array.from(clients.keys());
    const userListMessage = JSON.stringify({
        event: 'userList',
        userList: userList,
    });

    
    clients.forEach(client => {
      console.log("CLIENT:"+ JSON.stringify(client.message), "message:"+userListMessage)
    console.log("USERS" +userList)
       client.send(userListMessage);
   //    client.send(userList)
    });
}
