import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


function WorkerItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}> 
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}> Diego Fernandes </Text>
                    <Text style={styles.subject}> Química </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Sou um cara que gosta muito de programação e ama dar aulas de Química uhul que empolgação 
                {'\n'}{'\n'}
                Você não vai encontrar nenhum professor melhor do que eu, eu sou incrível uau
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}>
                        R$ 20,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image 
                            source={heartOutlineIcon}
                        />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image 
                            source={whatsappIcon}
                        />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default WorkerItem;