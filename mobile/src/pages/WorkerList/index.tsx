import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function WorkerList() {
    return (
        <View style={styles.container} >
            <PageHeader title="Pessoas disponíveis" />
        </View>
    )
}

export default WorkerList;