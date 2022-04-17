import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
  import { COLORS } from "../constants/colors";
  import { FONT } from "../constants/font";
  
  const LoginToSee = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container} >
          <View style={styles.container2} >
            <Text style={[FONT.h1b, styles.text]}>Login to start building your habit stacks! Navigate to the Profile page to log in.</Text>
          </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background
    },
    container2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    }
  });
  
  
  export default LoginToSee;