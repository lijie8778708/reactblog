import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';


export default function Markdown(props) {
    return <ReactMarkdown renderers={{ code: CodeBlock }} {...props} />;
}