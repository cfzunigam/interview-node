const express = require('express');
const productRoutes = require('./src/routes/productRoutes');

const app = express();

app.use('/api', productRoutes);

module.exports = app;

// app.use(router);

// app.listen(port, () => {
//     console.log(`Api listen in http://localhost:${port}`);
// });