import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import {
    CategoryCard,
    Grid,
    GridBlock,
    GridCol,
} from '../index';
import SportsIcon from '../legacyIcons/iris_icon_sports_32.svg';
import AnimationIcon from '../legacyIcons/iris_icon_animation_32.svg';
import TravelIcon from '../legacyIcons/iris_icon_travel_32.svg';

const SportsCard = (
    <GridCol mdSpan={8} lgSpan={4}>
        <CategoryCard
            icon={<SportsIcon />}
            backgroundImageURL="https://i.vimeocdn.com/custom_asset/26.jpg"
        >
            Sports
        </CategoryCard>
    </GridCol>
);

const AnimationCard = (
    <GridCol mdSpan={8} lgSpan={4}>
        <CategoryCard
            icon={<AnimationIcon />}
            backgroundImageURL="https://i.vimeocdn.com/custom_asset/13.jpg"
        >
            Animation
        </CategoryCard>
    </GridCol>
);

const TravelCard = (
    <GridCol mdSpan={8} lgSpan={4}>
        <CategoryCard
            icon={<TravelIcon />}
            backgroundImageURL="https://i.vimeocdn.com/custom_asset/28.jpg"
        >
            Travel
        </CategoryCard>
    </GridCol>
);

class CategoryCardDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <Grid isNested>
                        <GridBlock>
                            {SportsCard}
                            {AnimationCard}
                            {TravelCard}
                            {SportsCard}
                            {AnimationCard}
                            {TravelCard}
                        </GridBlock>
                    </Grid>
                </div>

                <ExampleSource>
                    {`
<CategoryCard
    icon={<SportsIcon />}
    backgroundImageURL="https://i.vimeocdn.com/custom_asset/26.jpg"
>
    Sports
</CategoryCard>
<CategoryCard
    icon={<AnimationIcon />}
    backgroundImageURL="https://i.vimeocdn.com/custom_asset/13.jpg"
>
    Animation
</CategoryCard>
<CategoryCard
    icon={<TravelIcon />}
    backgroundImageURL="https://i.vimeocdn.com/custom_asset/28.jpg"
>
    Travel
</CategoryCard>
                        `}
                </ExampleSource>
            </div>
        );
    }
}

export default CategoryCardDocs;
