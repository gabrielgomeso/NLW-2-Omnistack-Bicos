import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import WorkerItem from '../../components/WorkerItem';

import styles from './styles';

function WorkerList() {
    return (
        <View style={styles.container} >
            <PageHeader title="Pessoas disponíveis" />

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

export default WorkerList;