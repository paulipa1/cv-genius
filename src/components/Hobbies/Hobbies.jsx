import React from 'react';
import '../Generator/style.css';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Hobbies = ({ hobbies, setHobbies }) => {
  return (
    <div className="hobbies-container">
      <div className="section-header-container">
        <h2>Hobbies</h2>
        <InfoTooltip
          content={
            <>
              <p>
                Usually, this is the final part of your CV. Even though this
                part is optional, we highly recommend using it in a way that
                will be beneficial for you, as a candidate. Avoid writing about
                general hobbies such as “I like to read books and travel”.
              </p>
              <p>
                Be more specific and start with the hobbies which describe you
                the most: ”I travelled to 20+ countries and spent 2 months
                couchsurfing across South Asia”. Or: “I am an enthusiast house
                plant grower, I nurture various types of plants, including a
                giant Aloe Vera.”
              </p>
              <p>
                If you just have started thinking about your hobbies, and do not
                know how to write them, check the CV Guide section in the Menu.
              </p>
            </>
          }
        />
      </div>
      <div className="hobbies-textarea-grid">
        <div className="label-input-container">
          <label className="label-block" htmlFor="hobby"></label>
          <textarea
            className="input"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            name="hobby"
            id="hobby"
            rows="3"
            cols="25"
            placeholder="I like to dedicate my free time to..."
          ></textarea>
        </div>
      </div>{' '}
    </div>
  );
};

export default Hobbies;
