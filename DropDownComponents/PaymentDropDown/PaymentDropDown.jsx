import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import styles from "./styles";

const PaymentDropDown = ({paymentToMain}) => {



  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "BILLPAYMENT", value: "BILLPAYMENT" },
    { label: "CASHPAYMENT", value: "CASHPAYMENT" },
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
        paymentToMain(value)
}}
    />
  );
};
export default PaymentDropDown

