import React, { useContext, useEffect } from 'react'
import { View, Text , FlatList, StyleSheet } from 'react-native'
import Api from '../../Global/Axios/Api'
import { NavbarContext } from '../../Global/Context'
import SideNav from '../../Navigation/SideNav'
import TopNav from '../../Navigation/TopNav'
import ImageCart from '../../Components/ImageCart'
const HomeScreen = () => {
    const {sildeNav,data , setData}:any = useContext(NavbarContext)
 
     
    return (
        <View>
             <TopNav/>
             {sildeNav && <SideNav/>}
             <FlatList
             style={styles.imageCart}
             data={data}
             numColumns={2}
             renderItem={(item)=><ImageCart   item={item.item} />}
             keyExtractor={(item, index)=>index}
             />
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    imageCart:{
         
    }
})


