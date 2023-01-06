import { useState } from "react";
let emojiDic = {
  "😀": "smiley",
  "🥹": "emotional",
  "😂": "laughing",
  "🥲": "crying",
  "😍": "love",
  "🤓": "nerd",
  "🤡": "clown",
  "🤤": "lust",
  "🤢": "disgust",
  "😡": "angry"
};

let Emoji = () => {
  let [emojiInp, setEmojiInp] = useState("");
  let [meaning, setMeaniing] = useState("translation will come here..");
  let emoji = Object.keys(emojiDic);

  let handler = (e) => {
    setEmojiInp(e.target.value);

    if (emojiInp in emojiDic) {
      setMeaniing(emojiDic[emojiInp]);
    } else {
      setMeaniing("Not found");
    }
  };
  let emojiClickHandler = (inputEmoji) => {
    setMeaniing(emojiDic[inputEmoji]);
  };

  return (
    <div>
      <h1>Know your Emoji</h1>
      <input
        style={{ width: "60%", height: "3rem" }}
        onChange={(e) => handler(e)}
        placeholder="Enter you emoji"
      />
      <h2>{meaning}</h2>
      {emoji.map((em) => {
        return (
          <span
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key={em}
            onClick={() => emojiClickHandler(em)}
          >
            {em}
          </span>
        );
      })}
    </div>
  );
};
export default Emoji;
