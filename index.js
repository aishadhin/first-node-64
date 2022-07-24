const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello world')
})

const arr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6, name:'aishadhin' },
    { id: 7, name:'aishdhin' },
    { id: 8, name:'aishahin' },
]

app.get('/users', (req, res) => {
    console.log(req.query)
    if (req.query.name) {
        const search = req.query.name;
        const matched = arr.filter(user => user?.name?.includes(search));
        res.send(matched);
    } else {
        res.send(arr)
    }

})


app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = arr.find(user => user.id === id);
    res.send(user)
})

app.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = arr.length + 1;
    arr.push(user);
    console.log(arr.length);
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})