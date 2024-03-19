import { FC, PropsWithChildren } from "react";
import { View } from "react-native";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="border rounded border-primary-main mx-1 my-2 shadow-primary-main">
      <View className="mx-2 my-4">{children}</View>
    </View>
  );
};

export default Card;
