import React from 'react';
import Sections from './Sections';

const sections = [
    { title: 'Blog', url: '/' },
    { title: 'Resume', url: '/Resume' },
];

const SectionGroup = () => {
    return (
        <React.Fragment>
            <Sections sections={sections} />
        </React.Fragment>
    )
}

export default SectionGroup;