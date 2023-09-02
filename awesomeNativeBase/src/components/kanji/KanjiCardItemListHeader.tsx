import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Progress,
  Text,
  View,
  useColorMode,
} from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function KanjiCardItemListHeader(): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <View
      p="5"
      mb="4"
      borderBottomWidth={1}
      borderColor="coolGray.400"
      bg="coolGray.100"
      _dark={{ bg: "#171E2E", borderColor: "white" }}
    >
      <Text
        color="primary.900"
        fontWeight="bold"
        fontSize="lg"
        _dark={{ color: "white" }}
      >
        {"초등학교 1학년 한자"}
      </Text>
      <Text
        color="coolGray.900"
        fontSize="md"
        mb="1"
        _dark={{ color: "coolGray.100" }}
      >
        학습 진척도: {((42 / 80) * 100).toFixed(1)}%
      </Text>
      <Flex direction="row">
        <Box w="60%" mt={2}>
          <Progress colorScheme="info" value={(42 / 80) * 100} size="sm" />
        </Box>
        <Box w="40%" ml={3}>
          <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
            {42} / {80}자
          </Text>
        </Box>
      </Flex>
      <Flex direction="row" mt={3}>
        <Box w="50%">
          <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
            {"학습완료 단어: "}
            <Text
              fontWeight="bold"
              color="info.700"
              _dark={{ color: "info.200" }}
            >
              {"420"}
            </Text>
            개
          </Text>
        </Box>
        <Box w="50%">
          <Text color="coolGray.900" _dark={{ color: "coolGray.100" }}>
            {"선택한 한자: "}
            <Text
              fontWeight="bold"
              color="info.700"
              _dark={{ color: "info.200" }}
            >
              {"0"}
            </Text>
            {"개"}
          </Text>
        </Box>
      </Flex>

      <Flex direction="row" mt={4}>
        <Box w="100%">
          <Button
            size="md"
            colorScheme="info"
            leftIcon={<Ionicon name="school" color="white" size={20} />}
          >
            학습 시작
          </Button>
        </Box>
      </Flex>
      <Flex direction="row" mt={4} justifyContent="space-between">
        <View flexDirection="row">
          <Button
            size="sm"
            variant="outline"
            colorScheme="coolGray"
            leftIcon={
              <Ionicon
                name="eye"
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
          >
            <Text
              color="coolGray.900"
              _dark={{
                color: "coolGray.200",
              }}
            >
              음독 보기
            </Text>
          </Button>
        </View>
        <View flexDirection="row">
          <Button
            size="sm"
            variant="outline"
            colorScheme="coolGray"
            leftIcon={
              <Ionicon
                name="eye"
                color={colorMode === "light" ? "gray" : "white"}
                size={20}
              />
            }
          >
            <Text
              color="coolGray.900"
              _dark={{
                color: "coolGray.200",
              }}
            >
              훈독 보기
            </Text>
          </Button>
        </View>
        <View flexDirection="row" alignItems="center">
          <Checkbox
            value="0"
            accessibilityLabel="This is a checkbox"
            mt={0.5}
          />
          <Text color="coolGray.900" pl={2} _dark={{ color: "coolGray.200" }}>
            전체 선택
          </Text>
        </View>
      </Flex>
    </View>
  );
}
