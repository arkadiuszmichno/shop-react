import {Component} from "react";
import RequestsService from 'RequestsService'

class UserJson extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.sendJson = this.sendJson.bind(this);
        this.state = {
            'firstName': '',
            'lastName': '',
            'login': '',
            'gender': ''
        }
    }

    sendJson() {
        const data = {
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'login': this.state.login,
            'gender': this.state.gender
        };
        return this.requestsService.add('users', JSON.stringify(data));
    }

    render() {
        return (
            <div id="user">
                <input id="firstName" name="firstName" type="text"/>
                <input id="lastName" name="lastName" type="text"/>
                <input id="login" name="login" type="text"/>
                <input id="gender" name="gender" type="text"/>
                <button onClick={this.sendJson}>Add user</button>
            </div>
        );
    }
}

export default UserJson;
