import styled from "styled-components/native";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: "#768A96",
  secondary: "#E6E6E6",
  tertiary: "#29353C",
  quaternary: "#1F2937",
  darkLight: "#9CA3AF",
  blue: "#00008B",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, quaternary, tertiary, darkLight, secondary } = Colors;

export const StartLogo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const DetailedHistoryStyledContainer = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
`;

export const InnerStyledContainer = styled.View`
  width: 90%;
  background-color: ${Colors.secondary};
  border-radius: 10px;
  padding: 25px;
  justify-content: center;
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  margin-vertical: 30px;
  align-items: center;
  justify-content: center;
`;

export const ScrollableContainer = styled.ScrollView`
  background-color: ${Colors.primary};
  justifycontent: "center";
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.secondary};
  padding: 10px;
`;

export const Spacer = styled.Text`
  font-size: 8px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

// Suggestion: change height to 40px. Update the following icons and placeholder size as well.
// Change the style using FROSTED color pal
export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 12px;
  padding-left: 55px;
  padding-right: 20px;
  border-radius: 15px;
  font-size: 17px;
  height: 50px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledText = styled.Text`
  font-size: 18px;
  color: #e6e6e6;
  font-weight: bold;
`;

export const StyledTextDark = styled.Text`
  font-size: 18px;
  color: #29353c;
  font-weight: bold;
`;

export const StyledInputLabel = styled.Text`
  color: ${secondary};
  font-size: 15px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  position: absolute;
  left: 15px;
  top: 33px;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 33px;
  position: absolute;
  z-index: 1;
`;

export const MsgBox = styled.Text<{ type: string }>`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == "ERROR" ? Colors.red : Colors.green)};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  backgroundcolor: lightgreen;
  borderradius: 20px;
  padding: 35px;
  alignitems: center;
  shadowcolor: #000;
  shadowopacity: 0.25;
  shadowradius: 4px;
  elevation: 5;
`;

/**
 * 
  shadowOffset: {
    width: 0px,
    height: 2px,
  };
 */
