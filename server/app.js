const path = require('path');
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/chickens', (req, res) => {
   res.sendFile(path.join(__dirname, 'data', 'chickens.json'));
});

app.listen(port, () => {
   console.log(`[farm] API listening on port ${port}`)
})