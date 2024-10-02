import { OneSignal } from "react-native-onesignal";

export async function tagUserInfoCreate() {

  try {
    OneSignal.User.addTags({
      user_name: "Maria",
      user_email: "paulo@example.com",
    })
  } catch (err) {
  console.log("🚀 ~ tagUserInfoCreate ~ err:", err)
  }
}