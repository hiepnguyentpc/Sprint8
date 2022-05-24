import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import styles from "./styles";

const LocationDropDown = ({locationToMain}) => {



  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "HÀ NỘI", value: "CƠ SỞ HÀ NỘI" },
    { label: "HCM", value: "CƠ SỞ HCM" },
  ]);
  
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.semester_dropdown}
      onSelectItem={(value) => {
        locationToMain(value)
}}
    />
  );
};
export default LocationDropDown

