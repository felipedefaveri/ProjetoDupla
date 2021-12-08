import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   // justifyContent: 'space-evenly',
    color: 'white',
    //alignItems: 'stretch',
    marginBottom: 5,
    elevation: 4,
    backgroundColor:'#1C1C1C'
    
    
  },
  imageBotton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight:10
  },
  iconButton: {
    height: 50,
    width: 45,
    marginRight: 50,
    color:'white',
    justifyContent:'center',
    alignItems: 'center',
  },
  borderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    color:'white',
    fontFamily:'PressStart2P-Regular'
   
  },
});

export default styles;
