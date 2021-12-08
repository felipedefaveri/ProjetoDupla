import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import ItemSeparator from '../itemSeparator/itemSeparator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const itens = [
  {
    id: '0',
    nome: 'NANATSU NO TAIZAI',
    image: require('../../images/65731400e63e608d759354db5f45adf9.jpg'),
    descricao:
      'Sinopse: Nanatsu no Taizai é um anime baseado no mangá japonês de mesmo nome escrito e ilustrado por Nakaba Suzuki.',
  },
  {
    id: '1',
    nome: 'TAKT OP. DESTINY',
    image: require('../../images/Takt-Op.-Destiny-–-Episodio-01-e-Celebrado-com-ilustracoes-MANUAL-DO-OTAKU.jpg'),
    descricao:
      'Sinopse: Após um meteoro negro cair na Terra e libertar criaturas conhecidas como D2.',
  },
  {
    id: '2',
    nome: 'DEMON SLAYER',
    image: require('../../images/2128.jpg'),
    descricao:
      'Sinopse: Tanjiro Kamado vive uma viagem em busca da salvação da irmã Nezuko, que foi atacada por demônios.',
  },
  {
    id: '3',
    nome: 'BOKU NO HERO',
    image: require('../../images/destaque-anime-boku-no-hero-academia.jpg'),
    descricao:
      'Sinopse: Onde (quase) todas as pessoas possuem superpoderes, Izuku Midoriya teve a infelicidade de nascer sem nenhum dom especial.',
  },
  {
    id: '4',
    nome: '86',
    image: require('../../images/86.jpg'),
    descricao:
      'Sinopse: Os jovens desta terra abandonada são marcados como "86" , lideram as armas "não tripuladas" para a batalha.',
  },
  {
    id: '5',
    nome: 'EDENS ZERO',
    image: require('../../images/EDENS_ZERO.jpg'),
    descricao:
      'Sinopse: Em Edens Zero acompanhamos as aventuras de Shiki Granbell, um órfão que foi criado por robôs autômatos em no planeta Granbell.',
  },
  {
    id: '6',
    nome: 'SHAMAN KING',
    image: require('../../images/SHAMAN_KING.jpg'),
    descricao:
      'Yoh Asakura, um garoto xamã que treina para desenvolver suas habilidades a fim de ganhar o Torneio Xamã.',
  },
  {
    id: '7',
    nome: 'TOKYO REVENGERS',
    image: require('../../images/TOKIO_REVENGERS.jpg'),
    descricao:
      'Takemichi tem 27 anos de idadeTa em 2017 e possui poderes de viajar doze anos para o passado.',
  },
  {
    id: '8',
    nome: 'ZOMBIELAND SAGA',
    image: require('../../images/zombielanf_saga.jpg'),
    descricao:
      ' Sakura Minamoto sonha em se tornar um ídolo. Infelizmente, a realidade a atinge como um caminhão.',
  },
  {
    id: '9',
    nome: 'TO YOUR ETERNITY',
    image: require('../../images/TO_YOUR_ETERNITY.jpg'),
    descricao:
      'A história acompanha uma entidade sobrenatural desconhecida capaz de assimilar criaturas mortas e se transformar nelas.',
  },
  {
    id: '10',
    nome: 'Tackt',
    image: require('../../images/65731400e63e608d759354db5f45adf9.jpg'),
    descricao: 'Anime Tackt',
  },
];

function Listagem() {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <View style={styles.searchBar}>
              <TextInput
                style={{
                  type: 'text',
                  backColor: 'white',
                  maxLength: '4',
                  borderColor: 'gray',
                  width: '85%',
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: 'flex-end',
                }}
              />
              <TouchableOpacity>
                <FontAwesome name="search" size={25} />
              </TouchableOpacity>
            </View>
            <Text style={styles.TitleList}>LANÇAMENTOS</Text>
          </View>
        )}
        data={itens}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.borderContainer}>
                <Image style={styles.imagemItem} source={item.image} />
              </View>
              <View>
                <Text style={styles.titleContainer}>{item.nome}</Text>
                <Text style={styles.descriptionContainer}>
                  {item.descricao}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
}

export default Listagem;
