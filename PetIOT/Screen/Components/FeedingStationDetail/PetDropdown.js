import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'None', value: '0'},
  { label: 'Pet 1', value: '1' },
  { label: 'Pet 2', value: '2' },
  { label: 'Pet 3', value: '3' },
  { label: 'Pet 4', value: '4' },
  { label: 'Pet 5', value: '5' },
  { label: 'Pet 6', value: '6' },
  { label: 'Pet 7', value: '7' },
  { label: 'Pet 8', value: '8' },
];

const SoundDropdown = () => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      containerStyle={styles.container}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      value={value}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default SoundDropdown;

const styles = StyleSheet.create({
  container:{

  },
  dropdown: {
    height: 50,
    width: 100,
    alignSelf:'flex-end',
    justifyContent:'center'
  },
  icon: {
  },
  placeholderStyle: {
    fontSize: 14,
    color:'#51443B',
    fontFamily:'Roboto',
    fontWeight:'400',
    lineHeight:16,
    letterSpacing:0.40,
    alignSelf:'center'
  },
  selectedTextStyle: {
    fontSize: 14,
    color:'#51443B',
    fontFamily:'Roboto',
    fontWeight:'400',
    lineHeight:16,
    letterSpacing:0.40,
    alignSelf:'center'
  },
  iconStyle: {

  },

});