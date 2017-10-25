import React from 'react';
import VerticalMenuItem from './VerticalMenuItem';
import VerticalMenuItemReactRouter from '../VerticalMenuItemReactRouter/VerticalMenuItemReactRouter';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { List, ListItem } from '../List/List';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';
import RightArrow from '../../globals/svg/chevron-right.svg';
import HomeIcon from '../../globals/svg/home.svg';
import HomeFilledIcon from '../../globals/svg/home-filled.svg';

const VerticalMenuItemDocs = (props) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('Demo Click Handler: You Clicked:', e.target);
    };

    return (
        <div className="Pattern__docs">

            <ParagraphMd>VerticalMenuItem provides stand-alone links</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>truncateLabel</code> will prevent the label from going to multiple lines using an elipsis truncation.</ListItem>
                <ListItem><code>labelIcon</code> adds an icon to the label text.</ListItem>
                <ListItem><code>linkActionIcon</code> adds an icon to the far right of the navigation item, this is usually use to indicate the link's behavior (e.g. "will pop-out a window").</ListItem>
                <ListItem>All other passed props will go to the anchor tag or Router Link component.</ListItem>
            </List>
            <Header3>Using React Router</Header3>
            <ParagraphMd>If you need a React Router <code>&lt;Link></code> tag, use <code>VerticalMenuItemReactRouter</code>, which has the same API.</ParagraphMd>

            <div style={{ 'maxWidth': '25rem' }}>
                <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link With Link Icon"
                    linkActionIcon={(<RightArrow />)}
                />
                <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link With Label Icon"
                    labelIcon={(<HomeIcon />)}
                    labelIconActive={(<HomeFilledIcon />)}
                />
                <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link With Label Icon"
                    labelIcon={(<HomeIcon />)}
                    labelIconActive={(<HomeFilledIcon />)}
                    isActive
                />
                <VerticalMenuItemReactRouter
                    to="#"
                    onClick={onClickHandler}
                    label="Stand Alone ReactRouter Link"
                    labelIcon={(<HomeIcon />)}
                    labelIconActive={(<HomeFilledIcon />)}
                />
                <VerticalMenuItemReactRouter
                    to="#"
                    onClick={onClickHandler}
                    label="Stand Alone ReactRouter Link"
                    labelIcon={(<HomeIcon />)}
                    labelIconActive={(<HomeFilledIcon />)}
                    isActive
                />
                <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Truncated Long Label Name 12345678910"
                    truncateLabel
                />
            </div>
            <ExampleSource>
                {`

import VerticalMenuItem from 'iris/VerticalMenuItem';
import VerticalMenuItemRectRouter from 'iris/VerticalMenuItemReactRouter';

<VerticalMenuItem
    href="#"
    onClick={onClickHandler}
    label="Stand Alone Link With Link Icon"
    linkActionIcon={(<RightArrow />)}
/>
<VerticalMenuItem
    href="#"
    onClick={onClickHandler}
    label="Stand Alone Link With Label Icon"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
/>
<VerticalMenuItem
    href="#"
    onClick={onClickHandler}
    label="Stand Alone Link With Label Icon"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
    isActive
/>
<VerticalMenuItemReactRouter
    to="#"
    onClick={onClickHandler}
    label="Stand Alone ReactRouter Link"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
/>
<VerticalMenuItemReactRouter
    to="#"
    onClick={onClickHandler}
    label="Stand Alone ReactRouter Link"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
    isActive
/>
<VerticalMenuItem
    href="#"
    onClick={onClickHandler}
    label="Truncated Long Label Name 12345678910"
    truncateLabel
/>
                    `}
            </ExampleSource>

        </div>
    );
};

export default VerticalMenuItemDocs;
