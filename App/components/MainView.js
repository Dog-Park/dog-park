import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { TopBar } from './TopBar.js';
import { Constants } from './Constants';
import MapView from 'react-native-maps';
import { NavigationBar, _onHome, _onNavigate, _onSettings } from './NavigationBar.js';

export class MainView extends React.Component {
  handleScroll() {
    alert("scrolled");
  }

  render() {
    return (
      <View style={styles.talkBubbleSquare} >
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: screenWidth, y: 0}}
          onMomentumScrollEnd={this.handleScroll} >

          <View style={styles.contentHome}>
            <Text style={styles.titleText}>Home</Text>
            <Text> </Text>
            <Text style={styles.bodyText}>DogPark is a mobile parking solution, designed to help reduce the time it takes to find an open parking spot and alleviate search traffic in general on university campuses. By using an infrared sensor network that’s mounted to the surface of the parking lots themselves, DogPark provides a constant influx of real-time occupancy information and allows app users to be easily directed to the open spots closest to them, getting them where they need to be on time.</Text>
            <Text> </Text>
            <Text style={styles.bodyText}>Currently, DogPark is being implemented in the Planetarium Parking Lot by the Science II Building at California State University, Fresno, with plans of expanding to the Engineering Parking Lot and the Business Parking Lot in the near future. With its mass-manufacture style of sensors and readily-adaptable source code, DogPark can be adopted by essentially any university campus that’s looking to find a way to fix its parking problem.</Text>
          </View>

          <View style={styles.contentMap}>
            <Text style={styles.text}>"Welcome to the Planetarium Parking Lot!"</Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta:0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.text}>"Settings"</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  talkBubbleSquare: {
    //alignSelf: 'stretch',
    flex: 1,
    //backgroundColor: Constants.MAIN_COLOR,
    //borderRadius: Constants.BORDER_EDGES,
    marginTop: 15,
    marginBottom: 15
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Constants.MAIN_COLOR,
    borderRadius: Constants.BORDER_EDGES,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 40
  },
  contentMap: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Constants.MAIN_COLOR,
    borderRadius: Constants.BORDER_EDGES,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 40
  },
  text: {
    color: 'white'
  },
  map: {
    left: 20,
    right: 20,
    top: 100,
    bottom: 50,
    position: 'absolute'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  bodyText: {
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    fontSize: 15
  },
  contentHome: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Constants.MAIN_COLOR,
    borderRadius: Constants.BORDER_EDGES,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: screenWidth - 40
  }
});