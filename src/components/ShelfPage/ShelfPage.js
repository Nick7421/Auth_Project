import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfPage extends Component {

    render() {
        return (
            <div>
                <h1>shelf</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(ShelfPage);


