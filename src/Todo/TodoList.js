import React, { Component } from 'react';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            userInput: "",
            items: []
        }
    }

    onChange(event){
        this.setState({userInput: event.target.value});
        // console.log(this.state.userInput);

    }

    addTodo(event){   
        event.preventDefault();
        this.setState({userInput: "", items: [...this.state.items, this.state.userInput]});
        // console.log(this.state);
    }

    deleteTodo(item){
            const array = this.state.items;
            const index = array.indexOf(item);
            array.splice(index, 1);
            this.setState({
                items: array
            })
    }

    renderTodo(){
        return this.state.items.map((item) => {
            return (
                <div key={item} className="mt-6 d-flex flex-wrap">
                    <li className="list-group-item">{item}</li>  
                    <button onClick={this.deleteTodo.bind(this)} className="btn btn-danger">X</button>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h1 align="center" className="title mb-6">My Todo list</h1>
                <form className="input-group">
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        onChange={this.onChange.bind(this)}
                        className="form-control is-large"
                    />
                    <button
                    onClick={this.addTodo.bind(this)}
                    className="button is-large is-warning"
                    >Ajouter</button>
                </form>
                <div className="list-group-horizontal d-flex flex-wrap justify-content-around">
                    {this.renderTodo()}
                </div>
            </div>
        )
    }
}

export default TodoList