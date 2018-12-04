import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import Search from './Search';

class Suggestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {trips: [], list: []}
    }
    componentDidMount() {
        fetch('http://localhost:8888/trip-planner/api.php?action=featured')
        .then(results => {
            return results.json();
        }).then(data => {
            let trips = data.data.map((trip, i) => {
                return (
                    <Card value={trip} key={i} />
                )
            });
            this.setState({trips: trips});
        });
    }
    render() {
        return (
            <div className="home-wrapper">
                <Search value={this.props.search.data} handlers={this.props.search.handlers} />
                <div className="card-wrapper wrapper">
                    {this.state.trips}
                </div>
            </div>
        );
    }
}

export default Suggestions;