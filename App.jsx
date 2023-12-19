import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import Trapezoid from './components/trapezoid';
import ListFooter from './components/ListFooter';

export default function App() {
  const data = [
    {
      id: '1',
      title: 'Catch up with Brian',
      category: 'Mobile Project',
      time: '4pm',
      dotColor: 'orange',
    },
    {
      id: '2',
      title: 'Make new icons',
      category: 'Web App',
      time: '5pm',
      dotColor: 'green',
    },
    {
      id: '3',
      title: 'Design explorations',
      category: 'WCompany Website',
      time: '6pm',
      dotColor: 'red',
    },
    {
      id: '4',
      title: 'Lunch with Folks',
      category: 'Fork N Knife',
      time: '7pm',
      dotColor: 'green',
    },
    {
      id: '5',
      title: 'Meeting with Client',
      category: 'Business',
      time: '10am',
      dotColor: 'red',
    },
    {
      id: '6',
      title: 'Read a Book',
      category: 'Personal Development',
      time: '2pm',
      dotColor: 'green',
    },
    {
      id: '7',
      title: 'Work on Design Mockups',
      category: 'Design',
      time: '3:30pm',
      dotColor: 'blue',
    },
  ];

  const ListItem = ({title, category, time, dotColor}) => {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.longLine}></View>
        <View style={{...styles.colorDot, backgroundColor: dotColor}}></View>
        <View style={styles.taskText}>
          <Text style={{color: 'black', fontSize: 18}}>{title}</Text>
          <Text style={{color: 'gray'}}>{category}</Text>
        </View>
        <View style={styles.timeText}>
          <Text style={{color: 'gray'}}>{time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Trapezoid />
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{...styles.longLine, top: -75, height: 170}}></View>
          <View style={styles.taskTextContainer}>
            <Text style={{fontSize: 30, color: 'black'}}>My Tasks</Text>
            <Text style={{color: 'gray'}}>February 8, 2024</Text>
          </View>
        </View>
        <View style={{flex: 4}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ListItem {...item} />}
            ListFooterComponent={ListFooter}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  taskTextContainer: {
    marginLeft: 50,
  },
  longLine: {
    position: 'absolute',
    left: 25,
    height: 80,
    width: 1,
    backgroundColor: 'gray',
  },
  taskContainer: {
    height: 70,
    width: 360,
    flexDirection: 'row',
    marginBottom: 10,
  },
  colorDot: {
    position: 'relative',
    top: 8,
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginLeft: 21,
    zIndex: 2,
  },
  taskText: {
    color: 'black',
    marginLeft: 20,
    flexDirection: 'column',
    gap: 5,
  },
  timeText: {
    position: 'absolute',
    right: 20,
  },
});
