const reviewForm = document.querySelector('#reviewForm');
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const review = document.querySelector('#review');
const display = document.querySelector('#display pre');
const retrieveBtn = document.querySelector('#retrieveBtn');
const reviewsTable = document.querySelector('#reviewsTable');

const movieReviews = [];

reviewForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

        const movieReview = {
            id: Date.now(),
            title: title.value,
            year: year.value,
            review: review.value
        }

        movieReviews.push(movieReview);
        reviewForm.reset();
        console.table(movieReviews);
        const reviewsJSON = JSON.stringify(movieReviews, null, 2);
        display.innerText = "\n" + reviewsJSON;

        localStorage.setItem("Movie Reviews", reviewsJSON);
    }
)

retrieveBtn.addEventListener(
    'click',
    () => {
        const reviews = JSON.parse(localStorage.getItem("Movie Reviews"));

        for (let review of reviews) {
            // create / insert a new table row
            const newtr = document.createElement('tr');
            reviewsTable.appendChild(newtr);
            // create / insert cells inside new table row
            const td1st = document.createElement('td');
            const td2nd = document.createElement('td');
            const td3rd = document.createElement('td');
            const td4th = document.createElement('td');
            newtr.appendChild(td1st);
            newtr.appendChild(td2nd);
            newtr.appendChild(td3rd);
            newtr.appendChild(td4th);
            // insert values to the table cells
            td1st.innerText = review.id;
            td2nd.innerText = review.title;
            td3rd.innerText = review.year;
            td4th.innerText = review.review;
        }
    }
);