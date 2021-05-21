import {Component} from "react";
import RequestsService from 'RequestsService'

class BookReviews extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.state = {
            bookReviews: [],
            books: {}
        }
    }

    async getBookReviews() {
        let response = await this.requestsService.getAll('bookReviews');
        let bookReviews = [];
        response.map(bkRev => {
            let bookReview = {
                id: bkRev.id,
                book: bkRev.book,
                review: bkRev.review
            };
            bookReviews.push(bookReview);
        })
        this.setState({bookReviews: bookReviews})
    }

    async getBooks() {
        let response = await this.requestsService.getAll('books');
        let books = {};
        response.map(bk => {
            books[bk.id] = bk.name;
        })
        this.setState({books: books})
    }

    componentDidMount() {
        this.getBookReviews();
        this.getBooks();
    }

    render() {
        return (
            <div className="bookReviews">
                {console.log(this.state.bookReviews)}
                <ul>
                    {this.state.bookReviews.map((bookReview, index) =>
                        <div key="index">
                            <h4>{bookReview.id}:</h4>
                            {bookReview.review}
                            <p>{this.state.books[bookReview.book]}</p>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default BookReviews;
