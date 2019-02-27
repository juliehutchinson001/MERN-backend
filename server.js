const app = require('./app');
const { connectMongoose } = require('./db/mongoose');

connectMongoose();
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));
