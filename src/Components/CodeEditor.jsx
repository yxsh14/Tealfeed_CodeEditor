import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <h1>Tealfeed JavaScript Code Editor</h1>
      <h2>A simple no-frills code editor with syntax highlighting.</h2>
      <div className="code-editor">
        <pre className="code-output">
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(code, Prism.languages.javascript, 'javascript')
            }}
          />
        </pre>
        <textarea
          value={code}
          onChange={handleChange}
          className="code-input"
          spellCheck="false"
        />
      </div>
      <a
        href="https://github.com/your-github-repository"
        target="_blank"
        className="github-button"
      >
        GitHub
      </a>
    </div>
  );
};

export default CodeEditor;
