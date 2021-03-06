import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { Container , TabsContainer , TabItem , TabText } from './styles';


export default function Tabs({ translateY }){
    return (
        <Container style={{
            transform:  [{
                translateY: translateY.interpolate({
                    inputRange  :   [0,380],
                    outputRange :   [0,30],
                    extrapolate :   'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange  :   [0,380],
                outputRange :   [10,0.3],
                extrapolate :   'clamp',
            }),
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Incicar aos Amigos</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Cobrar</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Depositar</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Transferir</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear Cartão</TabText>
                </TabItem>
                
            </TabsContainer>
        </Container>
    );
}