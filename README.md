# Laporan Praktikum Modul 5 : Styling React Native

| Nama | Ahmad Mu'min Faisal |
| -- | -- |
| NIM | 1203210101 |
| Kelas | IF-01-01 |


Kredensial nama dan NIM terdapat pada komponen `TodoList`.

## 1. Persiapan 

Buat sebuah project Expo dengan perintah:

```bash
npx create-expo-app styling-react-native
```

Masuk ke direktori project:

```bash
cd styling-react-native
```

Setelah itu, jalankan project Expo dengan perintah:

```bash
npm run android
```

Dengan ini, project awal Expo berhasil dijalankan.

## 2. Source Code

### 2.1 App

File `App.js` merupakan root component ketika aplikasi Expo dijalankan. Komponen ini berisi komponen `StatusBar` dan komponen lain yang terdapat pada direktori `screens`, lebih tepatnya pada komponen yang di-export dari `index.js`.

Nantinya, tanda komentar akan diubah-ubah sesuai dengan komponen yang ada untuk mempelajarinya masing-masing. 

File `App.js`:

```jsx
import React from "react";
import { StatusBar } from "react-native";
import {
  AlignItemsLayout,
  DirectionLayout,
  DisplayAnImageWithStyle,
  FixedDimensionsBasics,
  Flex,
  FlexDimensionsBasics,
  FlexDirectionBasics,
  JustifyContentBasics,
  LotsOfStyles,
  NativeBaseExample,
  PercentageDimensionsBasics,
  PositionLayout,
  TodoList,
  WidthHeightBasics,
} from "./screens";

const App = () => {
  return (
    <>
      <StatusBar style={{ padding: 0 }} />
      /* panggil komponen Lainnya juga di sini */
    </>
  );
};

export default App;
```

### 2.2 Komponen-Komponen

Buat komponen-komponen di bawah ini pada direktori `screens`:

#### 2.2.1 AlignItemsLayout

![](./assets/proposal/1.%20align_items_layout.png)

Di dalam komponen ini, terdapat 5 tombol yang akan menampilkan tipe-tipe layout alignment di React Native, yaitu stretch, flex-start, flex-end, center, dan baseline. Ketika

File `align_items_layout.js`:

```jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState("stretch");

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      setSelectedValue={setAlignItems}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: "steelblue",
            width: "auto",
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignItemsLayout;

```

#### 2.2.2 FixedDimensionsBasics

![](./assets/proposal/2.%20fixed_dimesions_basics.png)

Pada komponen ini, terdapat 3 view yang menampilkan kotak dengan ukuran yang tetap dalam satuan pixel. Tiga view tersebut menunjukkan bahwa komponen bisa diatur secara `fixed`.

File `fixed_dimesions_basics.js`:

```jsx
import React from "react";
import { View } from "react-native";

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "powderblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: "steelblue",
        }}
      />
    </View>
  );
};

export default FixedDimensionsBasics;

```

#### 2.2.3 FlexDimensionsBasics

![](./assets/proposal/3.%20flex_dimensions_basics.png)

Pada komponen ini, terdapat terdapat 3 kotak yang ukurannya bergantung pada `flex`. Flex yang dimaksud adalah berapa proporsi suatu komponen terhadap komponen lainnya dalam 1 ruang. Apabila pada komponen ini, kotak pertama, kedua, dan ketiga menempati proporsi 1:6, 2:6, dan 3:6 secara berturut-turut. 

File `flex_dimensions_basics.js`:

```jsx
import React from "react";
import { View } from "react-native";

const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
};

export default FlexDimensionsBasics;

```

#### 2.2.4 FlexDirectionBasics

![](./assets/proposal/4.%20flex_direction_basics.png)

Komponen ini menampilkan arah flex, yaitu `column`, `row`, `column-reverse`, dan `row-reverse`. Arah flex yang dimaksud adalah arah dari susunan komponen terdadap komponen yang terdapat dalam komponen tersebut.

File `flex_direction_basics.js`:

```jsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;

```

#### 2.2.5 Flex

![](./assets/proposal/5.%20flex.png)

Komponen ini berisi 3 kotak dalam susunan kolom. Ketiga kotak ini masing-masing menempati proporsi tempat 1:6, 2:6, dan 3:6 karena memiliki nilai flex 1, 2, dan 3 di masing-masing kotaknya.

File `flex.js`:

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
```

#### 2.2.6 ImageResizeMode

![](./assets/proposal/6.%20image_resize_mode.png)

Komponen ini menunjukkan mode-mode ukuran di React Native, yaitu:

1. `cover`: Mode ini tidak mengubah skala gambar, tapi akan memotong gambar sesuai dengan containernya.
2. `contain`: Mode ini tidak mengubah skala gambar, tapi tidak memotong gambar. Tetapi tidak mengikuti ukuran containernya.
3. `stretch`: Mode ini elastis, dapat menyesuaikan ukuran container tapi akan mengubah skala gambar.
4. `repeat`: Mode ini akan mengulangi penampilan gambar secukupnya sesuai ukuran container.
5. `center`: Mode ini akan membuat gambar berada di tengah-tengah container.

File `image_resize_mode.js`:

```jsx
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            resizeMode: "cover",
            height: 100,
            width: 200,
          }}
          source={require("../assets/images/js.png")}
        />
        <Text>resizeMode : cover</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200,
          }}
          source={require("../assets/images/js.png")}
        />
        <Text>resizeMode : contain</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "stretch",
            height: 100,
            width: 200,
          }}
          source={require("../assets/images/js.png")}
        />
        <Text>resizeMode : stretch</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "repeat",
            height: 100,
            width: 200,
          }}
          source={require("../assets/images/js.png")}
        />
        <Text>resizeMode : repeat</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: "center",
            height: 100,
            width: 200,
          }}
          source={require("../assets/images/js.png")}
        />
        <Text>resizeMode : center</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
});

export default DisplayAnImageWithStyle;

```

#### 2.2.7 JustifyContentBasics

![](./assets/proposal/7.%20justify_content_basics.png)

Komponen ini menunjukkan mode-mode alignment di React Native. Maksud dari mode alignment adalah aturan bagaimana suatu deretan komponen disusun. Terdapat beberapa alignment dalam komponen ini, yaitu:

1. `flex-start`: Komponen disusun dari awal container (kiri / atas)
2. `flex-end`: Komponen disusun dari akhir container (kanan / bawah)
3. `center`: Komponen disusun dari tengah container
4. `space-between`: komponen disusun dengan jarak imbang antar container di bagian dalam.
5. `space-around`: komponen disusun dengan jarak imbang yang membungkus container.
6. `space-evenly`: komponen disusun dengan jarak imbang di bagian dalam dan bagian luarnya.

File `justify_content_basics.js`:

```jsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;
```

#### 2.2.8 LotsOfStyles

![](./assets/proposal/8.%20lots_of_styles.png)

Komponen ini menunjukkan banyaknya style font yang dapat dengan mudah diatur menggunakan CSS.

File `lots_of_style.js`:

```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default LotsOfStyles;

```

#### 2.2.9 NativeBaseExample

![](./assets/proposal/9.%20native_base_example.png)

Komponen ini adalah salah satu library yang berisi komponen yang siap pakai di React Native.

File `native_base_example.js`:

```jsx
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
```

#### 2.2.10 PercentageDimensionsBasics

![](./assets/proposal/10.%20percentage_dimensions_basics.png)

Komponen ini menunjukkan 3 komponen kotak yang berbeda ukuran berdasarkan persentase. Dengan menggunakan persentase, maka ukuran komponen akan menyesuaikan container / ukuran layarnya. Hal ini bisa jadi akan membuat aplikasi semakin menambah responsivitas.

File `percentage_dimensions_basics.js`:

```jsx
import React from "react";
import { View } from "react-native";

const PercentageDimensionsBasics = () => {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: "15%",
          backgroundColor: "powderblue",
        }}
      />
      <View
        style={{
          width: "66%",
          height: "35%",
          backgroundColor: "skyblue",
        }}
      />
      <View
        style={{
          width: "33%",
          height: "50%",
          backgroundColor: "steelblue",
        }}
      />
    </View>
  );
};

export default PercentageDimensionsBasics;
```

#### 2.2.11 PositionLayout

![](./assets/proposal/11.%20position_layout.png)

Komponen ini menunjukkan beberapa layout posisi dalam React Native, yaitu:

1. `absolute`: layout ini membuat komponen memiliki posisi absolut terhadap pixel.
2. `relative`: layout ini membuat komponen memiliki posisi relatif terhadap komponen lain. 

File `position_layout.js`:

```jsx
import { useState } from "react";

import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const PositionLayout = () => {
  const [position, setPosition] = useState("relative");

  return (
    <PreviewLayout
      label="position"
      selectedValue={position}
      values={["relative", "absolute"]}
      setSelectedValue={setPosition}
    >
      <View
        style={[
          styles.box,
          {
            top: 25,
            left: 25,
            position,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 50,
            left: 50,
            position,
            backgroundColor: "skyblue",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 75,
            left: 75,
            position,
            backgroundColor: "steelblue",
          },
        ]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default PositionLayout;
```

#### 2.2.12 TodoList

![](./assets/proposal/12.%20todo_list.png)

Komponen `TodoList` merupakan komponen yang berisi aplikasi sederhana Todo List. Pada komponen ini, secara umum terdiri dari 3 bagian, yaitu:

1. Heading: komponen ini hanya berisi komponen `Heading` yang bertuliskan teks "Wednesday".
2. Body: komponen ini dibungkus oleh komponen `VStack` yang terdiri dari dari 2 child component, yaitu bagian Input dan List Item.

Komponen yang pertama dalam Body berupa komponen `HStack` yang berisi `Input` dan `IconButton`. Komponen `Input` diisi kemudian `IconButton` ditekan, maka aplikasi akan menjalankan handler `addItem` yang dapat menambahkan item ke bagian List Item sekaligus memperbarui state aplikasi.

Sedangkan, komponen yang kedua dalam Body berupa komponen `VStack` yang berisi kolom dari data di List Item. Setiap item dapat di-klik sehingga menampilkan centang dari checkbox bahwa Item telah dipilih. Apabila tombol `-` di-klik, maka Item yang berkaitan akan terhapus sekaligus memperbarui state aplikasi.

File `screens/todo_list.js`:

```jsx
import React from "react";
import {
  Input,
  Button,
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  Box,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5, Feather, Entypo } from "@expo/vector-icons";

const TodoList = () => {
  const initState = [
    { title: "Code", isCompleted: true },
    { title: "Meeting with team at 9", isCompleted: false },
    { title: "Check Emails", isCompleted: false },
    { title: "Write an article", isCompleted: false },
  ];
  const [list, setList] = React.useState(initState);
  const [inputValue, setInputValue] = React.useState("");

  const addItem = (title) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
      itemI !== index
        ? item
        : {
            ...item,
            isCompleted: !item.isCompleted,
          }
    );
    setList(temp);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box>
          <Heading mb="5">Wednesday</Heading>
          <VStack space={4}>
            <HStack space={2}>
              <Input
                flex={1}
                onChangeText={(v) => setInputValue(v)}
                value={inputValue}
                placeholder="Add Task"
              />
              <IconButton
                borderRadius="sm"
                variant="solid"
                icon={
                  <Icon
                    as={Feather}
                    name="plus"
                    size="sm"
                    color="warmGray.50"
                  />
                }
                onPress={() => {
                  addItem(inputValue);
                  setInputValue("");
                }}
              />
            </HStack>
            <VStack space={2}>
              {list.map((item, itemI) => (
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.title + itemI.toString()}
                >
                  <Checkbox
                    isChecked={item.isCompleted}
                    onChange={() => handleStatusChange(itemI)}
                    value={item.title}
                  >
                    <Text
                      mx="2"
                      strikeThrough={item.isCompleted}
                      _light={{
                        color: item.isCompleted ? "gray.400" : "coolGray.800",
                      }}
                      _dark={{
                        color: item.isCompleted ? "gray.400" : "coolGray.50",
                      }}
                    >
                      {item.title}
                    </Text>
                  </Checkbox>
                  <IconButton
                    size="sm"
                    colorScheme="trueGray"
                    icon={
                      <Icon
                        as={Entypo}
                        name="minus"
                        size="xs"
                        color="trueGray.400"
                      />
                    }
                    onPress={() => handleDelete(itemI)}
                  />
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default TodoList;
```

#### 2.2.13 WidthHeightBasics

![](./assets/proposal/13.%20width_height_basics.png)

Komponen ini berisi komponen tombol yang dapat merubah bagaimana lebar dan tinggi komponen bisa diatur dalam mode `auto`, pixel, dan persentase.

File `width_height_basics.js`:

```jsx
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const WidthHeightBasics = () => {
  const [widthType, setWidthType] = useState("auto");
  const [heightType, setHeightType] = useState("auto");

  return (
    <PreviewLayout
      widthType={widthType}
      heightType={heightType}
      widthValues={["auto", 200, "80%"]}
      heightValues={["auto", 200, "60%"]}
      setWidthType={setWidthType}
      setHeightType={setHeightType}
    >
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "aliceblue",
          height: heightType,
          width: widthType,
          padding: 15,
        }}
      >
        <View style={[styles.box, { backgroundColor: "powderblue" }]} />
        <View style={[styles.box, { backgroundColor: "skyblue" }]} />
        <View style={[styles.box, { backgroundColor: "steelblue" }]} />
      </View>
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  children,
  widthType,
  heightType,
  widthValues,
  heightValues,
  setWidthType,
  setHeightType,
}) => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <View style={styles.row}>
      <Text style={styles.label}>width </Text>
      {widthValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setWidthType(value)}
          style={[styles.button, widthType === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              widthType === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>height </Text>
      {heightValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setHeightType(value)}
          style={[styles.button, heightType === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              heightType === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginRight: 10,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: "coral",
    shadowOpacity: 0,
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default WidthHeightBasics;
```

### 2.3 index.js

Setelah semua komponen telah dibuat, buatlah file `index.js` di dalam direktori `screens` untuk melakukan export semua komponen yang ada di direktori `screens` sehingga bisa dengan mudah di-import dari komponen `App`:

File `index.js`:

```jsx
import LotsOfStyles from "./lots_of_styles";
import FixedDimensionsBasics from "./fixed_dimensions_basics";
import FlexDimensionsBasics from "./flex_dimension_basics";
import PercentageDimensionsBasics from "./percentage_dimensions_basics";
import Flex from "./flex";
import FlexDirectionBasics from "./flex_direction_basics";
import JustifyContentBasics from "./justify_content_basics";
import AlignItemsLayout from "./align_items_layout";
import WidthHeightBasics from "./width_height_basics";
import PositionLayout from "./position_layout";
import DisplayAnImageWithStyle from "./image_resize_mode";
import NativeBaseExample from "./native_base_example";
import TodoList from "./todo_list";

export {
  LotsOfStyles,
  FixedDimensionsBasics,
  FlexDimensionsBasics,
  PercentageDimensionsBasics,
  Flex,
  FlexDirectionBasics,
  JustifyContentBasics,
  AlignItemsLayout,
  WidthHeightBasics,
  PositionLayout,
  DisplayAnImageWithStyle,
  NativeBaseExample,
  TodoList,
};
```