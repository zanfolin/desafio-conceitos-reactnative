import React, {useState, useEffect} from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import api from './services/api'

import Item from './components/Item'

export default function App() {
  const [repositories, setRepositories] = useState([]);

  const loadRepositories = async () => {
    const response = await api.get('/repositories');
    
    await setRepositories(response.data);
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={r => r.id}
          renderItem={({item}) => <Item data={item} />}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#7159c1",
  },

});
