import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "sakura688_local",
  slug: "sakura688_local",
  scheme: "sakura688_local",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "light",
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  plugins: [["expo-router"]],
});
