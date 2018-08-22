import React from 'react';
import * as Pages from '../pages';

const PageLayout = (props) => {
    const ThisPageTag = Pages[props.match.params.page];
    
    return (
        <div className="PageLayout">
                <ThisPageTag />
        </div>
    );
};

export default PageLayout;
