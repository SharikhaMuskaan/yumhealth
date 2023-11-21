const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(
	'mongodb+srv://sharikhamuskaan3375:c4b67ueva7@cluster0.j5rul2v.mongodb.net/?w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/login', async (req, res) => {
	const { username, password } = req.body;

	const user = await User.findOne({ username });

	if (!user || user.password !== password) {
		res.status(401).json({ error: 'Invalid credentials' });
	} else {
		res.json({ message: 'Login successful' });
	}
});

// Start the server
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
