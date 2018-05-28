const app = require('./server/server');
const colors = require('colors');

app.listen(3000, () => {
    console.log(`Listening on port 3000`.green);
});
