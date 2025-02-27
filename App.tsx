import { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Rive, { Fit, RiveRef } from "rive-react-native";

export default function App() {
  const riveRef = useRef<RiveRef>(null);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  function changeAnimation(isTyping: boolean) {
    riveRef.current?.setInputState("State Machine 1", "Boolean 1", isTyping);
  }
  
  return (
    <View style={styles.container}>
      <Rive
        ref={riveRef}
        resourceName="password_input"
        style={{
          width: "100%",
          maxHeight: 400,
        }}
        autoplay={true}
        fit={Fit.Cover}
      />

      <TextInput
        placeholder="seunome@email.com"
        style={[styles.input, isEmailFocused && styles.inputFocused]}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
      />
      <TextInput
        placeholder="sua senha"
        style={[styles.input, isPasswordFocused && styles.inputFocused]}
        secureTextEntry
        onFocus={() => {changeAnimation(true); setIsPasswordFocused(true)}}
        onBlur={() => {changeAnimation(false); setIsPasswordFocused(false)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 16,
  },
  input: {
    width: "100%",
    height: 52,
    borderColor: "#CECECE",
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
  },
  inputFocused: {
    borderColor: "#4FD85B"
  },
});

// npx expo install expo-custom-assets.
// puglin adicionado em app.json.
