import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex bg-gray-900 h-full">
      <View className="flex h-3/6 relative">
        <ImageGallery />
      </View>
      <View className="p-5">
        <Text className="text-pink-400 text-lg font-bold">Sakura Original</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
