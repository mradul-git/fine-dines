import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const logo = require("../../assets/images/dinetimelogo.png");
import { Formik } from "formik";
import validationSchema from "../../utils/authSchema";

const Signup = () => {
  const router = useRouter();
  const handleSignin = () => {};

  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />

          <Text className="text-lg text-center text-white  font-bold mb-10">
            Lets get u started
          </Text>
        </View>

        <View className="w-5/6">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema} // Replace with your actual schema
            onSubmit={handleSignin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View className="w-full">
                <Text className="text-[#f49b33] mt-4 mb-2">Email</Text>
                <TextInput
                  className="h-10
                    border
                    border-white
                    text-white
                    rounded
                    px-2"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />

                {touched.email && errors.email && (
                  <Text className="text-red-500 text-xs mb-2">
                    {errors.email}
                  </Text>
                )}
                <Text className="text-[#f49b33] mt-4 mb-2">Password</Text>
                <TextInput
                  className="h-10
                border
                border-white
                text-white
                rounded
                px-2"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                />

                {touched.password && errors.password && (
                  <Text className="text-red-500 text-xs mb-2">
                    {errors.password}
                  </Text>
                )}

                <TouchableOpacity
                  onPress={handleSubmit}
                  className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg "
                >
                  <Text className="text-lg font-semibold text-center">
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          <View>
            <TouchableOpacity
              className="flex flex-row justify-center my-5 p-2 items-center"
              onPress={() => router.push("/signup")}
            >
              <Text className="text-white font-semibold">New User </Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
