//Dentro do React, iremos trabalhar com Hooks.
//Com isso, falamos para o React que iremos transformar
//uma variável em algo que ele deva obersar o estado.
import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View>
      <Button
        title="Incrementar"
        onPress={() => {
          setContador(contador + 1);
        }}
      />
      <Button
        title="Decrementar"
        onPress={() => {
          setContador(contador - 1);
        }}
      />
      <Text>Contador: {contador}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
