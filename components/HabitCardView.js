import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions
} from 'react-native';
import { useState } from 'react';
import { COLORS } from '../constants/colors';
import RCTSingelineTextInputNativeComponent from 'react-native/Libraries/Components/TextInput/RCTSingelineTextInputNativeComponent';

function HabitStackView(props) {
  const [expanded, setExpanded] = useState(false);

  const tapHandler = () => {
    console.log("OAEIHFAOIWHFOIAHOIFAHOGI");
    setExpanded(!expanded);
  }

  const createHabitStack = () => {
    return props.habits.map((h, i) => {
      const isBackground = i !== 0;

      return <HabitCardView expanded={expanded} key={i} isBackground={isBackground} id={i} zIndex={props.habits.length - i} />
    })
  }

  return (
    <TouchableWithoutFeedback onPress={tapHandler} >
      <View style={{...styles.container, marginLeft: expanded ? 0 : 45}}>
        {createHabitStack()}
      </View>
    </TouchableWithoutFeedback>
  )
}

HabitStackView.defaultProps = {
  zIndex: 1,
  opacity: 1.0
}

function HabitCardView(props) {
  const window = useWindowDimensions();
  const cardStyle = !props.expanded ? {
    opacity: 1 - (props.id * 0.10),
    top: props.id * 5,
    left: props.id * 5 - (window.width / 2),
  } : {
    opacity: 1,
    left: -(styles.card.width / 2),
    top: props.id * styles.card.height + (props.id * 5),
  }
  
  
  return (
    <View style={{...styles.card, 
      backgroundColor: props.isBackground ? COLORS.primary : "#F6F6F6",
      zIndex: props.zIndex,
      position: "absolute",
      ...cardStyle
    }} />
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 275,
    height: 100,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default HabitStackView;