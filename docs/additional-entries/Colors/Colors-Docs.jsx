import React from 'react';
import {
    LinkText,
    List,
    ListItem,
    NotificationWarning,
    ParagraphMd,
} from '../../../src/index.js';
import ColorListing from './ColorListing';
import COLORS from '../../../src/globals/js/constants/COLORS';
const colorData = {
    Blues: {
        VimeoBlue: COLORS.VimeoBlue,
        Foam: COLORS.Foam,
        'Darker Blue': COLORS.DarkerBlue
    },

    Greens: {
        Pistachio: COLORS.Pistachio,
        RumSwizzle: COLORS.RumSwizzle
    },
    Reds: {
        SunsetOrange: COLORS.SunsetOrange,
        PalePink: COLORS.PalePink
    },
    Grayscale: {
        AstroGranite: COLORS.AstroGranite,
        RegentGray: COLORS.RegentGray,
        SoutherlySky: COLORS.SoutherlySky,
        Porcelain: COLORS.Porcelain,
        Plaster: COLORS.Plaster,
        Paste: COLORS.Paste,
        White: COLORS.White
    },
    'Interaction State Colors': {
        'VimeoBlue-Darkened': COLORS.VimeoBlueDarkened,
        "VimeoBlue-Lightened": COLORS.VimeoBlueLightened,
        'Pistachio-Darkened': COLORS.PistachioDarkened,
        'Pistachio-Lightened': COLORS.PistachioLightened,
        'SunsetOrange-Darkened': COLORS.SunsetOrangeDarkened,
        WarningYellow: COLORS.WarningYellow
    },
    'Dark Theme Colors': {
        RavenImperial: COLORS.RavenImperial,
        ObsidianState: COLORS.ObsidianState,
        "DarkDark (Deprecated)": COLORS.DarkDark,
        SovereignShadow: COLORS.SovereignShadow,
        AshenWinter: COLORS.AshenWinter,
        IronHeart: COLORS.IronHeart
    }
};

export default function ColorsDocs() {
    return (
        <div className="Pattern__docs">
            <NotificationWarning headerText="A11y Notes">
                <ParagraphMd>Make sure that your color choice maintains at least a <strong>3:1 contrast ratio</strong> with its background. The following colors <strong>do not</strong> meet this standard when placed on a white background and should only be used for type or interactive elements when surrounded by a higher-contrast color:
                </ParagraphMd>
                <List>
                    <ListItem>Foam</ListItem>
                    <ListItem>PalePink</ListItem>
                    <ListItem>Paste</ListItem>
                    <ListItem>Plaster</ListItem>
                    <ListItem>Porcelain</ListItem>
                    <ListItem>RumSwizzle</ListItem>
                    <ListItem>SoutherlySky</ListItem>

                </List>
                <ParagraphMd>See the <LinkText href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM color checker</LinkText>.</ParagraphMd>
            </NotificationWarning>
            <ColorListing colorData={colorData}/>
        </div>
    );
}
