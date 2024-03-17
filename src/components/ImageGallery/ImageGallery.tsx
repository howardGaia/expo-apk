import SliderItem from "@/components/SliderItem/SliderItem";
import SliderPagination from "@/components/SliderPagination/SliderPagination";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";

export const ImageGallery = () => {
  const imageGallery = [
    {
      text: "Welcome Bonus - 100% Deposit",
      imageSrc: require("@/assets/img/home/sakura-sports-deposit-mobile.webp"),
    },
    {
      text: "New Deposit Method - Crypto USDT",
      imageSrc: require("@/assets/img/home/sakura-crypto-deposit-mobile.webp"),
    },
  ];

  const flatListRef = useRef<FlatList | null>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageGallery.length);
    }, 5 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View className="flex h-full w-full">
      <FlatList
        ref={flatListRef}
        data={imageGallery}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
      <View className="absolute bottom-5 w-full">
        <SliderPagination pageNumber={imageGallery.length} scrollX={scrollX} />
      </View>
    </View>
  );
};
