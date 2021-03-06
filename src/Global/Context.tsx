import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import CachedImage from 'react-native-image-cache-wrapper';
import {createContext} from 'react';
import Api from './Axios/Api';


export const NavbarContext = createContext();

const Context = (props: any) => {
  const [sildeNav, setSildeNav] = useState(false);
  const [data, setData]: any = useState([{loading: true}]);
  const [Auth, setAuth] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    search ? SearchData() : LoadData();
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    
  }, [pagination, search]);

  const SearchData = async () => {
    try {
       
      const Data: any = await Api.get(
        `/services/rest/?method=flickr.photos.search&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s&text=${search}`,
      );
      await setData(Data.data.photos.photo);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadData = async () => {
    try {
      const value = await AsyncStorage.getItem('data');
      const result = await JSON.parse(value);
      await setData(result);
      const Data: any = await Api.get(
        `/services/rest/?method=flickr.photos.getRecent&per_page=20&page=${pagination}&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s`,
      );
      console.log(Data);
      const data = await storeData(Data.data.photos.photo);
      await setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const storeData = async (Data: any) => {
    try {
      const jsonValue = JSON.stringify(Data);
      // Data && (await CachedImage.clearCache());
      Data && (await AsyncStorage.setItem('data', jsonValue));
      
      const value = await AsyncStorage.getItem('data');
      const result = JSON.parse(value);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavbarContext.Provider
      value={{
        sildeNav,
        setSildeNav,
        data,
        setData,
        pagination,
        setPagination,
        Auth,
        setAuth,
        search,
        setSearch,
        loading,
         setLoading
      }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default Context;
