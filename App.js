import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, Octicons, SimpleLineIcons } from "@expo/vector-icons"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <StatusBar style="auto" />
      <View style={styles.middle}>
        <View style={styles.component}>
          <Text style={styles.text}>Valenciennes</Text>
          <Text style={styles.temperature}>11°C</Text>
          <TouchableOpacity>
            <Text style={styles.text}>Overcast Clouds</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: "flex-end"}}>
      <Text style={{color: 'gray'}}>Updated: Ven, Sep 25, 19:38</Text>
      </View>
      
      <View>
        <View style={styles.first}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, justifyContent: 'center'}}>
              <MaterialCommunityIcons name="water" size={30} color="#0BADFE" />
            </View>
            <View>
              <Text style={styles.text}>Humidity</Text>
              <Text style={styles.text}>72%</Text>
            </View>
            
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, justifyContent: 'center'}}>
              <MaterialCommunityIcons name="cloud" size={30} color="gray" />
            </View>
            <View>
              <Text style={styles.text}>Clouds</Text>
              <Text style={styles.text}>90%</Text>
            </View>       
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, justifyContent: 'center'}}>
              <Octicons name="eye" size={30} color="white" />
            </View>
            <View>  
              <Text style={styles.text}>Visibility</Text>
              <Text style={styles.text}>10.00 km</Text>
            </View>
          </View>
        </View>
        <View style={styles.second}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, justifyContent: 'center'}}>
              <MaterialCommunityIcons name="wind-turbine" size={40} color="white" />
            </View>
            <View>
              <Text style={styles.text}>Wind</Text>
              <Text style={styles.text}>11.16 km/h</Text>
            </View>
            <View>
              <MaterialCommunityIcons name="arrow-top-right-thick" size={30} color="#297AB2" style={{paddingLeft: 40}} />
            </View>
            <View>
              <Text style={{color: "white", alignItems: 'center'}}>NE</Text>
            </View>
            
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, justifyContent: 'center'}}> 
              <SimpleLineIcons name="speedometer" size={30} color="white" />
            </View>
            <View>
              <Text style={styles.text}>Pressure</Text>
              <Text style={styles.text}>1024 hPa</Text>
            </View> 
          </View>
        </View>
      </View>
      <TouchableOpacity style={{alignItems: "flex-end"}}>
        <Text style={{color: 'white', textDecorationLine: 'underline'}}>Load more...</Text>
      </TouchableOpacity>

      <View style={styles.third}>
        <View style={{justifyContent: "space-between", flexDirection: 'row'}}>
          <View>
            <MaterialCommunityIcons name='cloud' size={50} color="white" />
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={styles.text}>Lille</Text>
            <Text style={styles.text}>17° Broken Clouds</Text>
          </View>
        </View>
        <View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name='water' size={30} color='blue' />
              <Text style={styles.text}>93%</Text>
            </View>

            <View style={{flexDirection: 'row'}}> 
              <MaterialCommunityIcons name='cloud' size={30} color='white' />
              <Text style={styles.text}>75%</Text>
            </View>

            
          </View>
        </View>
      </View>

      <View style={styles.third}>
        <View style={{justifyContent: "space-between", flexDirection: 'row'}}>
          <View>
            <MaterialCommunityIcons name='cloud' size={50} color="white" />
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={styles.text}>Paris</Text>
            <Text style={styles.text}>17° Broken Clouds</Text>
          </View>
        </View>
        <View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name='water' size={30} color='blue' />
              <Text style={styles.text}>72%</Text>
            </View>

            <View style={{flexDirection: 'row'}}> 
              <MaterialCommunityIcons name='cloud' size={30} color='white' />
              <Text style={styles.text}>75%</Text>
            </View>
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#243755',
    paddingTop: 30
  },
  title: {
    borderRadius: 15,
    backgroundColor: "brown",
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "white"
  },
  middle: {
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingHorizontal: 10,
  }, 
  text: {
    color: 'white'
  },
  temperature: {
    fontSize: 70,
    color: "white"
  },
  first: {
    flexDirection: 'row',
    backgroundColor: "#32425C",
    borderRadius: 10,
    paddingVertical: 30,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  second: {
    flexDirection: 'row',
    backgroundColor: "#32425C",
    borderRadius: 10,
    paddingVertical: 30,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  third: {
    flexDirection: 'row',
    backgroundColor: "#32425C",
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    justifyContent: "space-between",
  }
});
