document.getElementById("book-form").onsubmit = function submitBook() {
    const isValid = true;

    const bookTitle = document.getElementById('bookTitle');
    //bookTitle = bookTitle.trim();
    if(bookTitle === '') {
        document.getElementById('err-title').style.display = 'block';
        isValid = false;
    }
    const comments = document.getElementById('comments');
    //comments = comments.trim();
    if(comments === ''){
        document.getElementById('err-comment').style.display = 'block';
        isValid = false;
    };
    const rating = document.getElementById('rating');
    //rating = rating.trim();
    if(rating === '') {
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