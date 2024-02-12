import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import Stats from './commons/Stats';
import Header from './commons/Header';
import Footer from '../../commons/footer/Footer';
import {addStats} from '../../redux/statsSlice';
import {addTerms} from '../../redux/termsSlice';
import {fetchStats} from '../../api/stats';
import {fetchTerms} from '../../api/terms';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(addStats(await fetchStats()));
      dispatch(addTerms(await fetchTerms()));
    }
    fetchData();
  });

  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#0057b8', '#fff', '#ffd600']}
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}>
        <Header />
        <Stats />
        <Footer />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default HomePage;
