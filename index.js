const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.json({
		message: `ok`,
		status: 200
	});
});

app.listen(PORT, () => console.log(`Its up and running on localhost:${PORT}`));