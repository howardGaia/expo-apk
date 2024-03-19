import Card from "@/components/Card/Card";
import FlatButton from "@/components/FlatButton/FlatButton";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import InputField from "@/components/InputField/InputField";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();

  const [name, setName] = useState("Text");
  const [disabledText, setDisabledText] = useState("disabled");
  const [age, setAge] = useState("2");
  const [secondaryAge, setSecondaryAge] = useState("2");

  const error = "Error";

  return (
    <SafeAreaView className="flex bg-gray-900">
      <ScrollView>
        <ImageGallery />
        <Card>
          <Text className="text-white">Sakura Original</Text>
          <InputField value={name} setValue={setName} label="Text" />
          <InputField
            value={disabledText}
            setValue={setDisabledText}
            disabled
            label="Disabled text"
          />
          <InputField
            value={age}
            setValue={setAge}
            type="number"
            label="Text"
          />
          <InputField
            value={secondaryAge}
            setValue={setSecondaryAge}
            type="number"
            errorHelper={error}
          />
          <FlatButton
            text="Primary"
            variant="primary"
            onPress={() => {
              console.log("test");
            }}
          />
          <FlatButton
            text="Secondary"
            variant="secondary"
            onPress={() => {
              console.log("test");
            }}
          />
          <FlatButton
            text="Primary Disabled"
            variant="primary"
            onPress={() => {
              console.log("test");
            }}
            disabled={true}
          />
          <FlatButton
            text="Secondary Disabled"
            variant="secondary"
            onPress={() => {
              console.log("test");
            }}
            disabled={true}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
