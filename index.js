const express = require('express');

const firstAnnexe = require('./routes/firstAnnexe.routes');
const secondAnnexe = require('./routes/secondAnnexe.routes');

const app = express();
const dotenv = require('dotenv');

dotenv.config({ 'path': './config/.env' });

const PORT = process.env.PORT || 4242;

app.use('/api/p1', firstAnnexe);
app.use('/api/p2', secondAnnexe);

app.listen(PORT, () => console.log(`Its up and running on localhost:${PORT}`));