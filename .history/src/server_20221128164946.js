import express from 'express';

const app = express();

console.log(__dirname);
app.set('view engine', "pug");
app.set('views', __dirname + "/src/views");

app.listen(3000, () => {
    console.log("Server started on port 3000");
});