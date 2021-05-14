const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get('/calculator/multiply',  (req, res) => {
    const values = Object.values(req.query).flat().reduce((acc, val) => (acc) * (val))
    res.send(` ${values}`)
});
app.get('/calculator/add',  (req, res) => {
    const values = Object.values(req.query).flat().reduce((acc, val) => ((acc)*1 + (val)*1))
    res.send(` ${values}`)
});
app.get('/calculator/substract',  (req, res) => {
    const values = Object.values(req.query).flat().reduce((acc, val) => 1*(acc - (val)))
    res.send(` ${values}`)
});
app.get('/calculator/divide',  (req, res) => {
    const values = Object.values(req.query).flat().reduce((acc, val) => 1*((acc) / (val)))
    res.send(` ${values}`)
});
app.post('/calculator/add', (req, res) =>{
    const values = Object.values(req.query).flat().reduce((acc, val) =>((acc)*1 + (val)*1))
    res.send(` ${values}`)
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
