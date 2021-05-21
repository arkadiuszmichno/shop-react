import {Component} from "react";


class BooksForm extends Component {

    constructor() {
        super();
        this.postRequest = this.postRequest.bind(this);
    }

    postRequest() {
        const url = 'http://localhost:9000/books';
        const data = new FormData(event.target)
        fetch(url, {
            method: 'POST',
            body: data
        });
    }

    render() {
        return (
            <form onSubmit={this.postRequest}>
                <input id="name" name="name" type="text"/>
                <input id="description" name="description" type="text"/>
                <select>

                </select>
                <button>Add book</button>
            </form>
        )
    }
}

export default BooksForm;
