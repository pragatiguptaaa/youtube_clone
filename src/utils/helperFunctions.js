import { liveChatNameList } from "./staticData";

export function generateRandomName() {
    return liveChatNameList[Math.floor(Math.random() * liveChatNameList.length)];
  }

  export function generateRandomMessage(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log(result)
    return result;
  }