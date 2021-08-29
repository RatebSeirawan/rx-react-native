import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Main from "./src/Main";

const App: React.FC<any> = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Main />
    </SafeAreaView>
  );
};

export default App;
