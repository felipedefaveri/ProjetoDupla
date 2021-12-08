import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



function Header() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.borderContainer}>
          <TouchableOpacity style={styles.iconButton}>
         <FontAwesome name='align-justify' size={25} color='white'/>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleContainer}>ANIMES.exe</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.imageBotton}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/e8/ed/5d/e8ed5da03e5271473fcfba530cbdf32b.jpg',
              }}
              style={styles.imageBotton}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Header;
