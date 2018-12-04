import React, { Component } from 'react';
import '../styles/search.css';
import bg from '../images/search-background.jpg';

function NumberInput(props) {
    return (
        <div className="input-wrapper num-input">
            <label>{props.value.label}</label>
            <input type="number" name={props.name} value={props.value.val} onChange={props.changeHandler} />
        </div>
    );
}

// Search Class
class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="search-section" style={{backgroundImage: 'url('+bg +')'}}>
            <div className="search-container wrapper">
                <form onSubmit={this.props.handlers.handleSubmit}>

                    <div className="input-wrapper checkbox-input transport">
                        <label>Transportation Medium</label>
                        <label>
                            <input type="radio" name="transport" value="airplane"  checked={this.props.transport == 'airplane'} onChange={this.props.handlers.handleCheckbox} />
                            <i className="material-icons">airplanemode_active</i>Airplane
                        </label>
                        <label>
                            <input type="radio" name="transport" value="car" checked={this.props.transport != 'airplane'} onChange={this.props.handlers.handleCheckbox} />
                            <i className="material-icons">directions_car</i>Car
                        </label>
                    </div>

                    <NumberInput name="distance" value={{label: 'Distance in Hours', 'val': this.props.distance }} changeHandler={this.props.handlers.handleChange} />

                    <div className="input-wrapper checkbox-input age">
                        <label>Travelers</label>
                        <label>
                            <input type="radio" name="age" value="family"  checked={this.props.age == 'family'} onChange={this.props.handlers.handleCheckbox} />
                            <span className="box"></span>Family
                        </label>
                        <label>
                            <input type="radio" name="age" value="adults" checked={this.props.age != 'family'} onChange={this.props.handlers.handleCheckbox} />
                            <span className="box"></span>Adults
                        </label>
                    </div>

                    <input type="submit" value="Search" className="button" />
                </form>
            </div>
          </div>
        );
    }
}

export default SearchForm;