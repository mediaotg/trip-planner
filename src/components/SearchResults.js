import React from 'react';
import data from '../data/data.json';
import Card from './Card';
import Search from './Search';
import MapContainer from './MapContainer';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {trips: [], location: { userLat: 32, userLng: 32}, loading: true, searching: false, test: 'test', tripDatat: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    search() {
        this.setState({searching: true});
        navigator.geolocation.getCurrentPosition(
            position => {

                this.setState({
                    location: {
                        userLat: position.coords.latitude, 
                        userLng: position.coords.longitude,
                        loading: false                        
                    }
                });

                var search = this.props.search.data;
                var url = 'http://estyrosenberg.com/trip-planner/api.php?action=search&transport='+search.transport+'&age='+search.age+'&lat='+position.coords.latitude+'&lng='+position.coords.longitude+'&distance='+search.distance;
                fetch(url)
                .then(results => {
                    return results.json();
                }).then(data => {
                    console.log(data);
                    if(data.status_message == 'Trips Found'){
                        let trips = data.data.map((trip, i) => {
                            return (
                                <Card value={trip} key={i} />
                            )
                        });
                        this.setState({trips: trips});
                        this.setState({tripData: data.data});
                    } else {
                        console.log('no responses');
                        this.setState({trips: []});
                    }
                    this.setState({searching: false});
                });
                console.log(this.state.userLocation);
            },
            () => {
                this.setState ({ loading: false })
            }
        )
    }
    getData() {
    }
    componentDidMount() {
        this.search();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.search();
    }

    render() {
        const handlers = {
            handleChange: this.props.search.handlers.handleChange,
            handleCheckbox: this.props.search.handlers.handleCheckbox,
            handleSubmit: this.handleSubmit
        };  
        return (
            <div className="search-wrapper">
                <Search value={this.props.search.data} handlers={handlers} searching={this.state.searching} />
                <div className="card-wrapper wrapper">
                    {this.state.trips}
                </div>
                <div className="map-wrapper">
                    <MapContainer centerLat={this.state.location.userLat} centerLng={this.state.location.userLng} trips={this.state.tripData} />
                </div>
            </div>
        );
    }
}

export default SearchResults;