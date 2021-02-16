import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={styles.screen} >
      <Text
      style={{ fontSize: 70, fontWeight: 'bold', color: '#08145c' }}>
      Quiz
      </Text>
      <Text
      style={{ fontSize: 24, color: '#0072C8' }}>
      O Apple
      </Text>
      <Image style={styleso0.logo} source={require('./assets/apple2.png')} />
      <Button
      color="#e9afa3"
        title="Start"
        onPress={() => navigation.navigate('Quiz 1/5')
} 
      />
    </View>
  );
}

function Pytanie1({ navigation }) {
  return (
    <View style={styles1.screen}>
      <Text
      style={{ fontSize: 30, fontWeight: 'bold', color: '#08145c', flex: 1 }}>
      ___________________________ Pytanie 1: Kiedy został zaprezentowany pierwszy Iphone? ___________________________
      </Text>
      <Image style={styleso1.logo} source={require('./assets/iphone.png')} />
      <Button
      color="#e9afa3"
        title="                                               2010                                               "
        onPress={() => navigation.push('Zle1')}
        style={{paddingHorizontal: 100, 
          paddingVertical: 100,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               2007                                               "
        onPress={() => navigation.push('Dobrze1')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               2005                                               "
        onPress={() => navigation.push('Zle1')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               1999                                               "
        onPress={() => navigation.push('Zle1')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
    </View>

  );
}

function Dobrze1({ navigation }) {
  return (
    <View style={stylesgood.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Dobrze
      </Text>
    <Button
      color="Green"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 2/5')}
      />
    </View>
  );
}

function Zle1({ navigation }) {
  return (
    <View style={stylesbad.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Źle
      </Text>
    <Button
      color="Red"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 2/5')}
      />
    </View>
  );
}

function Pytanie2({ navigation }) {
  return (
    <View style={styles1.screen}>
      <Text
      style={{ fontSize: 30, fontWeight: 'bold', color: '#08145c', flex:1 }}>
      ___________________________ Pytanie 2: Kiedy Apple zapowiedziało przejście na architekturę x86? ___________________________
      </Text>
      <Image style={styleso2.logo} source={require('./assets/intel.png')} />
      <Button
      color="#e9afa3"
        title="                                               2006                                               "
        onPress={() => navigation.push('Zle2')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               2007                                               "
        onPress={() => navigation.push('Zle2')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               2010                                               "
        onPress={() => navigation.push('Zle2')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               2005                                               "
        onPress={() => navigation.push('Dobrze2')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
    </View>
  );
}

function Dobrze2({ navigation }) {
  return (
    <View style={stylesgood.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Dobrze
      </Text>
    <Button
      color="Green"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 3/5')}
      />
    </View>
  );
}

function Zle2({ navigation }) {
  return (
    <View style={stylesbad.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Źle
      </Text>
    <Button
      color="Red"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 3/5')}
      />
    </View>
  );
}

function Pytanie3({ navigation }) {
  return (
    <View style={styles1.screen}>
      <Text
      style={{ fontSize: 30, fontWeight: 'bold', color: '#08145c', flex: 1 }}>
      ___________________________ Pytanie 3: Gdzie znajduje się siedziba Apple? ___________________________
      </Text>
      <Image style={styleso3.logo} source={require('./assets/asiedziba.png')} />
      <Button
      color="#e9afa3"
        title="                                               Cupertino                                               "
        onPress={() => navigation.push('Dobrze3')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               San Francisco                                               "
        onPress={() => navigation.push('Zle3')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               Los Angeles                                               "
        onPress={() => navigation.push('Zle3')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                               Moutain View                                               "
        onPress={() => navigation.push('Zle3')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
    </View>
  );
}

function Dobrze3({ navigation }) {
  return (
    <View style={stylesgood.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Dobrze
      </Text>
    <Button
      color="Green"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 4/5')}
      />
    </View>
  );
}

function Zle3({ navigation }) {
  return (
    <View style={stylesbad.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Źle
      </Text>
    <Button
      color="Red"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 4/5')}
      />
    </View>
  );
}

function Pytanie4({ navigation }) {
  return (
    <View style={styles1.screen}>
      <Text
      style={{ fontSize: 30, fontWeight: 'bold', color: '#08145c', flex: 1 }}>
      ___________________________ Pytanie 4: Kiedy wyszedł pierwszy komputer z rodziny Macintosh? ___________________________
      </Text>
      <Image style={styleso4.logo} source={require('./assets/macintosh128.png')} />
      <Button
      color="#e9afa3"
        title="                                              Druga połowa lat 70                                              "
        onPress={() => navigation.push('Zle4')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                              Pierwsza połowa lat 90                                              "
        onPress={() => navigation.push('Zle4')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                              Druga połowa lat 80                                              "
        onPress={() => navigation.push('Zle4')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                              Pierwsza połowa lat 80                                              "
        onPress={() => navigation.push('Dobrze4')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
    </View>
  );
}

function Dobrze4({ navigation }) {
  return (
    <View style={stylesgood.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Dobrze
      </Text>
    <Button
      color="Green"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 5/5')}
      />
    </View>
  );
}

function Zle4({ navigation }) {
  return (
    <View style={stylesbad.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Źle
      </Text>
    <Button
      color="Red"
        title="Następne Pytanie"
        onPress={() => navigation.push('Quiz 5/5')}
      />
    </View>
  );
}

function Pytanie5({ navigation }) {
  return (
    <View style={styles1.screen}>
      <Text
      style={{ fontSize: 30, fontWeight: 'bold', color: '#08145c', flex: 1 }}>
      ___________________________ Pytanie 5: Kto jest aktualnym CEO firmy? (2020) ___________________________
      </Text> 
      <Image style={styleso5.logo} source={require('./assets/timcook.png')} />
      <Button
      color="#e9afa3"
        title="                                              Tim Cook                                              "
        onPress={() => navigation.push('Dobrze5')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                              Steve Jobs                                              "
        onPress={() => navigation.push('Zle5')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                              Bill Gates                                              "
        onPress={() => navigation.push('Zle5')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
      <Button
      color="#e9afa3"
        title="                                              Jonathan Ive                                              "
        onPress={() => navigation.push('Zle5')}
        style={{paddingHorizontal: 30, 
          paddingVertical: 50,
          borderRadius: 30}}
      />
    </View>
  );
}

function Dobrze5({ navigation }) {
  return (
    <View style={stylesgood.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Dobrze
      </Text>
    <Button
      color="Green"
        title="Następne Pytanie"
        onPress={() => navigation.push('Wynik')}
      />
    </View>
  );
}

function Zle5({ navigation }) {
  return (
    <View style={stylesbad.screen}>
      <Text
      style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
      Źle
      </Text>
    <Button
      color="Red"
        title="Następne Pytanie"
        onPress={() => navigation.push('Wynik')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function Koniec({ navigation }) {
  return (
    <View style={styles2.screen}>
      <Text
      style={{ fontSize: 60, fontWeight: 'bold', color: '#08145c' }}>
      Koniec
      </Text>
      <Button color="#e9afa3" title="Strona Główna" onPress={() => navigation.navigate('Strona Główna')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf3dd',
  },
});

const styles1 = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf3dd',
  },
});

const styles2 = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf3dd',
  },
});

const stylesgood = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

const stylesbad = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

const styleso1 = StyleSheet.create({
  logo: {
    height: 450,
    width: 237,
  },
});

const styleso2 = StyleSheet.create({
  logo: {
    height: 450,
    width: 330,
    borderRadius: 10,
  },
});

const styleso3 = StyleSheet.create({
  logo: {
    height: 450,
    width: 330,
    borderRadius: 10,
  },
});

const styleso4 = StyleSheet.create({
  logo: {
    height: 450,
    width: 320,
    borderRadius: 10,
  },
});

const styleso5 = StyleSheet.create({
  logo: {
    height: 450,
    width: 300,
    borderRadius: 10,
  },
});

const styleso0 = StyleSheet.create({
  logo: {
    height: 400,
    width: 340,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Strona Główna" component={Home} options={{
            title: 'Home Title',
            headerTitleStyle: {
              color: '#08415c',
            },
            headerStyle: {
              backgroundColor: '#f9dbbd',
            },
          }}
         />
        <Stack.Screen name="Quiz 1/5" component={Pytanie1}  
        options={{
    headerShown: false
}}/>
        <Stack.Screen name="Dobrze1" component={Dobrze1} 
        options={{
          headerShown: false
      }}/>
        <Stack.Screen name="Zle1" component={Zle1} 
        options={{
          headerShown: false
      }}/>
        <Stack.Screen name="Quiz 2/5" component={Pytanie2}
        options={{
          headerShown: false
      }} />
      <Stack.Screen name="Dobrze2" component={Dobrze2} 
        options={{
          headerShown: false
      }}/>
      <Stack.Screen name="Zle2" component={Zle2} 
        options={{
          headerShown: false
      }}/>
        <Stack.Screen name="Quiz 3/5" component={Pytanie3} 
        options={{
          headerShown: false
      }}/>
      <Stack.Screen name="Dobrze3" component={Dobrze3} 
        options={{
          headerShown: false
      }}/>
      <Stack.Screen name="Zle3" component={Zle3} 
        options={{
          headerShown: false
      }}/>
        <Stack.Screen name="Quiz 4/5" component={Pytanie4}
        options={{
          headerShown: false
      }} />
      <Stack.Screen name="Dobrze4" component={Dobrze4} 
        options={{
          headerShown: false
      }}/>
      <Stack.Screen name="Zle4" component={Zle4} 
        options={{
          headerShown: false
      }}/>
        <Stack.Screen name="Quiz 5/5" component={Pytanie5}
        options={{
          headerShown: false
      }} />
      <Stack.Screen name="Dobrze5" component={Dobrze5} 
        options={{
          headerShown: false
      }}/>
      <Stack.Screen name="Zle5" component={Zle5} 
        options={{
          headerShown: false
      }}/>
        <Stack.Screen name="Wynik" component={Koniec} 
        options={{
          headerShown: false
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;
