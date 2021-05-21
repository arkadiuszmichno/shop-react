import {Component} from "react";
import RequestsService from 'RequestsService'

class CategoryJson extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.sendJson = this.sendJson.bind(this);
        this.state = {
            'name': ''
        }
    }

    sendJson() {
        const data = {
            'title': this.state.title
        };
        return this.requestsService.add('categories', JSON.stringify(data));
    }

    render() {
        return (
            <div id="category">
                <input id="name" name="name" type="text"/>
                <button onClick={this.sendJson}>Add category</button>
            </div>
        );
    }
}

export default CategoryJson;
