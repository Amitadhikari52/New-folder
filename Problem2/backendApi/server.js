const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors({
    // origin:'http://localhost:5173'
    origin:'*'
}));

const randomNames = [
    "john smith", "akshay kumar", "aamir khan", "allu arjun", "luke den", "jack mon", "key lun"
]


const getRandomUser = () => {
    const randomId = Math.floor(Math.random() * randomNames.length);
    return{
        name: randomNames[randomId],
    };
};


app.get('/api/user/random', (req, res) => {
    const randomUser = getRandomUser();
    res.json(randomUser);
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})