export interface VocabCard {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
  exampleReading: string;
  exampleMeaning: string;
  tags: string[];
}

export const vocabulary: VocabCard[] = [
  { id: "v1", word: "食べる", reading: "たべる", meaning: "to eat", partOfSpeech: "verb", example: "ご飯を食べる。", exampleReading: "Gohan wo taberu.", exampleMeaning: "To eat rice/a meal.", tags: ["verbs", "daily"] },
  { id: "v2", word: "飲む", reading: "のむ", meaning: "to drink", partOfSpeech: "verb", example: "水を飲む。", exampleReading: "Mizu wo nomu.", exampleMeaning: "To drink water.", tags: ["verbs", "daily"] },
  { id: "v3", word: "行く", reading: "いく", meaning: "to go", partOfSpeech: "verb", example: "学校に行く。", exampleReading: "Gakkō ni iku.", exampleMeaning: "To go to school.", tags: ["verbs", "daily"] },
  { id: "v4", word: "来る", reading: "くる", meaning: "to come", partOfSpeech: "verb", example: "友達が来る。", exampleReading: "Tomodachi ga kuru.", exampleMeaning: "A friend comes.", tags: ["verbs", "daily"] },
  { id: "v5", word: "見る", reading: "みる", meaning: "to see / to watch", partOfSpeech: "verb", example: "映画を見る。", exampleReading: "Eiga wo miru.", exampleMeaning: "To watch a movie.", tags: ["verbs", "daily"] },
  { id: "v6", word: "聞く", reading: "きく", meaning: "to listen / to ask", partOfSpeech: "verb", example: "音楽を聞く。", exampleReading: "Ongaku wo kiku.", exampleMeaning: "To listen to music.", tags: ["verbs"] },
  { id: "v7", word: "話す", reading: "はなす", meaning: "to speak / to talk", partOfSpeech: "verb", example: "日本語を話す。", exampleReading: "Nihongo wo hanasu.", exampleMeaning: "To speak Japanese.", tags: ["verbs"] },
  { id: "v8", word: "書く", reading: "かく", meaning: "to write", partOfSpeech: "verb", example: "手紙を書く。", exampleReading: "Tegami wo kaku.", exampleMeaning: "To write a letter.", tags: ["verbs"] },
  { id: "v9", word: "読む", reading: "よむ", meaning: "to read", partOfSpeech: "verb", example: "本を読む。", exampleReading: "Hon wo yomu.", exampleMeaning: "To read a book.", tags: ["verbs"] },
  { id: "v10", word: "寝る", reading: "ねる", meaning: "to sleep", partOfSpeech: "verb", example: "十時に寝る。", exampleReading: "Jūji ni neru.", exampleMeaning: "To sleep at 10 o'clock.", tags: ["verbs", "daily"] },
  { id: "v11", word: "起きる", reading: "おきる", meaning: "to wake up", partOfSpeech: "verb", example: "六時に起きる。", exampleReading: "Roku-ji ni okiru.", exampleMeaning: "To wake up at 6 o'clock.", tags: ["verbs", "daily"] },
  { id: "v12", word: "買う", reading: "かう", meaning: "to buy", partOfSpeech: "verb", example: "本を買う。", exampleReading: "Hon wo kau.", exampleMeaning: "To buy a book.", tags: ["verbs", "shopping"] },
  { id: "v13", word: "水", reading: "みず", meaning: "water", partOfSpeech: "noun", example: "水を飲みます。", exampleReading: "Mizu wo nomimasu.", exampleMeaning: "I drink water.", tags: ["nouns", "food"] },
  { id: "v14", word: "食べ物", reading: "たべもの", meaning: "food", partOfSpeech: "noun", example: "日本の食べ物が好きです。", exampleReading: "Nihon no tabemono ga suki desu.", exampleMeaning: "I like Japanese food.", tags: ["nouns", "food"] },
  { id: "v15", word: "学校", reading: "がっこう", meaning: "school", partOfSpeech: "noun", example: "学校に行きます。", exampleReading: "Gakkō ni ikimasu.", exampleMeaning: "I go to school.", tags: ["nouns", "places"] },
  { id: "v16", word: "電車", reading: "でんしゃ", meaning: "train", partOfSpeech: "noun", example: "電車で行きます。", exampleReading: "Densha de ikimasu.", exampleMeaning: "I go by train.", tags: ["nouns", "transport"] },
  { id: "v17", word: "本", reading: "ほん", meaning: "book", partOfSpeech: "noun", example: "本を読みます。", exampleReading: "Hon wo yomimasu.", exampleMeaning: "I read a book.", tags: ["nouns"] },
  { id: "v18", word: "友達", reading: "ともだち", meaning: "friend", partOfSpeech: "noun", example: "友達と話す。", exampleReading: "Tomodachi to hanasu.", exampleMeaning: "To talk with a friend.", tags: ["nouns", "people"] },
  { id: "v19", word: "先生", reading: "せんせい", meaning: "teacher", partOfSpeech: "noun", example: "先生に質問する。", exampleReading: "Sensei ni shitsumon suru.", exampleMeaning: "To ask the teacher a question.", tags: ["nouns", "people"] },
  { id: "v20", word: "学生", reading: "がくせい", meaning: "student", partOfSpeech: "noun", example: "私は学生です。", exampleReading: "Watashi wa gakusei desu.", exampleMeaning: "I am a student.", tags: ["nouns", "people"] },
  { id: "v21", word: "大きい", reading: "おおきい", meaning: "big / large", partOfSpeech: "い-adj", example: "大きい犬がいます。", exampleReading: "Ōkii inu ga imasu.", exampleMeaning: "There is a big dog.", tags: ["adjectives"] },
  { id: "v22", word: "小さい", reading: "ちいさい", meaning: "small / little", partOfSpeech: "い-adj", example: "小さい猫がかわいい。", exampleReading: "Chiisai neko ga kawaii.", exampleMeaning: "Small cats are cute.", tags: ["adjectives"] },
  { id: "v23", word: "おいしい", reading: "おいしい", meaning: "delicious / tasty", partOfSpeech: "い-adj", example: "このラーメンはおいしい。", exampleReading: "Kono rāmen wa oishii.", exampleMeaning: "This ramen is delicious.", tags: ["adjectives", "food"] },
  { id: "v24", word: "かわいい", reading: "かわいい", meaning: "cute / adorable", partOfSpeech: "い-adj", example: "かわいい猫ですね。", exampleReading: "Kawaii neko desu ne.", exampleMeaning: "What a cute cat, isn't it.", tags: ["adjectives"] },
  { id: "v25", word: "難しい", reading: "むずかしい", meaning: "difficult", partOfSpeech: "い-adj", example: "日本語は難しいです。", exampleReading: "Nihongo wa muzukashii desu.", exampleMeaning: "Japanese is difficult.", tags: ["adjectives"] },
  { id: "v26", word: "簡単", reading: "かんたん", meaning: "easy / simple", partOfSpeech: "な-adj", example: "この問題は簡単です。", exampleReading: "Kono mondai wa kantan desu.", exampleMeaning: "This problem is easy.", tags: ["adjectives"] },
  { id: "v27", word: "きれい", reading: "きれい", meaning: "beautiful / clean", partOfSpeech: "な-adj", example: "きれいな花ですね。", exampleReading: "Kirei na hana desu ne.", exampleMeaning: "What a beautiful flower.", tags: ["adjectives"] },
  { id: "v28", word: "静か", reading: "しずか", meaning: "quiet / peaceful", partOfSpeech: "な-adj", example: "静かな場所で勉強する。", exampleReading: "Shizuka na basho de benkyō suru.", exampleMeaning: "To study in a quiet place.", tags: ["adjectives"] },
  { id: "v29", word: "今日", reading: "きょう", meaning: "today", partOfSpeech: "noun", example: "今日は何曜日ですか？", exampleReading: "Kyō wa nan-yōbi desu ka?", exampleMeaning: "What day is it today?", tags: ["time"] },
  { id: "v30", word: "明日", reading: "あした", meaning: "tomorrow", partOfSpeech: "noun", example: "明日、学校があります。", exampleReading: "Ashita, gakkō ga arimasu.", exampleMeaning: "There is school tomorrow.", tags: ["time"] },
  { id: "v31", word: "昨日", reading: "きのう", meaning: "yesterday", partOfSpeech: "noun", example: "昨日、映画を見ました。", exampleReading: "Kinō, eiga wo mimashita.", exampleMeaning: "Yesterday, I watched a movie.", tags: ["time"] },
  { id: "v32", word: "日本語", reading: "にほんご", meaning: "Japanese language", partOfSpeech: "noun", example: "日本語を勉強しています。", exampleReading: "Nihongo wo benkyō shite imasu.", exampleMeaning: "I am studying Japanese.", tags: ["nouns", "study"] },
  { id: "v33", word: "勉強する", reading: "べんきょうする", meaning: "to study", partOfSpeech: "verb", example: "毎日勉強します。", exampleReading: "Mainichi benkyō shimasu.", exampleMeaning: "I study every day.", tags: ["verbs", "study"] },
  { id: "v34", word: "わかる", reading: "わかる", meaning: "to understand", partOfSpeech: "verb", example: "日本語がわかりますか？", exampleReading: "Nihongo ga wakarimasu ka?", exampleMeaning: "Do you understand Japanese?", tags: ["verbs"] },
  { id: "v35", word: "好き", reading: "すき", meaning: "like / fond of", partOfSpeech: "な-adj", example: "音楽が好きです。", exampleReading: "Ongaku ga suki desu.", exampleMeaning: "I like music.", tags: ["adjectives"] },
  { id: "v36", word: "嫌い", reading: "きらい", meaning: "dislike", partOfSpeech: "な-adj", example: "野菜が嫌いです。", exampleReading: "Yasai ga kirai desu.", exampleMeaning: "I dislike vegetables.", tags: ["adjectives"] },
  { id: "v37", word: "高い", reading: "たかい", meaning: "expensive / tall", partOfSpeech: "い-adj", example: "このバッグは高いです。", exampleReading: "Kono baggu wa takai desu.", exampleMeaning: "This bag is expensive.", tags: ["adjectives", "shopping"] },
  { id: "v38", word: "安い", reading: "やすい", meaning: "cheap / inexpensive", partOfSpeech: "い-adj", example: "このレストランは安いです。", exampleReading: "Kono resutoran wa yasui desu.", exampleMeaning: "This restaurant is cheap.", tags: ["adjectives", "shopping"] },
  { id: "v39", word: "新しい", reading: "あたらしい", meaning: "new", partOfSpeech: "い-adj", example: "新しいスマホを買いました。", exampleReading: "Atarashii sumaho wo kaimashita.", exampleMeaning: "I bought a new smartphone.", tags: ["adjectives"] },
  { id: "v40", word: "古い", reading: "ふるい", meaning: "old (thing)", partOfSpeech: "い-adj", example: "古い建物があります。", exampleReading: "Furui tatemono ga arimasu.", exampleMeaning: "There is an old building.", tags: ["adjectives"] },
  { id: "v41", word: "家", reading: "いえ / うち", meaning: "house / home", partOfSpeech: "noun", example: "家に帰ります。", exampleReading: "Ie ni kaerimasu.", exampleMeaning: "I return home.", tags: ["nouns", "places"] },
  { id: "v42", word: "仕事", reading: "しごと", meaning: "work / job", partOfSpeech: "noun", example: "仕事をしています。", exampleReading: "Shigoto wo shite imasu.", exampleMeaning: "I am working.", tags: ["nouns", "work"] },
  { id: "v43", word: "音楽", reading: "おんがく", meaning: "music", partOfSpeech: "noun", example: "音楽を聞くのが好きです。", exampleReading: "Ongaku wo kiku no ga suki desu.", exampleMeaning: "I like listening to music.", tags: ["nouns", "hobbies"] },
  { id: "v44", word: "天気", reading: "てんき", meaning: "weather", partOfSpeech: "noun", example: "今日は天気がいいです。", exampleReading: "Kyō wa tenki ga ii desu.", exampleMeaning: "The weather is good today.", tags: ["nouns"] },
  { id: "v45", word: "時間", reading: "じかん", meaning: "time", partOfSpeech: "noun", example: "時間がありません。", exampleReading: "Jikan ga arimasen.", exampleMeaning: "I don't have time.", tags: ["nouns", "time"] },
  { id: "v46", word: "少し", reading: "すこし", meaning: "a little / a few", partOfSpeech: "adverb", example: "少し待ってください。", exampleReading: "Sukoshi matte kudasai.", exampleMeaning: "Please wait a little.", tags: ["adverbs"] },
  { id: "v47", word: "とても", reading: "とても", meaning: "very / extremely", partOfSpeech: "adverb", example: "とても嬉しいです。", exampleReading: "Totemo ureshii desu.", exampleMeaning: "I am very happy.", tags: ["adverbs"] },
  { id: "v48", word: "もう", reading: "もう", meaning: "already / anymore", partOfSpeech: "adverb", example: "もう食べました。", exampleReading: "Mō tabemashita.", exampleMeaning: "I already ate.", tags: ["adverbs"] },
  { id: "v49", word: "まだ", reading: "まだ", meaning: "still / not yet", partOfSpeech: "adverb", example: "まだ寝ていません。", exampleReading: "Mada nete imasen.", exampleMeaning: "I haven't slept yet.", tags: ["adverbs"] },
  { id: "v50", word: "一緒に", reading: "いっしょに", meaning: "together", partOfSpeech: "adverb", example: "一緒に行きましょう。", exampleReading: "Issho ni ikimashō.", exampleMeaning: "Let's go together.", tags: ["adverbs", "social"] },
];
