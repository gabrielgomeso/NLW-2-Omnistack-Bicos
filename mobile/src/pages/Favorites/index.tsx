import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import WorkerItem from '../../components/WorkerItem';

function Favorites() {
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
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
            </ScrollView>
        </View>
    )
}

export default Favorites;