import { nanoid } from 'nanoid';
import React from 'react';
import '../Generator/style.scss';

const Languages = ({ languageLevel, setLanguageLevel }) => {
  return (
    <div className="languages-container">
      <h2>Languages</h2>
      <div className="languages-grid">
        {languageLevel.map((x, index) => {
          return (
            <div key={x.id} className="label-input-container">
              <label htmlFor="language"></label>
              <input
                className="input text-input"
                type="text"
                value={x.language}
                onChange={(e) => {
                  const oldLanguageLevel = [...languageLevel];
                  oldLanguageLevel[index].language = e.target.value;
                  setLanguageLevel(oldLanguageLevel);
                }}
              />

              <label className="label-block" htmlFor="language"></label>
              <select
                className="input"
                value={x.level}
                onChange={(e) => {
                  const oldLanguageLevel = [...languageLevel];

                  oldLanguageLevel[index].level = e.target.value;
                  setLanguageLevel(oldLanguageLevel);
                }}
                name="level"
                id="level"
              >
                <option value="">Select</option>
                <option value="native">Native</option>
                <option value="intermediate">A1/A2</option>
                <option value="advanced">B1/B2</option>
                <option value="expert">C1/C2</option>
              </select>
              {languageLevel.length > 1 && (
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => {
                    const copiedLanguageLevel = [...languageLevel];
                    copiedLanguageLevel.splice(index, 1);
                    setLanguageLevel(copiedLanguageLevel);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="add-button"
          type="button"
          onClick={() => {
            const copiedLanguageLevel = [...languageLevel];
            copiedLanguageLevel.push({
              language: '',
              level: '',
              id: nanoid(),
            });
            setLanguageLevel(copiedLanguageLevel);
          }}
        >
          + Add Language
        </button>
      </div>
    </div>
  );
};

export default Languages;
