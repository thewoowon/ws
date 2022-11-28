import express from 'express';

const app = express();

console.log("Hello World");

app.listen(3000, () => {
    console.log("Server started on port 3000");
});