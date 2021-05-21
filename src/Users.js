import {Component} from "react";
import RequestsService from 'RequestsService'

class Users extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.state = {
            users: []
        }
    }

    async getUsers() {
        let response = await this.requestsService.getAll('users');
        let users = [];
        response.map(usr => {
            let user = {
                id: usr.id,
                firstName: usr.firstName,
                lastName: usr.lastName,
                login: usr.login,
                gender: usr.gender
            };
            users.push(user);
        })
        this.setState({users: users})
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <div className="users">
                {console.log(this.state.users)}
                <ul>
                    {this.state.users.map((user, index) =>
                        <div key="index">
                            <h4>{user.id}: {user.firstName} {user.lastName}</h4>
                            {user.login}
                            {user.gender}
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Users;
