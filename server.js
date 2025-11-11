const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  console.log('Here');
  res.render('index', { user: "George!" });
});

app.listen(3030, () => {
  console.log('Server running on http://localhost:3030');
});

