const express  = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3001;
app.listen(3001, () => console.log(`listening to port ${PORT}`));

app.get('/', (req, res) => {
    res.send('hello');
})







// app.get()
// app.post()
// app.put()
// app.delete()
