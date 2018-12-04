import React from 'react';
import TextTruncate from 'react-text-truncate';
import '../styles/card.css';

class Card extends React.Component {
    render() {
        var trip = this.props.value;
        var age = '';
        if(parseInt(trip.family)  && parseInt(trip.adults)){
            age = 'family, adults';
            console.log(trip.name);
        } else if (trip.family == true) {
            age = 'family';
        } else if (trip.adults == true) {
            age = 'adults';
        }

        var attr = [];
        if(trip.kosher > 0){
            attr.push(<span key="kosher"><i className="material-icons">fastfood</i> Kosher Food</span>);
        }
        if(trip.minyan > 0){
            attr.push(<span key="minyan"><i className="material-icons">people</i> Minyan</span>);
        }

        return (
            <div className="card">
                <div className="image-wrapper">
                    <img src={trip.image} alt={trip.name} />
                </div>
                <div className="text-wrapper">
                    <a href="https://google.com"><h3>{trip.name}</h3></a>
                    <h5>{trip.distance} hr {trip.transport === 'car' ? 'drive' : 'flight'} | {age}</h5>
                    <div className="description">
                        <TextTruncate
                            line={3}
                            truncateText="…"
                            text={trip.description}
                        />
                    </div>
                    <p className="attr">{attr}</p>
                </div>
            </div>
        );
    }
}

export default Card;