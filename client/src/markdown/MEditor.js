import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Markdown from './Markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import Editor from 'for-editor';

const MEditor = ({ value }) => {

    return (
        <Editor value={value} />
    )
}
export default MEditor;