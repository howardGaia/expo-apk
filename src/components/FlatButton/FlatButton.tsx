import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FlatButtonProps {
  text: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const FlatButton: FC<FlatButtonProps> = ({
  text,
  onPress,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <View className="my-1">
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          className={`border rounded ${
            variant === "primary" ? "bg-primary-main" : ""
          } ${disabled ? "opacity-40" : ""} border-primary-main px-3 py-2`}
        >
          <Text
            className={`${
              variant === "primary" ? "text-stone-50" : "text-primary-main"
            } font-bold text-center uppercase`}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FlatButton;
