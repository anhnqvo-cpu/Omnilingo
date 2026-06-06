export interface StorySegment {
  japanese: string;
  reading: string;
  english: string;
}

export interface Story {
  id: string;
  title: string;
  titleJapanese: string;
  level: "N5" | "N4" | "N3";
  duration: string;
  category: string;
  image: string;
  xp: number;
  segments: StorySegment[];
}

export const stories: Story[] = [
  {
    id: "s1",
    title: "Meeting a Friend",
    titleJapanese: "友達に会う",
    level: "N5",
    duration: "3 min",
    category: "Daily Life",
    image: "city",
    xp: 30,
    segments: [
      { japanese: "田中さん、こんにちは！", reading: "Tanaka-san, konnichiwa!", english: "Hello, Tanaka-san!" },
      { japanese: "あ、山田さん！お元気ですか？", reading: "A, Yamada-san! Ogenki desu ka?", english: "Oh, Yamada-san! How are you?" },
      { japanese: "はい、元気です。今日は天気がいいですね。", reading: "Hai, genki desu. Kyō wa tenki ga ii desu ne.", english: "Yes, I'm well. The weather is nice today, isn't it." },
      { japanese: "そうですね。どこへ行きますか？", reading: "Sō desu ne. Doko e ikimasu ka?", english: "You're right. Where are you going?" },
      { japanese: "図書館へ行きます。本を借りたいです。", reading: "Toshokan e ikimasu. Hon wo karitai desu.", english: "I'm going to the library. I want to borrow some books." },
      { japanese: "そうですか。私も行きましょうか？", reading: "Sō desu ka. Watashi mo ikimashō ka?", english: "Is that so. Shall I come along too?" },
      { japanese: "はい、ぜひ！一緒に行きましょう。", reading: "Hai, zehi! Issho ni ikimashō.", english: "Yes, please! Let's go together." },
    ],
  },
  {
    id: "s2",
    title: "At the Café",
    titleJapanese: "カフェで",
    level: "N5",
    duration: "4 min",
    category: "Food & Drink",
    image: "cafe",
    xp: 30,
    segments: [
      { japanese: "いらっしゃいませ！", reading: "Irasshaimase!", english: "Welcome!" },
      { japanese: "コーヒーを一つください。", reading: "Kōhī wo hitotsu kudasai.", english: "One coffee, please." },
      { japanese: "ホットとアイス、どちらになさいますか？", reading: "Hotto to aisu, dochira ni nasaimasu ka?", english: "Would you like hot or iced?" },
      { japanese: "ホットをお願いします。", reading: "Hotto wo onegai shimasu.", english: "Hot, please." },
      { japanese: "ケーキはいかがですか？今日のおすすめです。", reading: "Kēki wa ikaga desu ka? Kyō no osusume desu.", english: "How about cake? It's today's recommendation." },
      { japanese: "いくらですか？", reading: "Ikura desu ka?", english: "How much is it?" },
      { japanese: "三百円です。", reading: "Sanbyaku-en desu.", english: "It's 300 yen." },
      { japanese: "じゃあ、一つください。ありがとうございます。", reading: "Jā, hitotsu kudasai. Arigatō gozaimasu.", english: "Then one, please. Thank you." },
    ],
  },
  {
    id: "s3",
    title: "Morning Routine",
    titleJapanese: "朝のルーティン",
    level: "N5",
    duration: "3 min",
    category: "Daily Life",
    image: "city",
    xp: 30,
    segments: [
      { japanese: "毎朝、六時に起きます。", reading: "Maiasa, roku-ji ni okimasu.", english: "Every morning, I wake up at six o'clock." },
      { japanese: "シャワーを浴びて、朝ごはんを食べます。", reading: "Shawā wo abite, asagohan wo tabemasu.", english: "I take a shower and eat breakfast." },
      { japanese: "朝ごはんはパンと卵です。", reading: "Asagohan wa pan to tamago desu.", english: "Breakfast is bread and eggs." },
      { japanese: "七時半に家を出ます。", reading: "Shichi-ji han ni ie wo demasu.", english: "I leave the house at half past seven." },
      { japanese: "駅まで歩きます。十分かかります。", reading: "Eki made arukimasu. Juppun kakarimasu.", english: "I walk to the station. It takes ten minutes." },
      { japanese: "電車で会社に行きます。", reading: "Densha de kaisha ni ikimasu.", english: "I go to the company by train." },
      { japanese: "八時半に着きます。", reading: "Hachi-ji han ni tsukimasu.", english: "I arrive at half past eight." },
    ],
  },
  {
    id: "s4",
    title: "Shopping",
    titleJapanese: "買い物",
    level: "N4",
    duration: "4 min",
    category: "Shopping",
    image: "city",
    xp: 50,
    segments: [
      { japanese: "すみません、このシャツはありますか？", reading: "Sumimasen, kono shatsu wa arimasu ka?", english: "Excuse me, do you have this shirt?" },
      { japanese: "はい、ございます。どのサイズをお探しですか？", reading: "Hai, gozaimasu. Dono saizu wo osagashi desu ka?", english: "Yes, we do. What size are you looking for?" },
      { japanese: "Mサイズをください。", reading: "Emu-saizu wo kudasai.", english: "A medium size, please." },
      { japanese: "少々お待ちください。", reading: "Shōshō omachi kudasai.", english: "Please wait a moment." },
      { japanese: "申し訳ございませんが、Mサイズは売り切れです。", reading: "Mōshiwake gozaimasen ga, Emu-saizu wa urikire desu.", english: "I'm sorry, but the medium size is sold out." },
      { japanese: "そうですか。Lサイズはありますか？", reading: "Sō desu ka. Eru-saizu wa arimasu ka?", english: "Is that so. Do you have a large size?" },
      { japanese: "はい、あります。こちらはいかがですか？", reading: "Hai, arimasu. Kochira wa ikaga desu ka?", english: "Yes, we do. How about this one?" },
      { japanese: "いいですね。これをいただきます。", reading: "Ii desu ne. Kore wo itadakimasu.", english: "That's nice. I'll take this." },
    ],
  },
  {
    id: "s5",
    title: "Weekend Plans",
    titleJapanese: "週末の予定",
    level: "N4",
    duration: "5 min",
    category: "Daily Life",
    image: "city",
    xp: 50,
    segments: [
      { japanese: "今週末は何をするつもりですか？", reading: "Konshūmatsu wa nani wo suru tsumori desu ka?", english: "What are you planning to do this weekend?" },
      { japanese: "友達と映画を見に行くつもりです。", reading: "Tomodachi to eiga wo mi ni iku tsumori desu.", english: "I'm planning to go watch a movie with a friend." },
      { japanese: "いい映画はありますか？", reading: "Ii eiga wa arimasu ka?", english: "Are there any good movies?" },
      { japanese: "新しいアニメ映画があります。すごく面白そうです。", reading: "Atarashii anime eiga ga arimasu. Sugoku omoshirosō desu.", english: "There's a new anime movie. It looks really interesting." },
      { japanese: "そうですか。私も見たいです。", reading: "Sō desu ka. Watashi mo mitai desu.", english: "Is that so. I want to see it too." },
      { japanese: "一緒に来ますか？チケットはまだあります。", reading: "Issho ni kimasu ka? Chiketto wa mada arimasu.", english: "Would you like to come along? There are still tickets." },
      { japanese: "ぜひ！何時に会いましょうか？", reading: "Zehi! Nanji ni aimashō ka?", english: "Absolutely! What time shall we meet?" },
      { japanese: "映画は三時からです。二時半に駅で会いましょう。", reading: "Eiga wa san-ji kara desu. Ni-ji han ni eki de aimashō.", english: "The movie starts at three. Let's meet at the station at half past two." },
    ],
  },
];
