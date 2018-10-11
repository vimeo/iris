//@flow
import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import * as ComponentDocs from '../../data/ComponentDocsJsxExportList.jsx';
import ApiTable from './ApiTable';
import tsPatternAPIList from '../tsPatternAPIList';

type Props = {
        category: string,
        displayName: string,
        isPage:  boolean,
        isSingle: boolean,
        name: string,
    }

const StyleListingUnit = (props:Props) => {

        let DocsTag = ComponentDocs[props.name + 'Docs'];
        let Name = props.displayName || props.name;
        let PatternLink = "/pattern/" + props.category + '/' + props.name;

        const title = props.isSingle ? (
            <h2>{Name}</h2>
        ) : (
            <h2 className="Pattern__title-link">
                <Link to={PatternLink}>{Name}</Link>
            </h2>
        );

        const patternList = !props.isPage && tsPatternAPIList[props.name] ? (
            <div dangerouslySetInnerHTML={{ __html: tsPatternAPIList[props.name].data }} />
        ) : null;

        const apiTable = !props.isPage && !tsPatternAPIList[props.name] ? (
            <ApiTable name={props.name}/>
        ) : null;

        return (
            <section id={props.name} className="Pattern">
                {title}
                <DocsTag/>
                {patternList}
                {apiTable}
                <hr className="Pattern__divider"/>
            </section>
        );
};

export default StyleListingUnit;
