import React, { Component } from 'react';

import axios from 'axios';
import '../App.css';
export default class Api extends Component {
 
    constructor() {
       
        super();
        this.state = {
            name: String,
            text: String,
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }
    componentDidMount() {
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            .then(res => {
                const data = res;
                this.setState({ text: data['data']['data'][0]['quoteText'], name : data['data']['data'][0]['quoteAuthor'] });
                console.log(data['data']['data'][0]['quoteText']);
             /*   console.log(data['data'][0]['quoteAuthor']);*/
                console.log(data['data']['data'][0]['quoteAuthor']);

            }).catch((error) => {
                console.log(error.config + " msg :" + error.message);
            });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    Sumbit = (e) => {
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            .then(res => {
                const data = res;
                this.setState({ text: data['data']['data'][0]['quoteText'], name: data['data']['data'][0]['quoteAuthor'] });
                console.log(data['data']['data'][0]['quoteText']);
                /*   console.log(data['data'][0]['quoteAuthor']);*/
                console.log(data['data']['data'][0]['quoteAuthor']);

            }).catch((error) => {
                console.log(error.config + " msg :" + error.message);
            });
    };
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="title">
                        <div className="center">
                            {<p>{this.state.text}</p>}
                            {<h3 className="txtlft">{this.state.name}</h3>}
                            <button onClick={this.Sumbit} className='btnx' > New Quete </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
