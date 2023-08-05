// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

// Importa il modulo Express per creare un server web.
import express from "express";

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Definisce la gestione della richiesta GET all'URL di root ('/').
app.get("/", (req, res) => {
  // Risponde alla richiesta con un messaggio HTML contenente un titolo "Home Page".
  res.send("<h1>Home Page</h1>");
});

// Definisce la gestione della richiesta POST all'URL '/register'.
app.post("/register", (req, res) => {
  // Questa è una richiesta POST per l'URL '/register'.
  // Qui dovresti fare qualcosa con i dati ricevuti nella richiesta (req.body).
  // In questo caso, viene inviato uno stato di successo (201) come risposta.
  res.sendStatus(201);
});

// Definisce la gestione della richiesta PUT all'URL '/user/angela'.
app.put("/user/federico", (req, res) => {
  // Questa è una richiesta PUT per l'URL '/user/angela'.
  // In questo caso, viene inviato uno stato di successo (200) come risposta.
  res.sendStatus(200);
});

// Definisce la gestione della richiesta PATCH all'URL '/user/angela'.
app.patch("/user/federico", (req, res) => {
  // Questa è una richiesta PATCH per l'URL '/user/angela'.
  // In questo caso, viene inviato uno stato di successo (200) come risposta.
  res.sendStatus(200);
});

// Definisce la gestione della richiesta DELETE all'URL '/user/angela'.
app.delete("/user/federico", (req, res) => {
  // Questa è una richiesta DELETE per l'URL '/user/angela'.
  // Qui dovresti gestire l'eliminazione degli utenti di nome "angela".
  // In questo caso, viene inviato uno stato di successo (200) come risposta.
  res.sendStatus(200);
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/*
In sintesi, questo codice crea un server web utilizzando Express e definisce diverse rotte per gestire richieste HTTP di tipo GET, POST, PUT, PATCH e DELETE. 
Ogni rotta ha una funzione di gestione che restituisce uno stato HTTP appropriato come risposta. 
La gestione delle richieste POST e DELETE contiene commenti indicativi su come gestire i dati ricevuti nella richiesta e come gestire l'eliminazione degli utenti di nome "federico", rispettivamente.
*/


/*
import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
*/
