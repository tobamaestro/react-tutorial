import React, { useState, useEffect } from "react";
import axios from "axios";

const TRANSLATE_API =
  "https://translation.googleapis.com/language/translate/v2";
const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  //  prevent redundant API calls with debouncing technique
  useEffect(() => {
    //  set a timer to update debouncedText
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    //  if the text changes in the meantime, clear the timer
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        TRANSLATE_API,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: API_KEY,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    translate();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
