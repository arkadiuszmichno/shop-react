import {Component} from "react";
import RequestsService from 'RequestsService'

class BookJson extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.sendJson = this.sendJson.bind(this);
        this.state = {
            'name': '',
            'description': ''
        }
    }

    sendJson() {
        const data = {
            'title': this.state.title,
            'description': this.state.description
        };
        return this.requestsService.add('books', JSON.stringify(data));
    }

    render() {
        return (
            <div id="book">
                <input id="name" name="name" type="text"/>
                <input id="description" name="description" type="text"/>
                <button onClick={this.sendJson}>Add book</button>
            </div>
        );
    }
}

export default BookJson;
