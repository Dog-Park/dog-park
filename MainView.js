@@ -3,6 +3,7 @@ import { StyleSheet, Text, View } from 'react-native';
import { TopBar } from './TopBar.js';
import { Constants } from './Constants';
import Swiper from 'react-native-swiper';
import MapView from 'react-native-maps';

export class MainView extends React.Component {
  render() {
@ -12,12 +13,28 @@ export class MainView extends React.Component {
          loop={false}
          showsPagination={false}
          index={1} >
          <View style={styles.content}>
            <Text style={styles.text}>"Home"</Text>

          <View style={styles.contentHome}>
            <Text style={styles.titleText}>Home</Text>
            <Text> </Text>
            <Text style={styles.bodyText}>DogPark is a mobile parking solution, designed to help reduce the time it takes to find an open parking spot and alleviate search traffic in general on university campuses. By using an infrared sensor network that’s mounted to the surface of the parking lots themselves, DogPark provides a constant influx of real-time occupancy information and allows app users to be easily directed to the open spots closest to them, getting them where they need to be on time.</Text>
            <Text> </Text>
            <Text style={styles.bodyText}>Currently, DogPark is being implemented in the Planetarium Parking Lot by the Science II Building at California State University, Fresno, with plans of expanding to the Engineering Parking Lot and the Business Parking Lot in the near future. With its mass-manufacture style of sensors and readily-adaptable source code, DogPark can be adopted by essentially any university campus that’s looking to find a way to fix its parking problem.</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.text}>"Navigation"</Text>
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
@ -46,5 +63,35 @@ const styles = StyleSheet.create({
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
    margin: 20,
    backgroundColor: Constants.MAIN_COLOR,
    borderRadius: Constants.BORDER_EDGES,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
});
