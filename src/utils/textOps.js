import React from 'react';
import { getArticleImgUrlById } from "../api/imageApi";

const addLineBreaks = (string) =>
  string.split('\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));

export const addImages = (postIndex, string) => {
  var splitted = string.split('[img]');
  if(splitted.length > 1) {
    var processed = splitted.slice(0, splitted.length-1).map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {addLineBreaks(new String(text))}
        <br /><br />
        <img src={getArticleImgUrlById(postIndex, index+1, true)}  alt={"image_here_"+index} className="img-fluid" />
        <br /><br />
      </React.Fragment>
    ));
    return processed.concat(splitted[splitted.length-1]);
  } else {
    return addLineBreaks(new String(string));
  }
}