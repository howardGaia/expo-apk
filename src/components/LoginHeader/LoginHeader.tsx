import { Text, TouchableOpacity, View } from "react-native";

const LoginHeader = () => {
  return (
    <View className="flex flex-row border border-pink-400 rounded">
      <TouchableOpacity className="p-2 rounded">
        <Text className="text-pink-400 ">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-2 rounded bg-primary-light">
        <Text className="text-stone-50">Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginHeader;
