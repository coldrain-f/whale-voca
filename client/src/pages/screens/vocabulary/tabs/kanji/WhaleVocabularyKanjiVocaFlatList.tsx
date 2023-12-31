import React from "react";
import { FlatList, View } from "native-base";
import WhaleVocabularyKanjiVocaFlatListItem from "./WhaleVocabularyKanjiVocaFlatListItem";
import WhaleVocabularyKanjiVocaFlatListHeader from "./WhaleVocabularyKanjiVocaFlatListHeader";
import type { Book } from "../../../../../@types/bookType";

export default function WhaleVocabularyKanjiVocaFlatList() {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect((): void => {
    setBooks(require("../../books.json"));
  }, []);

  return (
    <FlatList
      // 디자인 피드백 반영
      bg="coolGray.200"
      _dark={{
        bg: "coolGray.900",
      }}
      flex={1}
      // ListHeaderComponent={<WhaleVocabularyKanjiVocaFlatListHeader />}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={() => {}}
      refreshing={false}
      data={books}
      renderItem={({ item }) => {
        return <WhaleVocabularyKanjiVocaFlatListItem book={item} />;
      }}
    />
  );
}
