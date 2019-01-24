import React, {Component} from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {

    state = {
        placeName: ""
      };

      placeNameChangedHandler = (val) => {
          this.setState({
              placeName: val
          })
      }

      placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
          return;
        }
        this.props.onPlaceAdded(this.state.placeName)
      }

    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                value={this.state.placeName}
                onChangeText={this.placeNameChangedHandler}
                placeholder="Give it a try"
                style={styles.placeInput}
                />
                <Button 
                style={styles.placeButton}
                title="Add me"
                onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
      },
      placeInput: {
        width: '70%',
        alignContent: "center"
      },
      placeButton: {
        width: '30%'
      }
})