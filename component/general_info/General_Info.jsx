import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles";

const General_Info = () => {
  return (
    <View
      style={styles.general_info_container}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>
          I. THÔNG TIN CHUNG :
        </Text>

        <View style={styles.icon}>
          <Ionicons name="chevron-down" size="20" />
        </View>
      </View>
    </View>
  );
};

export default General_Info;
