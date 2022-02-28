import React from "react";

function ContentCard({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default ContentCard;
