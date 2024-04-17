import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'None', value: '0'},
  { label: 'Species 1', value: '1' },
  { label: 'Species 2', value: '2' },
  { label: 'Species 3', value: '3' },
  { label: 'Species 4', value: '4' },
  { label: 'Species 5', value: '5' },
  { label: 'Species 6', value: '6' },
  { label: 'Species 7', value: '7' },
  { label: 'Species 8', value: '8' },
];

const SpeciesDropdown = () => {
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

export default SpeciesDropdown;

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