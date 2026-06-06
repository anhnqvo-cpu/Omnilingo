export interface Character {
  char: string;
  reading: string;
  example?: string;
  strokes: number;
}

export interface CharacterGroup {
  id: string;
  name: string;
  nameJapanese: string;
  script: "hiragana" | "katakana" | "kanji";
  description: string;
  characters: Character[];
}

export const characterGroups: CharacterGroup[] = [
  {
    id: "wg1",
    name: "Hiragana - Vowels",
    nameJapanese: "ひらがな - 母音",
    script: "hiragana",
    description: "The 5 fundamental vowel sounds in Japanese. Master these first.",
    characters: [
      { char: "あ", reading: "a", example: "あめ (rain)", strokes: 3 },
      { char: "い", reading: "i", example: "いぬ (dog)", strokes: 2 },
      { char: "う", reading: "u", example: "うみ (sea)", strokes: 2 },
      { char: "え", reading: "e", example: "えき (station)", strokes: 2 },
      { char: "お", reading: "o", example: "おと (sound)", strokes: 3 },
    ],
  },
  {
    id: "wg2",
    name: "Hiragana - K Row",
    nameJapanese: "ひらがな - か行",
    script: "hiragana",
    description: "The K-sound hiragana: か・き・く・け・こ",
    characters: [
      { char: "か", reading: "ka", example: "かさ (umbrella)", strokes: 3 },
      { char: "き", reading: "ki", example: "きれい (beautiful)", strokes: 4 },
      { char: "く", reading: "ku", example: "くち (mouth)", strokes: 1 },
      { char: "け", reading: "ke", example: "けが (injury)", strokes: 3 },
      { char: "こ", reading: "ko", example: "こえ (voice)", strokes: 2 },
    ],
  },
  {
    id: "wg3",
    name: "Hiragana - S Row",
    nameJapanese: "ひらがな - さ行",
    script: "hiragana",
    description: "The S-sound hiragana: さ・し・す・せ・そ",
    characters: [
      { char: "さ", reading: "sa", example: "さくら (cherry blossom)", strokes: 3 },
      { char: "し", reading: "shi", example: "しお (salt)", strokes: 1 },
      { char: "す", reading: "su", example: "すし (sushi)", strokes: 2 },
      { char: "せ", reading: "se", example: "せかい (world)", strokes: 3 },
      { char: "そ", reading: "so", example: "そら (sky)", strokes: 1 },
    ],
  },
  {
    id: "wg4",
    name: "Hiragana - T Row",
    nameJapanese: "ひらがな - た行",
    script: "hiragana",
    description: "The T-sound hiragana: た・ち・つ・て・と",
    characters: [
      { char: "た", reading: "ta", example: "たべる (to eat)", strokes: 4 },
      { char: "ち", reading: "chi", example: "ちず (map)", strokes: 2 },
      { char: "つ", reading: "tsu", example: "つき (moon)", strokes: 1 },
      { char: "て", reading: "te", example: "てがみ (letter)", strokes: 2 },
      { char: "と", reading: "to", example: "とり (bird)", strokes: 2 },
    ],
  },
  {
    id: "wg5",
    name: "Katakana - Vowels",
    nameJapanese: "カタカナ - 母音",
    script: "katakana",
    description: "Katakana vowels. Used for foreign words, loanwords, and emphasis.",
    characters: [
      { char: "ア", reading: "a", example: "アイス (ice cream)", strokes: 2 },
      { char: "イ", reading: "i", example: "イタリア (Italy)", strokes: 2 },
      { char: "ウ", reading: "u", example: "ウイスキー (whiskey)", strokes: 3 },
      { char: "エ", reading: "e", example: "エアコン (air conditioner)", strokes: 3 },
      { char: "オ", reading: "o", example: "オレンジ (orange)", strokes: 3 },
    ],
  },
  {
    id: "wg6",
    name: "Basic Kanji - Numbers",
    nameJapanese: "基本漢字 - 数字",
    script: "kanji",
    description: "The essential number kanji. These appear everywhere in daily life.",
    characters: [
      { char: "一", reading: "ichi / one", example: "一日 (one day)", strokes: 1 },
      { char: "二", reading: "ni / two", example: "二人 (two people)", strokes: 2 },
      { char: "三", reading: "san / three", example: "三月 (March)", strokes: 3 },
      { char: "四", reading: "shi/yon / four", example: "四季 (four seasons)", strokes: 5 },
      { char: "五", reading: "go / five", example: "五円 (5 yen)", strokes: 4 },
      { char: "六", reading: "roku / six", example: "六月 (June)", strokes: 4 },
      { char: "七", reading: "nana/shichi / seven", example: "七夕 (Tanabata)", strokes: 2 },
      { char: "八", reading: "hachi / eight", example: "八月 (August)", strokes: 2 },
      { char: "九", reading: "ku/kyuu / nine", example: "九時 (9 o'clock)", strokes: 2 },
      { char: "十", reading: "juu / ten", example: "十月 (October)", strokes: 2 },
    ],
  },
  {
    id: "wg7",
    name: "Basic Kanji - Nature",
    nameJapanese: "基本漢字 - 自然",
    script: "kanji",
    description: "Nature kanji that appear frequently in everyday language.",
    characters: [
      { char: "日", reading: "nichi/hi / sun, day", example: "日本 (Japan)", strokes: 4 },
      { char: "月", reading: "getsu/tsuki / moon, month", example: "月曜日 (Monday)", strokes: 4 },
      { char: "火", reading: "ka/hi / fire", example: "火曜日 (Tuesday)", strokes: 4 },
      { char: "水", reading: "sui/mizu / water", example: "水曜日 (Wednesday)", strokes: 4 },
      { char: "木", reading: "moku/ki / tree, wood", example: "木曜日 (Thursday)", strokes: 4 },
      { char: "金", reading: "kin/kane / gold, money", example: "金曜日 (Friday)", strokes: 8 },
      { char: "土", reading: "do/tsuchi / earth, soil", example: "土曜日 (Saturday)", strokes: 3 },
      { char: "山", reading: "san/yama / mountain", example: "富士山 (Mt. Fuji)", strokes: 3 },
    ],
  },
];
