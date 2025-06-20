import { LanguageCard } from "./LanguagesCard";
import {languages} from "../Data/languages"

export const Languages = () => {
  return (
    <section>
      <div className="container">
      <h2>Languages Known</h2>
      {languages.map((lang, index) => (
        <LanguageCard key={index} language={lang.language} level={lang.level} />
      ))}
      </div>
    </section>
  );
};