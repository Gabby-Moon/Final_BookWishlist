document.getElementById("book-form").onsubmit = submitBook;

function submitBook() {
    const itValid = true;

    const bookTitle = document.getElementById('bookTitle').trim();
    if(bookTitle === '') {
        document.getElementById('err-title').style.display = 'block';
        isValid = false;
    }
    const comments = document.getElementById('comments').trim();
    if(comments === ''){
        document.getElementById('err-comment').style.display = 'block';
        isValid = false;
    };
    const rating = document.getElementById('rating').trim();
    if(rating === '' || rating != '//d') {
        document.getElementById('err-rating').style.display = 'block';
        isValid = false;
    };

    return isValid;
};

function clearErrors() {
    const errors = document.getElementsByClassName('err');
    for (let i = 0; i< errors.length; i++) {
        errors.style.display = 'none';
    };
};