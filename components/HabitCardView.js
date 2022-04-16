import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import { COLORS } from '../constants/colors';

function HabitStackView(props) {
  createHabitStack = () => {
    return props.habits.map((h, i) => {
      const isBackground = i !== 0;

      return <HabitCardView key={i} isBackground={isBackground} id={i} zIndex={props.habits.length - i} />
    })
  }

  return (
    <View style={styles.container}>
      {createHabitStack()}
    </View>
  )
}

HabitStackView.defaultProps = {
  zIndex: 1,
  opacity: 1.0
}

function HabitCardView(props) {
  const window = useWindowDimensions();
  
  return (
    <View style={{...styles.card, 
      backgroundColor: props.isBackground ? COLORS.primary : "#F6F6F6",
      zIndex: props.zIndex,
      top: props.id * 5,
      left: props.id * 5 - (window.width / 2),
      opacity: 1 - (props.id * 0.20)
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
    position: "absolute",
  },
});

export default HabitStackView;