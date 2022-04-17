import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback
} from "react-native";
import { useState, useEffect } from "react";
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
  
  let habitStackHeight = styles.card.height + 5 * (props.habits.length + 1);
  // let habitStackHeight = styles.card.height + 5 * (props.habits.length + 1);
  if (expanded) {
    habitStackHeight = styles.card.height * (props.habits.length + 1) + 5 * (props.habits.length + 1);
  }

  const tapHandler = () => {
    setExpanded(!expanded);
  };

  const createHabitStack = () => {
    return props.habits.map((h, i) => {
      return (
        <HabitCardView
          expanded={expanded}
          key={i}
          isBackground={true}
          id={i + 1}
          zIndex={props.habits.length - i - 1}
        />
      );
    });
  };

  return (
    <TouchableWithoutFeedback onPress={tapHandler}>
      <View style={{...styles.container, height: habitStackHeight}}>
          <HabitCardView expanded={expanded} id={0} zIndex={props.habits.length + 1}/>
        {createHabitStack()}
      </View>
    </TouchableWithoutFeedback>
  );
}

HabitStackView.defaultProps = {
  zIndex: 1,
  opacity: 1.0,
  id: 0
};

function HabitCardView(props) {
  const cardStyle = !props.expanded
    ? {
        opacity: 1 - props.id * 0.1,
        top: props.id * 5,
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
        ...cardStyle,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 15,
    backgroundColor: "blue"
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
    bottom: 0,
    right: 0,
    position: "absolute"
  },
});

export default HabitStackView;
