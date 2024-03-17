import LoginHeader from "@/components/LoginHeader/LoginHeader";
import { Stack } from "expo-router";
import { Text } from "react-native";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        // toDo : change this to icon
        headerTitle: () => <Text className="text-pink-400">Sakura688</Text>,
        headerTitleAlign: "left",
        headerRight: () => <LoginHeader />,
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    />
  );
};

export default Layout;
