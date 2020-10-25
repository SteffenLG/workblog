import React from "react";
import { useInput } from "../hooks/input-hook";
import database from "../database";
import moment from "moment";

function BlogForm() {
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");
  const { value: date, bind: bindDate, reset: resetDate} = useInput("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const weekNumber = moment(date).week();
    const year = moment(date).year();
    const yearWeek = `${year}-${weekNumber}`;

    //TODO: Update form to work with new schema
    // Check if current week is in db

    let weekExists = (
      await database.ref(`weeks/${yearWeek}`).once("value")
    ).exists();

    // if not, create week
    if (!weekExists) {
      database.ref(`weeks/${yearWeek}`).set({
        posts: {},
        weekNumber: weekNumber,
        year: year,
      });
    }

    // add new post to week
    database.ref(`weeks/${yearWeek}/posts`).push().set({
      title,
      body,
      date,
      weekNumber,
    });

    resetTitle();
    resetBody();
    resetDate();
  };

  return (
    <div className="blogForm">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" {...bindTitle} />
          <br />
        </label>
        <label>
          Date: 
          <input type="date" {...bindDate}/>
        </label>
        <label>
          Body:
          <br />
        </label>
        <textarea rows="3" cols="50" {...bindBody} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BlogForm;
