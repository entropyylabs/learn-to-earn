import React from "react";

function ContentCard({ content }) {
  const html = `<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default ContentCard;
