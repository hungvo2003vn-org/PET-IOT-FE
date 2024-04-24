import React, { useState,useEffect } from 'react';
import { StyleSheet , Alert} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import petLoader from '../../../HandlingFunctions/FeedingStation/petLoader';


export default function PetDropdown({
  setChanges,
  setPetId,
  petId
}) {
  // const [value, setValue] = useState(pet_id);

  // const data = [
  //   { label: pet_id, value: '0'},
  //   { label: 'None', value: '1' },
  
  // ];

  const [petList,setPetList] = useState([]);
  const [petName,setPetName] = useState('');

  useEffect(() => {
    petLoader({setPetList});

    for (item in petList){
      if (petList[item]._id === petId){
        setPetName(petList[item].name)
      }
    }

}, []); // Empty dependency array: runs only on initial render
  

  // console.log(petList);


  // console.log(petId);

  return (
    <Dropdown
      style={styles.dropdown}
      containerStyle={styles.container}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={petList}
      value={petId}
      maxHeight={300}
      labelField="name"
      valueField="_id"
      placeholder={`${petName}`}
      onChange={(item) => {
        // setValue(item.value);
        setPetId(item._id);
        setChanges(true);
        // Alert.alert(petId);
      }}
    />
  );
}


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