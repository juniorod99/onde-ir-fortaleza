import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Para onde" style={{fontWeight: 'normal'}} />
        <Title text="você gostaria de ir?" />

        <Title text="Explorar atrações" style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'Todos',
            'Populares',
            'Historico',
            'Praias',
            'Restaurantes',
            'Cinemas',
            'Compras',
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
