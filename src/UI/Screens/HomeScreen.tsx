import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CompletedTask,
  GroupList,
  PendingTask,
  Task,
} from '../../Utils/AppConstants';
import HomeHeader from '../Components/HomeHeader';
import GradientBackground from '../../components/GradientBackground';

const HomeScreen = () => {
  const { width } = Dimensions.get('window');

  const renderItem: ListRenderItem<Task> = useCallback(
    ({ item }) => (
      <View style={styles.GroupCard}>
        <Text style={styles.CardLabel}>{item.label}</Text>
        <Text style={styles.CardDay}>
          {item.day} {'|'} {item.Time}
        </Text>
        <TouchableOpacity style={styles.viewDetailsBtn}>
          <Text style={styles.detailsText}> View </Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  const TaskItem = ({ item }: { item: Task }) => (
    <View style={styles.card}>
      <View style={styles.taskInfo}>
        <Text style={styles.CardLabel}>{item.label}</Text>
        <Text style={styles.CardDay}>
          {item.day} {'|'} {item.Time}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> View </Text>
      </TouchableOpacity>
    </View>
  );

  return (
      <GradientBackground>

      
      <SafeAreaView style={styles.MainContainer}>
        <View style={{flex:1}}>
          <View>
          <HomeHeader />
        </View>
        <ScrollView> 
          <View>
            <Text style={styles.groupText}>Group Tasks :</Text>
          </View>
          <FlatList
            data={GroupList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={false}
          />

          <View style={styles.groupContainer}>
            <Text style={styles.groupText}>Pending Tasks :</Text>
          </View>
          <FlatList
            data={PendingTask}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TaskItem item={item} />}
            scrollEnabled={false}
          />
          <View style={styles.groupContainer}>
            <Text style={styles.groupText}>Completed Tasks :</Text>
          </View>

          <FlatList
            data={CompletedTask}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TaskItem item={item} />}
            scrollEnabled={false}
          />
        </ScrollView>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  MainContainer:{
   flex:1,
  },
  groupText: {
    fontSize: 18,
    color: 'white',
    left: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  GroupCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 12,
    borderRadius: 12,
    width: 180,
    left: 20,
    top: 15,
    marginBottom: 20,
    paddingRight: 20,
  },
  CardLabel: {
    fontSize: 13,
    width: '100%',
    color: 'black',
    fontWeight: '800',
    right: 5,
  },
  CardDay: {
    fontSize: 10,
    color: '#bebebeff',
  },
  viewDetailsBtn: {
    height: 35,
    backgroundColor: '#60b2ffff',
    width: 90,
    borderRadius: 25,
    top: 5,
  },
  detailsText: {
    fontSize: 13,
    padding: 8,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 355,
    left: 15,
    top: 10,
  },
  groupContainer: {
    flex: 1,
    top: 10,
    marginBottom: 10,
  },

  button: {
    height: 35,
    backgroundColor: '#60b2ffff',
    width: 90,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 11,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    maxWidth: '100%',
  },

  taskInfo: {
    flexShrink: 1,
  },
});
