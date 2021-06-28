import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image, ScrollView} from 'react-native';
import {NavbarContext} from '../../Global/Context';
import TopNav from '../../Navigation/TopNav';
import CachedImage from 'react-native-image-cache-wrapper';
const DetailsScreen = (props: any) => {
  const {data, setData}: any = useContext(NavbarContext);
  const {id} = props.route.params || data[0];
  const item: any = data.find((itm: any) => itm.id === id);

  return (
    <View style={styles.main}>
      <TopNav />
      <Text style={styles.title}>{item.title}</Text>
      <CachedImage style={styles.image} source={{uri: item.url_s}} />
      <ScrollView>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quasi debitis ipsum, ut laudantium quisquam sed voluptate consequatur?
          Officiis vel, neque omnis labore voluptatum quaerat iure, itaque optio
          autem consectetur in, quae tempora blanditiis corrupti. Quo minus quod
          corrupti laudantium magnam distinctio inventore pariatur labore.
          Repellat recusandae laboriosam dolor esse cupiditate a porro explicabo
          eos itaque ipsum. Rerum doloribus, laboriosam natus iste corporis, aut
          aspernatur officiis architecto itaque cumque delectus dolore veniam
          quisquam minima quam ipsum inventore pariatur esse blanditiis! Eveniet
          alias et, nisi facilis recusandae quasi repudiandae beatae blanditiis
          dolorem explicabo repellendus libero nemo odio soluta rerum
          temporibus! Magni, atque! Earum laborum quaerat quisquam repudiandae
          magnam provident cumque vero iure, id deleniti placeat culpa quos
          adipisci optio recusandae molestias labore totam maxime nulla.
          Necessitatibus ipsum beatae nesciunt nemo, labore, expedita veritatis
          sit deserunt, corporis nisi aut consectetur nihil officiis. Eveniet
          maxime voluptates veritatis magni iste, itaque magnam reiciendis modi
          consectetur corporis tempora autem repellat deserunt voluptate alias
          consequatur. Assumenda amet, adipisci aperiam dignissimos explicabo
          illo quia distinctio, ad cumque in sit recusandae rerum doloribus
          deleniti officiis rem hic voluptatem nobis omnis quam eveniet quas
          quibusdam eligendi. Dolor expedita blanditiis debitis fugit error a.
          Nesciunt esse blanditiis repellendus voluptatem porro.
        </Text>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  main: {},
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: '30%',
  },
  text: {
    padding: 10,
  },
});
