import React from 'react'
import {Text, View} from 'react-native'
import Header from '../../../components/header/header'
import Listagem from '../../../components/listagemItens/listagem'

function Home (){
    return(
        <>
            <Header/>
          <Listagem/>
            </>
    
    )
}

export default Home