import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const logo = require("../assets/images/dinetimelogo.png");

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />

          <TouchableOpacity
            onPress={() => router.push("/(auth)/signup")}
            className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg "
          >
            <Text className="text-lg font-semibold text-center">Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/home")}
            className="p-2 my-2 bg-[#2b2b2b] border border-[#f49b33] rounded-lg max-w-fit "
          >
            <Text className="text-lg font-semibold text-[#f49b33] text-center">
              Guest user
            </Text>
          </TouchableOpacity>
        </View>
        <View>
            <Text className="text-center text-base  font-semibold my-4 text-white">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>

            <TouchableOpacity
              className="flex flex-row justify-center items-center"
              onPress={() => router.push("/(auth)/signin")}
            >
              <Text className="text-white font-semibold">Already a User? </Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">
                Sign in
              </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
