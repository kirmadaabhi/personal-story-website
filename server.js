const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Server port

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Node.js server.');
});

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Route for handling POST requests to submit a story
app.post('/submit-story', (req, res) => {
    // Process the submitted story data
    // Save the story data to the database
    // Send a response back to the client
    res.send('Story submitted successfully!');
});

const Story = require('./models/story');

// Route for handling POST requests to submit a story
app.post('/submit-story', (req, res) => {
  const { title, content, author } = req.body;

  // Create a new story object
  const newStory = new Story({
    title,
    content,
    author
  });

  // Save the story to the database
  newStory.save()
    .then(() => {
      res.send('Story submitted successfully!');
    })
    .catch((err) => {
      console.error('Error submitting story:', err);
      res.status(500).send('Error submitting story');
    });
});

// Route for handling GET requests to fetch all stories from MongoDB
app.get('/stories', (req, res) => {
  // Fetch all stories from the MongoDB database
  Story.find()
    .then((stories) => {
      res.json(stories);
    })
    .catch((err) => {
      console.error('Error fetching stories from MongoDB:', err);
      res.status(500).send('Error fetching stories');
    });
});

// Route for handling GET requests to fetch all stories from MySQL
app.get('/stories', (req, res) => {
  // Fetch all stories from the MySQL database
  connection.query('SELECT * FROM stories', (err, rows) => {
    if (err) {
      console.error('Error fetching stories from MySQL database:', err);
      res.status(500).send('Error fetching stories');
      return;
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

        