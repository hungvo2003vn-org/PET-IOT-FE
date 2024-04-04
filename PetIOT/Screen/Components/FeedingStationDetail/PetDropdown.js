import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const SoundDropdown = ({pet_id}) => {
  const [value, setValue] = useState(0);
  const data = [
    { label: pet_id, value: '0'},
    { label: 'None', value: '1' },
  
  ];
  

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
      placeholder={`${pet_id}`}
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