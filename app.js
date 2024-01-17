const express = require('express');

const app = express();

app.get('', (req, res, next) => {
    res.json({ mag: "suraj server is started!" })
});

app.listen(8080, ()=>{
    console.log('Server is running on 3000!');
});