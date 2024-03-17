import { Animated, Dimensions, View } from "react-native";

const { width } = Dimensions.get("screen");

const SliderPagination = ({
  pageNumber,
  scrollX,
}: {
  pageNumber: number;
  scrollX: Animated.Value;
}) => {
  const numberOfSlider = Array(pageNumber)
    .fill(undefined)
    .map((_, idx) => idx);

  return (
    <View className="flex flex-row w-full gap-2 justify-center">
      {numberOfSlider.map((_, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={idx}
            className="h-[12px] w-[12px] rounded bg-slate-400 opacity-60"
            style={[{ width: dotWidth }]}
          />
        );
      })}
    </View>
  );
};

export default SliderPagination;
