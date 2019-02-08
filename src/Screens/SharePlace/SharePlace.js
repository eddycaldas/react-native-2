import React, { Component } from 'react';

import { Text, View } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName)
    }

    render () {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

const mapDispatchToProps = Dispatch => {
    return {
        onAddPlace: (placeName) => Dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);

