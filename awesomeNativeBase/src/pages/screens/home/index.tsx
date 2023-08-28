import React from "react";
import { Box, FlatList, Heading, View } from "native-base";
import HomeBanner from "../../../components/HomeBanner";
import HomeBookItem from "../../../components/HomeBookItem";
import { HomeProps } from "../../bottomNavigation";
import type { Book } from "../../../@types/bookType";

export default function Home({ navigation }: HomeProps): React.JSX.Element {
  const [books, setBooks] = React.useState<Book[]>([]);

  const fetchData = (): Book[] => {
    return require("./books");
  };

  React.useEffect((): void => {
    const data: Book[] = fetchData();
    setBooks(data);
  }, []);

  return (
    <Box bg="warmGray.100" flex={1} safeAreaTop width="100%">
      <HomeBanner />
      <View>
        <Heading size="md" p="5" pb="5" color="primary.900">
          모든 단어장
        </Heading>
      </View>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <HomeBookItem
            book={item}
            onPress={() => {
              navigation.navigate("Category", {
                bookTitle: item.title,
              });
            }}
            key={item.id}
          />
        )}
      />
    </Box>
  );
}
