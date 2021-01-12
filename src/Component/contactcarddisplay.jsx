import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Contactcarddisplay extends Component{
    render()
    {
        return(
            <div className = "Container">
                
                    <p>
                        Name: {this.props.name}
                    </p>
                    <p>
                        Mobile Number: {this.props.mn}
                    </p>
                    <p>
                        Work Phone: {this.props.wp}
                    </p>
                    <p>
                        Email: {this.props.email}
                    </p>
                
            </div>
        );
    }
}

Contactcarddisplay.propTypes = {
    name: PropTypes.string.isRequired,
    mn: PropTypes.number.isRequired,
    wp: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired

}