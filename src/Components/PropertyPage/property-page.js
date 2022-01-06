import React from 'react';

class PropertyPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {title} = this.props;
        return (
            <h1>{title}</h1>
        )
    }
}

export default PropertyPage