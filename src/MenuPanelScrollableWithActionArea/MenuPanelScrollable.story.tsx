import React from 'react';
import { storiesOf } from '@storybook/react';
import { ParagraphMd } from '../Type';
import MenuPanelScrollableWithActionArea from './MenuPanelScrollableWithActionArea';
import InputText from '../InputText';
import ButtonIconOnly from '../ButtonIconOnly';
import MenuPanel from '../MenuPanel/MenuPanel';
import SettingsIcon from '../icons/gear.svg';

storiesOf('Menu Panel', module).add(
    'scrollable',
    () => (
        <MenuPanel
            alignment="left"
            size="lg"
            menuContent={
                <MenuPanelScrollableWithActionArea
                    maxHeight={200}
                    primaryButtonProps={{
                        children: 'Submit',
                    }}
                    secondaryButtonProps={{
                        children: 'Cancel',
                    }}
                >
                    <ParagraphMd>
                        `Twas brillig, and the slithy toves Did gyre and gimble
                        in the wabe: All mimsy were the borogoves, And the mome
                        raths outgrabe.
                    </ParagraphMd>
                    <ParagraphMd>
                        "Beware the Jabberwock, my son! The jaws that bite, the
                        claws that catch! Beware the Jubjub bird, and shun The
                        frumious Bandersnatch!"
                    </ParagraphMd>
                    <ParagraphMd>
                        He took his vorpal sword in hand: Long time the manxome
                        foe he sought -- So rested he by the Tumtum tree, And
                        stood awhile in thought.
                    </ParagraphMd>
                    <ParagraphMd>
                        And, as in uffish thought he stood,The Jabberwock, with
                        eyes of flame, Came whiffling through the tulgey wood,
                        And burbled as it came!
                    </ParagraphMd>
                    <InputText
                        name="foo"
                        id="MenuPanelExample Input"
                        label="Jabberwocky Name"
                    />
                </MenuPanelScrollableWithActionArea>
            }
        >
            <ButtonIconOnly
                icon={<SettingsIcon />}
                format="dark"
                size="md"
                isButtonElement={false}
            />
        </MenuPanel>
    ),
    {
        info: {
            inline: true,
            propTables: [MenuPanelScrollableWithActionArea],
        },
    },
);
