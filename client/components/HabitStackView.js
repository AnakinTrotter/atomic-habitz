import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { useState, useEffect } from "react";
import { COLORS } from "../constants/colors";
import { FONT } from "../constants/font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableHighlight } from "react-native-gesture-handler";

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
  const stackHeight = useState(new Animated.Value(styles.card.height + 5 * (props.habits.length + 1)))[0];
  const animationTime = 500;

  useEffect(() => {
    if (expanded) {
      Animated.spring(stackHeight, {
        toValue: styles.card.height * (props.habits.length + 1) + 5 * (props.habits.length + 1),
        duration: animationTime,
        useNativeDriver: false
      }).start();
    } else {
      Animated.spring(stackHeight, {
        toValue: styles.card.height + 5 * (props.habits.length + 1),
        duration: animationTime,
        useNativeDriver: false
      }).start();
    }
  }, [expanded])

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
          animationTime={animationTime}
          name={h.name}
        />
      );
    });
  };

  return (
    <TouchableWithoutFeedback onPress={tapHandler}>
      <Animated.View style={{...styles.container, height: stackHeight}}>
          <HabitCardView expanded={expanded} id={0} zIndex={props.habits.length + 1} title={props.title} streak={props.streak} />
        {createHabitStack()}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

HabitStackView.defaultProps = {
  zIndex: 1,
  opacity: 1.0,
  id: 0
};

function HabitCardView(props) {
  const leftVal = useState(new Animated.Value(props.id * 5))[0];
  const topVal = useState(new Animated.Value(props.id * 5))[0];
  const opacityVal = useState(new Animated.Value(1))[0];

  const animationTime = props.animationTime;

  useEffect(() => {
    if (props.expanded) {
      expandCard();
    } else {
      collapseCard();
    }
  }, [props.expanded]);

  const expandCard = () => {
    Animated.spring(leftVal, {
      toValue: 0,
      duration: animationTime / 2,
      useNativeDriver: false
    }).start();

    Animated.spring(topVal, {
      toValue: props.id * styles.card.height + props.id * 5,
      duration: animationTime,
      useNativeDriver: false
    }).start();

    Animated.spring(opacityVal, {
      toValue: 1,
      duration: animationTime,
      useNativeDriver: false
    }).start();
  };

  const collapseCard = () => {
    Animated.spring(leftVal, {
      toValue: props.id * 5,
      duration: animationTime / 2,
      useNativeDriver: false
    }).start();

    Animated.spring(topVal, {
      toValue: props.id * 5,
      duration: animationTime / 2,
      useNativeDriver: false
    }).start();

    Animated.spring(opacityVal, {
      toValue: 1 - props.id * 0.1,
      duration: animationTime,
      useNativeDriver: false
    }).start();
  };

  const textView = props.isBackground ?
  (
    <View style={styles.titleCard}>
     <Text style={ FONT.p1 }>{props.name}</Text>
    </View>
  ) : (
    <View style={styles.titleCard}>
      <Text style={ FONT.p1 }>{props.title}</Text>
      <View style={styles.streak}>
        <Icon color="#FB8B23" name="fire" size={45} style={{marginEnd: -5}} />
        <Text style={ FONT.p1 }>{props.streak || Math.floor(Math.random() * 10)}</Text>
      </View>
    </View>
  );

  return (
    <Animated.View
      style={{
        ...styles.card,
        backgroundColor: props.isBackground ? COLORS.primary : "#F6F6F6",
        zIndex: props.zIndex,
        left: leftVal,
        top: topVal,
        opacity: opacityVal
      }}>
      {textView}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 15
  },
  card: {
    width: 275,
    height: 100,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute"
  },
  titleCard: {
    margin: 15,
    justifyContent: "space-between"
  },
  streak: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default HabitStackView;
