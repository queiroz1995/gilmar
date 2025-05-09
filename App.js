import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import MovimentacaoScreen from './src/screens/MovimentacaoScreen';
import HistoricoScreen from './src/screens/HistoricoScreen';
import useInitDB from './src/services/init';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {useInitDB()}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Estoque' }} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro de Plumão' }} />
          <Stack.Screen name="Movimentacao" component={MovimentacaoScreen} options={{ title: 'Movimentação de Estoque' }} />
          <Stack.Screen name="Historico" component={HistoricoScreen} options={{ title: 'Histórico de Movimentações' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
} 