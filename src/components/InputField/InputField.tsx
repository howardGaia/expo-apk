import { Dispatch, FC, SetStateAction } from "react";
import { Text, TextInput, View } from "react-native";

interface InputFieldProps {
  label?: string;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string>>;
  placeHolder?: string;
  type?: "number" | "string";
  disabled?: boolean;
  errorHelper?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  value,
  setValue,
  placeHolder = "e.g text",
  type = "string",
  disabled = false,
  errorHelper,
}) => {
  return (
    <View>
      {label && (
        <View>
          <Text className="text-primary-main">{label}</Text>
        </View>
      )}

      <TextInput
        editable={!disabled}
        selectTextOnFocus={!disabled}
        className={`
        py-1 px-2 my-1
        border rounded border-primary-main
        text-primary-main
        focus:border-red-400
        focus:text-stone-50
        ${disabled ? "opacity-40" : ""}
        `}
        selectionColor={"#dd68ac"}
        placeholder={placeHolder}
        placeholderTextColor={"#dd68ac"}
        value={value}
        // numeric will default keyboard to number pad
        keyboardType={type === "number" ? "numeric" : "default"}
        onChangeText={(val) => setValue(val)}
      />
      {errorHelper && <Text className="text-rose-600">{errorHelper}</Text>}
    </View>
  );
};

export default InputField;
