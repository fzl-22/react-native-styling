import React from "react";
import { NativeBaseProvider, Center } from "native-base";

const NativeBaseExample = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>Hello world</Center>
    </NativeBaseProvider>
  );
};

export default NativeBaseExample;