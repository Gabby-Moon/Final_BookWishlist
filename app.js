import express from 'express'
import { title } from 'process';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000;
const books = [];

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/summary', (req, res) => {
    const book = {
        title: req.body.bookTitle,
        comments: req.body.comments,
        rating: req.body.rating
    };
    books.push(book);

    res.render('summary', { books });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});