import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';



export default class App extends React.Component {
  state = {
    mapIsVisible: true,
  }

  changeMapState() {
    this.setState({
      mapIsVisible: !this.state.mapIsVisible
    })
  }

  getInitialState() {
    return {
      region: new MapView.AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    };
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  //const styles = StyleSheet.create({
    //map: {
      //...StyleSheet.absoluteFillObject,
    //},
  //});

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            <Text>Rate my Shul</Text>
            <Text onPress={this.changeMapState.bind(this)}>📍</Text>
          </Text>
          <MapView.Animated
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          />
          <MapView isVisible={this.state.mapIsVisible}
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#FFC0CB',
    height: '20%',
    padding: '10%'
  }
});
