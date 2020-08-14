import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, python, javascript, java } from 'react-syntax-highlighter/dist/esm/languages/prism';

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    }
    static defaultProps = {
        language: null
    }
    componentWillMount() {
        SyntaxHighlighter.registerLanguage('jsx', jsx);
        SyntaxHighlighter.registerLanguage('python', python);
        SyntaxHighlighter.registerLanguage('js', javascript);
        SyntaxHighlighter.registerLanguage('java', java);
    }
    render() {
        const { language, value } = this.props;
        return (
            <figure className="highlight">
                <SyntaxHighlighter language={language} style={prism}>
                    {value}
                </SyntaxHighlighter>
            </figure>
        );
    }
}
export default CodeBlock;