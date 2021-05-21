import {Component} from "react";
import RequestsService from 'RequestsService'

class Books extends Component {

    constructor() {
        super();
        this.requestsService = new RequestsService()
        this.state = {
            books: [],
            categories: {}
        }
    }

    async getBooks() {
        let response = await this.requestsService.getAll('books');
        let books = [];
        response.map(bk => {
            let book = {
                id: bk.id,
                name: bk.name,
                description: bk.description,
                category: bk.category
            };
            books.push(book);
        })
        this.setState({books: books})
    }

    async getCategories() {
        let response = await this.requestsService.getAll('categories');
        let categories = {};
        response.map(cat => {
            categories[cat.id] = cat.name;
        })
        this.setState({categories: categories})
    }

    componentDidMount() {
        this.getBooks();
        this.getCategories();
    }

    render() {
        return (
            <div className="books">
                {console.log(this.state.books)}
                <ul>
                    {this.state.books.map((book, index) =>
                        <div key="index">
                            <h4>{book.id}: {book.name}</h4>
                            {book.description}
                            <p>{this.state.categories[book.category]}</p>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Books;
