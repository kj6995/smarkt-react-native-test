import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors/colors';
import shopPageData from '../assets/data/shopPageData';

const ShopPage = () => {
  const renderCategoryItem = ({item}) => {
    return (
      <View style={styles.categoryItemBoxShadow}>
        <View style={styles.categoryItemWrapper}>
          <View style={styles.categoryItemContent}>
            <Text style={styles.categoryItemShopName}>{item.title}</Text>
            <Text style={styles.categoryItemDetails}>{item.details}</Text>
            <View style={styles.categoryItemButtonContainer}>
              <TouchableOpacity style={styles.categoryItemButton}>
                <Text style={styles.buttonText}>Products</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItemButton}>
                <Text style={styles.buttonText}>Staff</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categoryItemImageContainer}>
            <Image source={item.image} style={styles.categoryItemImage} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={StyleSheet.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Entypo name="menu" size={26} color={colors.white} />
            <Image
              source={require('../assets/images/sMARKT.png')}
              style={styles.logoImage}
            />
            <Entypo
              name="plus"
              size={26}
              color={colors.white}
              style={styles.plusIcon}
            />
          </View>
        </SafeAreaView>

        <View style={styles.categoriesWrapper}>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={shopPageData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.purple,
    height: 45,
    alignItems: 'center',
  },
  logoImage: {
    width: 80,
    height: 32,
    marginLeft: 13,
    marginTop: 6,
  },
  plusIcon: {
    marginLeft: 190,
    // justifyContent: 'flex-end',
  },
  categoryItemBoxShadow: {
    width: '95%',
    height: 130,
    // paddingBottom: 5,
  },
  categoryItemWrapper: {
    // backgroundColor: 'red',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5,
    alignItems: 'center',
    margin: 10,
    borderWidth: 3,
    borderBottomWidth: 6,
    borderColor: '#ddd',
    borderTopWidth: 0,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 10,
    // elevation: 2,
  },
  categoryItemContent: {
    display: 'flex',
    marginLeft: 8,
  },
  categoryItemShopName: {
    color: colors.purple,
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
  },
  categoryItemDetails: {
    color: colors.purple,
  },
  categoryItemButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  categoryItemButton: {
    backgroundColor: colors.purple,
    borderRadius: 5,
    width: 90,
    height: 40,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
  },
  categoryItemImageContainer: {
    paddingLeft: 20,
  },
  categoryItemImage: {},
});

export default ShopPage;
