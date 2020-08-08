import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import WorkerItem, { Worker } from '../../components/WorkerItem';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';


import styles from './styles';

function WorkerList() {
    const [workers, setWorkers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedWorkers = JSON.parse(response);
                const favoritedWorkersIds = favoritedWorkers.map((worker: Worker) => {
                    return worker.id;
                })
                setFavorites(favoritedWorkersIds);
            }
        });
    }

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {    
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFiltersVisible(false);
        setWorkers(response.data);
    }
    
    return (
        <View style={styles.container} >
            <PageHeader title="Pessoas disponíveis" headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name='filter' size={20} color="#FFF" />
                </BorderlessButton>
            )}>
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Tipo de Bico</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Qual o Bico?"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                />
                            </View>
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView 
                style={styles.workerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {workers.map((worker: Worker) => {
                    return (
                        <WorkerItem 
                            key={worker.id} 
                            worker={worker} 
                            favorited={favorites.includes(worker.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default WorkerList;