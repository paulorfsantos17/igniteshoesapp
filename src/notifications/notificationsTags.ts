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

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag('cart_items_count', itemsCount)
}