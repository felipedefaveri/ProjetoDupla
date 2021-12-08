import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop:1,
        //marginTop:5,
        width:"100%",
        flexDirection: 'row',
        height: '100%',
        backgroundColor:'#1C1C1C',
        flex:1

    },
    descriptionContainer:{
        width:290,
        height:70,
        marginTop:5,
        marginLeft:4,
        color:'white',
        textAlign:'left',
        fontFamily:'RobotoMono-Medium'
    },
   
    imageButton: {
        height: 100,
        width: 100,
      //  borderRadius: 50,
        

        
    },
    borderContainer: { 
        flexDirection:'row',
        flex:2,
        justifyContent:'flex-start',
        alignItems:'flex-end',
       
    },
    titleContainer: {
        fontSize: 18,
        color: 'white',
        fontFamily:'RobotoMono-Medium'

    },
    title: {
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
       
    },
    imagemItem:{
       width:110,
        height:110,
        
    },
    textLista:{
    fontSize:25,
marginBottom:5,

    },
    TitleList:{
        textAlign:'center',
        alignContent:'center',
        fontSize:25,
        margin:10,
        color:'black',
        fontFamily:'RobotoMono-Medium',
       
        
    },
    searchBar:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
});

export default styles;