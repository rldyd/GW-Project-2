const express  = require('express');
const app = express();

app.get()
app.post()
app.put()
app.delete()

app.get('/', (req, res) => {
    res.send('hello');
})

const PORT = process.env.PORT || 3001;
app.listen(3001, () => console.log(`listening to port ${PORT}`));