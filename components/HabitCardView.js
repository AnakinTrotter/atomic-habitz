import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { COLORS } from "../constants/colors";
import RCTSingelineTextInputNativeComponent from "react-native/Libraries/Components/TextInput/RCTSingelineTextInputNativeComponent";

/**
 * DOCUMENTATION
 *
 * <HabitStackView />
 *
 * props:
 * habits={["one", "two", "three"]}
 *
 * habits takes in an array of habits
 *
 * Returns modal of habit cards
 */
function HabitStackView(props) {
  const [expanded, setExpanded] = useState(false);

  const tapHandler = () => {
    console.log("OAEIHFAOIWHFOIAHOIFAHOGI");
    setExpanded(!expanded);
  };

  const createHabitStack = () => {
    return props.habits.map((h, i) => {
      const isBackground = i !== 0;

      return (
        <HabitCardView
          expanded={expanded}
          key={i}
          isBackground={isBackground}
          id={i}
          zIndex={props.habits.length - i}
        />
      );
    });
  };

  return (
    <TouchableWithoutFeedback onPress={tapHandler}>
      <View style={{ ...styles.container }}>{createHabitStack()}</View>
    </TouchableWithoutFeedback>
  );
}

HabitStackView.defaultProps = {
  zIndex: 1,
  opacity: 1.0,
};

function HabitCardView(props) {
  const window = useWindowDimensions();
  console.log(window.width);
  const cardStyle = !props.expanded
    ? {
        opacity: 1 - props.id * 0.1,
        top: props.id * 5,
        left: props.id * 5 - window.width / 2,
        left: props.id * 5,
      }
    : {
        opacity: 1,
        top: props.id * styles.card.height + props.id * 5,
      };

  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: props.isBackground ? COLORS.primary : "#F6F6F6",
        zIndex: props.zIndex,
        position: "absolute",
        ...cardStyle,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 15,
    marginTop: 20,
  },
  card: {
    width: 275,
    height: 100,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    left: 0,
  },
});

export default HabitStackView;
