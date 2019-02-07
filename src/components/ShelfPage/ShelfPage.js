import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfForm from './ShelfForm';

class ShelfPage extends Component {

    render() {
        return (
            <div>
                <h1>shelf</h1>
                <ShelfForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(ShelfPage);


