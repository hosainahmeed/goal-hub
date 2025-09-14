import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {globalStyles, typography} from '../../styles/globalStyles';

function Challange() {
  const data = [
    {
      id: '1',
      img: 'https://img.icons8.com/ios-filled/50/heart-with-pulse.png',
      title: 'Lifestyle',
      description: 'Become a morning person',
    },
    {
      id: '2',
      img: 'https://cdn-icons-png.flaticon.com/512/18706/18706055.png',
      title: 'Healthy Lifestyle',
      description: 'Become your health is the first priority',
    },
  ];

  return (
    <View style={[globalStyles.container, globalStyles.gapSmall]}>
      <Text style={typography.heading2}>2 Challanges</Text>
      <Text style={typography.caption}>Ambition person arent you ?</Text>
      <View style={styles.grid}>
        {data.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{uri: item.img}} style={styles.img} />
            <Text style={typography.heading3}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.desc}>
              {item.description}
            </Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.btn}>
              <Text style={styles.btnText}>Join Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

export default memo(Challange);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 2,
    ...globalStyles.gapMedium,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
  },
  img: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
    ...typography.small,
  },
  btn: {
    backgroundColor: '#ffa337',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  mb2: {
    marginBottom: 8,
  },
});
