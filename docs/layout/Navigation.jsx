import React from 'react';
import {BrowserRouter, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';
import VimeoLogo from './VimeoLogo';
import styled from 'styled-components';
import { NavigationLinkEl, filteredNavigationLinkEl, NavigationLink } from './NavigationLink';
import COLORS from '../../src/globals/js/constants/COLORS';
let patterns = require('json-loader!../patternList.json');

import {
    Grid,
    GridBlock,
    GridCol,
    InputText,
    VerticalMenuHeaderGroup,
} from '../../src/index';


const NavigationStyled = styled.div`
    position: fixed;
    top: 9rem;
    left: 0;
    z-index: 0;
    height: calc(100vh - 9rem);
    width: 16rem;
    padding: 0 0 2rem;
    overflow: scroll;
    background: ${COLORS.Paste};
`;

const NavigationSFC = ({
    searchText = ' '
}) => (
    <NavigationStyled>
        <Grid isNested>
            <GridBlock>
                <GridCol>
                    {Object.keys(patterns).map((key, i) => (
                        <VerticalMenuHeaderGroup
                            label={key}
                            labelId={key}
                            key={i}
                        >
                            {getCategoryItems(key, searchText)}
                        </VerticalMenuHeaderGroup>
                    ))}
                </GridCol>
            </GridBlock>
        </Grid>
    </NavigationStyled>
);


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
    }

    filterList = (event) => {
        this.setState({
            filter: event.target.value.toLowerCase()
        });
    }

    render() {
        return (
            <div style={{
                'width': '16rem',
                'position': 'fixed',
                'padding': '2rem 1rem',
                'background': `${COLORS.Paste}`
            }}>
                <div className="sg-Navigation__ribbon VimeoBrand_ColorRibbon"></div>
                <Link
                    to="/"
                    style={{'marginBottom': '1rem', 'display': 'block'}}
                >
                    <VimeoLogo />
                </Link>
                <InputText
                    name="searchText"
                    id="searchText"
                    label="Search Iris"
                    showLabel={false}
                    placeholder="Search Iris"
                    onChange={this.filterList}
                />
                <NavigationSFC
                    searchText={this.state.filter}>
                </NavigationSFC>
            </div>
        );
    }
}

const catLength = (key) => ({length: patterns[key].length});
const catItems = (key, searchText, i) => searchText.length > 1
    ? filteredNavigationLinkEl(key, searchText, i)
    : NavigationLinkEl(key, i)

const getCategoryItems = (key, searchText) =>
    Array.from(
        catLength(key),
        (_, i) => catItems(key, searchText, i)
    );

export default Navigation;
