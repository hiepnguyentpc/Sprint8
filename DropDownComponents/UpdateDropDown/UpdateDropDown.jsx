import React, { useState } from 'react';

import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function UpdateDropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
  const [items, setItems] = useState([
    {label: 'Học phí - niên chế', value: 'Học phí - niên chế'},
    {label: 'Lệ phí - Thi Lại', value: 'Lệ phí - Thi Lại'},
    {label: 'Khác', value: 'Khác'},

  ]);

  return (
    <View style={{
      backgroundColor: '#171717',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15
    }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}

        theme="LIGHT"
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
    </View>
  );
}
