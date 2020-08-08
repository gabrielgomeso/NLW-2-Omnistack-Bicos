import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import WorkerItem, { Worker } from '../../components/WorkerItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedWorkers = JSON.parse(response);

                setFavorites(favoritedWorkers);
            }
        });
    }
    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )
    return (
        <View style={styles.container} >
            <PageHeader title="Minhas pessoas favoritas" />

            <ScrollView 
                style={styles.workerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >

                {favorites.map((worker: Worker) => {
                    return (
                        <WorkerItem 
                            key={worker.id}
                            worker={worker}
                            favorited
                        />
                    )
                })}
                

            </ScrollView>
        </View>
    )
}

export default Favorites;