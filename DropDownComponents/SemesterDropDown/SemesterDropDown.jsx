import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import styles from "./styles";
import { createContext } from 'react';

const SemesterDropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Học kì 1", value: "Học kì 1" },
    { label: "Học kì 2", value: "Học kì 2" },
    { label: "Học kì 3", value: "Học kì 3" },
    { label: "Học kì 4", value: "Học kì 4" },
  ]);
  const [selectedSemester, setSelectedSemester] = useState();

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.semester_dropdown}
      onChangeValue={(value) => {
        setSelectedSemester(value);
      }}
    />
  );
};
export default SemesterDropDown

