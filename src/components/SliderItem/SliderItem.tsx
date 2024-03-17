import { Dimensions, Image, ImageProps, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("screen");

const SliderItem = ({
  item,
}: {
  item: { text: string; imageSrc: ImageProps };
}) => {
  return (
    <View style={styles.container}>
      <Image source={item.imageSrc} resizeMode="contain" style={styles.image} />
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.5,
    width: "100%",
  },
});
