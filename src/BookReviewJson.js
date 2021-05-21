import {Component} from "react";
import RequestsService from 'RequestsService'

class BookReviewJson extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.sendJson = this.sendJson.bind(this);
        this.state = {
            'review': '',
            'book': ''
        }
    }

    sendJson() {
        const data = {
            'review': this.state.review,
            'book': this.state.book
        };
        return this.requestsService.add('bookReviews', JSON.stringify(data));
    }

    render() {
        return (
            <div id="bookReview">
                <input id="review" name="review" type="text"/>
                <input id="book" name="book" type="number"/>
                <button onClick={this.sendJson}>Add book review</button>
            </div>
        );
    }
}

export default BookReviewJson;
