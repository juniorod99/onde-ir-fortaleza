import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = 'Todos';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum item encontrado</Text>
        }
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text="Toda Fortaleza" style={{fontWeight: 'normal'}} />
              <Title text="na palma da sua mão!" />

              <Title text="Explorar atrações" style={styles.subtitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
