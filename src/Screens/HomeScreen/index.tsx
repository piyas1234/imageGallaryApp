import React, { useContext, useEffect } from 'react'
import { View, Text , FlatList, StyleSheet } from 'react-native'
import Api from '../../Global/Axios/Api'
import { NavbarContext } from '../../Global/Context'
import SideNav from '../../Navigation/SideNav'
import TopNav from '../../Navigation/TopNav'
import ImageCart from '../../Components/ImageCart'
import Pagination from '../../Components/Pagination'
import Loading from '../../Components/Loading/Loading'
const HomeScreen = () => {
    const {sildeNav,data , setData ,loading}:any = useContext(NavbarContext)
 
     
    return (
        <View>
             <TopNav/>
             {sildeNav && <SideNav/>}
             {loading &&  <Loading/>}
             <FlatList
             style={styles.imageCart}
             data={data}
             numColumns={2}
             
             renderItem={(item)=><ImageCart   item={item.item} />}
             ListFooterComponent={()=><Pagination/>}
             keyExtractor={(item, index)=>index}
             />
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    imageCart:{
         marginBottom:65
    }
})


