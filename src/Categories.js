import {Component} from "react";
import RequestsService from 'RequestsService'

class Categories extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.state = {
            categories: []
        }
    }

    async getCategories() {
        let response = await this.requestsService.getAll('categories');
        let categories = [];
        response.map(cat => {
            let category = {
                id: cat.id,
                name: cat.name
            };
            categories.push(category);
        })
        this.setState({categories: categories})
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        return (
            <div className="categories">
                {console.log(this.state.categories)}
                <ul>
                    {this.state.categories.map((category, index) =>
                        <div key="index">
                            <h4>{category.id}: {category.name}</h4>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Categories;
