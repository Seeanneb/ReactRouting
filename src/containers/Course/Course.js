import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    componentDidMount(){
        this.parseQueryParams()
    }
    componentDidUpdate(){
        this.parseQueryParams()
    }
    parseQueryParams(){
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search)
        for (let param of query.entries()){
            if (this.state.courseTitle !== param[1]){
            this.setState({courseTitle: param[1]})}
        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>{this.props.match.params.ideeznuts}</p>
            </div>
        );
    }
}

export default Course;