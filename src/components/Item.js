import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native'
import api from '../services/api';

export default function Item({data :r}) {
   const [likes, setLikes] = useState(r.likes)


   const handleLikeRepository = () => {
      api.post(`repositories/${r.id}/like`)

      setLikes(likes+1)
   }

   return (
      <View style={styles.repositoryContainer}>
         <Text style={styles.repository}>{r.title}</Text>
            
            <View style={styles.techsContainer}>   
               <FlatList
                  data={r.techs}
                  horizontal={true}
                  keyExtractor={r => r}
                  renderItem={({item}) => (
                  <Text style={styles.tech}>
                     {item}
                  </Text>
                  )}
               />
            </View>

            <View style={styles.likesContainer}>
            <Text
               style={styles.likeText}
               testID={`repository-likes-${r.id}`}
            >
               {likes} curtidas
            </Text>
            </View>

            <TouchableOpacity
            style={styles.button}
            onPress={() => handleLikeRepository()}
            testID={`like-button-${r.id}`}
            >
            <Text style={styles.buttonText}>🔥</Text>
            </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   repositoryContainer: {
      marginBottom: 15,
      marginHorizontal: 15,
      backgroundColor: "#fff",
      padding: 20,
      borderRadius:10
    },
    repository: {
      fontSize: 32,
      fontWeight: "bold",
    },
    techsContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    tech: {
      fontSize: 12,
      fontWeight: "bold",
      marginRight: 10,
      backgroundColor: "#04d361",
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: "#fff",
    },
    likesContainer: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    likeText: {
      fontSize: 14,
      fontWeight: "bold",
      marginRight: 10,
    },
    button: {
      marginTop: 10,
      borderRadius:10,
      backgroundColor: "#7159c1",
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 21,
      fontWeight: "bold",
      marginRight: 10,
      color: "#fff",
      padding: 10,
    },
})


