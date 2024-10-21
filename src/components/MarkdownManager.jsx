import React, { useState } from 'react';
import Showdown from 'showdown';

// conversion Markdown to html
const converter = new Showdown.Converter();

function MarkdownManager()
{
  const [markdownContent, setMarkdownContent] = useState('');
  // handling file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // getting the file selected
    const reader = new FileReader();

    reader.onload = (e) => {
      setMarkdownContent(e.target.result);
    };
    if (file)
      reader.readAsText(file);
  };

  // handling export case
  const exportToMarkdown = (content, fileName) =>
    {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `${fileName}.md`; //
    a.click(); // link to download the file

    window.URL.revokeObjectURL(url);
  };
  const handleFileExport = () => {
    exportToMarkdown(markdownContent, 'exported-file'); // calling export function
  };

  const previewHTML = converter.makeHtml(markdownContent);

  return (
    <div>
      <h1>markdown file </h1>
      <input type="file" accept=".md" onChange={handleFileUpload} />
      <textarea
        value={markdownContent}
        onChange={(e) => setMarkdownContent(e.target.value)}
        rows="10"
        cols="80"
      />
      <br />
      <button onClick={handleFileExport}>Exporter en Markdown</button>
      <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
    </div>
  );
}

export default MarkdownManager;
