import LoginHeader from "@/components/LoginHeader/LoginHeader";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Text } from "react-native";

const Layout = () => {
  const myTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#DD68AC",
      background: "#191d25",
    },
  };

  return (
    <ThemeProvider value={myTheme}>
      <Stack
        screenOptions={{
          // toDo : change this to icon
          headerTitle: () => (
            <Text className="text-primary-main">Sakura688</Text>
          ),
          headerTitleAlign: "left",
          headerRight: () => <LoginHeader />,
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default Layout;
