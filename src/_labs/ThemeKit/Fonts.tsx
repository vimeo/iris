import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

export function Fonts() {
  return (
    <>
      <FontFace />
      <link
        rel="preload"
        href="//sf-p.rtrcdn.com/webfonts/Genath-Regular.woff2"
        as="font"
        type="font/woff2"
        // crossorigin=""
      />
      <link
        rel="preload"
        href="//sf-p.rtrcdn.com/webfonts/Engravers.woff2"
        as="font"
        type="font/woff2"
        // crossorigin=""
      />
    </>
  );
}

const FontFace = createGlobalStyle`
  @font-face {
    font-family: 'EngraversGothic BT';
    src: url('https://sf-p.rtrcdn.com/webfonts/Engravers.woff2')
        format('woff2'),
      url('https://sf-p.rtrcdn.com/webfonts/Engravers.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-light.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-light.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-hbr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-light-hbr.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-light-hbr.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-book.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-book.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-hbr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-book-hbr.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-book-hbr.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-medium.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-medium.woff')
        format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-hbr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-medium-hbr.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-medium-hbr.woff')
        format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-bold.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-bold.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-hbr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-bold-hbr.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-bold-hbr.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: Circular;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-black.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-black.woff')
        format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-hbr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-black-hbr.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-black-hbr.woff')
        format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'noto-arabic';
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/notosansarabic-light.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/notosansarabic-light.woff')
        format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'noto-arabic';
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/notosansarabic-regular.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/notosansarabic-regular.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'noto-arabic';
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/notosansarabic-bold.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/notosansarabic-bold.woff')
        format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-cyr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-light.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-light.woff')
        format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-cyr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-medium.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-medium.woff')
        format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-cyr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-book.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-book.woff')
        format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-cyr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-black.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-black.woff')
        format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: Circular-cyr;
    src: url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-bold.woff2')
        format('woff2'),
      url('https://sp-bootstrap.global.ssl.fastly.net/8.12.3/fonts/circular-cyr-bold.woff')
        format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: adobe-clean;
    src: url(https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
        format('woff2'),
      url(https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
        format('woff'),
      url(https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
        format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: adobe-clean;
    src: url(https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
        format('woff2'),
      url(https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
        format('woff'),
      url(https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3)
        format('opentype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: adobe-clean;
    src: url(https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
        format('woff2'),
      url(https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
        format('woff'),
      url(https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3)
        format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: adobe-clean;
    src: url(https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)
        format('woff2'),
      url(https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)
        format('woff'),
      url(https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)
        format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: adobe-clean-serif;
    src: url(https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3)
        format('woff2'),
      url(https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3)
        format('woff'),
      url(https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3)
        format('opentype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "ITC Avant Garde Gothic W04_B4";
    src: url("521186fb-1032-4a81-bff4-a67d052d6e5e.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "ITC Avant Garde Gothic W04";
    src: url("521186fb-1032-4a81-bff4-a67d052d6e5e.eot?#iefix");
    src: url("521186fb-1032-4a81-bff4-a67d052d6e5e.eot?#iefix") format("eot"), url("cd6106cf-c21e-4d0b-953e-3905a1b9dece.woff2") format("woff2"), url("5f1f53ca-f786-466b-979b-2dc11d2d05e9.woff") format("woff"), url("ac3dc0aa-6281-4d8f-aadb-67c67099ff9c.ttf") format("truetype"), url("0f98417d-ca43-4d3e-b392-21a473e4917a.svg#0f98417d-ca43-4d3e-b392-21a473e4917a") format("svg");
    font-weight: 400;
    font-style: Bold;
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08_n4";
    src: url("9b59db8d-790b-448e-901a-83bee80695d7.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08";
    src: url("9b59db8d-790b-448e-901a-83bee80695d7.eot?#iefix");
    src: url("9b59db8d-790b-448e-901a-83bee80695d7.eot?#iefix") format("eot"), url("794c9044-29a1-4d4e-961e-774f21e86764.woff2") format("woff2"), url("b263ec73-3337-45b9-9e86-933d27164f2c.woff") format("woff"), url("9675cf06-4f76-47fb-97df-9b255507e865.ttf") format("truetype"), url("825d51b9-cc7d-4f4d-ba2c-47ffd291aebd.svg#825d51b9-cc7d-4f4d-ba2c-47ffd291aebd") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08_i4";
    src: url("4c83158e-1435-42b3-9577-b2b30ca41519.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08";
    src: url("4c83158e-1435-42b3-9577-b2b30ca41519.eot?#iefix");
    src: url("4c83158e-1435-42b3-9577-b2b30ca41519.eot?#iefix") format("eot"), url("6f903966-2648-436f-8027-84dce5817cbe.woff2") format("woff2"), url("6d0c45bd-b627-4868-942a-91b2f83580f2.woff") format("woff"), url("6334af5a-f301-4a6a-bbe1-2f3f58d3a799.ttf") format("truetype"), url("f00e2b8d-55bd-4f31-b5ae-e6230f2c8481.svg#f00e2b8d-55bd-4f31-b5ae-e6230f2c8481") format("svg");
    font-weight: 400;
    font-style: italic;
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08_n6";
    src: url("c8ffd33b-7f59-4efd-ad34-10f0a04b0bde.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08";
    src: url("c8ffd33b-7f59-4efd-ad34-10f0a04b0bde.eot?#iefix");
    src: url("c8ffd33b-7f59-4efd-ad34-10f0a04b0bde.eot?#iefix") format("eot"), url("41e9be24-e4f1-40a2-b51a-fc8f72905b72.woff2") format("woff2"), url("055ac9f4-28a5-49a7-a54e-fd7d20678142.woff") format("woff"), url("a3eeab6f-eb9e-4115-bb38-ab043636fc6d.ttf") format("truetype"), url("bedb1dd5-06ae-4b04-869f-38561a959175.svg#bedb1dd5-06ae-4b04-869f-38561a959175") format("svg");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: "ITC Avant Garde Gothic W04_B4";
    src: url("521186fb-1032-4a81-bff4-a67d052d6e5e.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "ITC Avant Garde Gothic W04";
    src: url("521186fb-1032-4a81-bff4-a67d052d6e5e.eot?#iefix");
    src: url("521186fb-1032-4a81-bff4-a67d052d6e5e.eot?#iefix") format("eot"), url("cd6106cf-c21e-4d0b-953e-3905a1b9dece.woff2") format("woff2"), url("5f1f53ca-f786-466b-979b-2dc11d2d05e9.woff") format("woff"), url("ac3dc0aa-6281-4d8f-aadb-67c67099ff9c.ttf") format("truetype"), url("0f98417d-ca43-4d3e-b392-21a473e4917a.svg#0f98417d-ca43-4d3e-b392-21a473e4917a") format("svg");
    font-weight: 400;
    font-style: Bold;
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08_n4";
    src: url("9b59db8d-790b-448e-901a-83bee80695d7.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08";
    src: url("9b59db8d-790b-448e-901a-83bee80695d7.eot?#iefix");
    src: url("9b59db8d-790b-448e-901a-83bee80695d7.eot?#iefix") format("eot"), url("794c9044-29a1-4d4e-961e-774f21e86764.woff2") format("woff2"), url("b263ec73-3337-45b9-9e86-933d27164f2c.woff") format("woff"), url("9675cf06-4f76-47fb-97df-9b255507e865.ttf") format("truetype"), url("825d51b9-cc7d-4f4d-ba2c-47ffd291aebd.svg#825d51b9-cc7d-4f4d-ba2c-47ffd291aebd") format("svg");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08_i4";
    src: url("4c83158e-1435-42b3-9577-b2b30ca41519.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08";
    src: url("4c83158e-1435-42b3-9577-b2b30ca41519.eot?#iefix");
    src: url("4c83158e-1435-42b3-9577-b2b30ca41519.eot?#iefix") format("eot"), url("6f903966-2648-436f-8027-84dce5817cbe.woff2") format("woff2"), url("6d0c45bd-b627-4868-942a-91b2f83580f2.woff") format("woff"), url("6334af5a-f301-4a6a-bbe1-2f3f58d3a799.ttf") format("truetype"), url("f00e2b8d-55bd-4f31-b5ae-e6230f2c8481.svg#f00e2b8d-55bd-4f31-b5ae-e6230f2c8481") format("svg");
    font-weight: 400;
    font-style: italic;
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08_n6";
    src: url("c8ffd33b-7f59-4efd-ad34-10f0a04b0bde.eot?#iefix") format("eot");
    font-display: fallback;
}

@font-face {
    font-family: "Adobe Garamond W08";
    src: url("c8ffd33b-7f59-4efd-ad34-10f0a04b0bde.eot?#iefix");
    src: url("c8ffd33b-7f59-4efd-ad34-10f0a04b0bde.eot?#iefix") format("eot"), url("41e9be24-e4f1-40a2-b51a-fc8f72905b72.woff2") format("woff2"), url("055ac9f4-28a5-49a7-a54e-fd7d20678142.woff") format("woff"), url("a3eeab6f-eb9e-4115-bb38-ab043636fc6d.ttf") format("truetype"), url("bedb1dd5-06ae-4b04-869f-38561a959175.svg#bedb1dd5-06ae-4b04-869f-38561a959175") format("svg");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: 'artsy-icons';
    src: url("artsy-icons.eot?uo9ko");
    src: url("artsy-icons.eot?#iefixuo9ko") format('embedded-opentype'),
        url("artsy-icons.woff2?uo9ko") format('woff2'),
        url("artsy-icons.ttf?uo9ko") format('truetype'),
        url("artsy-icons.woff?uo9ko") format('woff'),
        url("artsy-icons.svg?uo9ko#artsy-icons") format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}

/*
 * Legal Disclaimer
 *
 * These Fonts are licensed only for use on these domains and their subdomains:
 * artsy.net/articles/
 *
 * It is illegal to download or use them on other websites.
 *
 * While the @font-face statements below may be modified by the client, this
 * disclaimer may not be removed.
 *
 * Lineto.com, 2017
 */


/*
 *
 * INSTRUCTIONS
 *
 * Copy the Legal Disclaimer and the @font-faces statements to your regular CSS file.
 * The fonts folder(s) should be placed relative to the regular CSS file.
 *
 * You can use either the complete or subsetted fonts:
 * If you donÃ¢â‚¬â„¢t require the entire range of characters, you can use the smaller, subsetted webfonts instead.
 * See "Glyphs & Languages" for an overview of the characters in the corresponding html file in the root directory of this package.
 *
 */

@font-face {
    font-family: "Unica77LLWebRegular";
    src: url("Unica77LLWeb-Regular.eot");
    src: url("Unica77LLWeb-Regular.eot?#iefix") format("embedded-opentype"),
        url("Unica77LLWeb-Regular.woff2") format("woff2"),
        url("Unica77LLWeb-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: "Unica77LLWebMediumItalic";
    src: url("Unica77LLWeb-MediumItalic.eot");
    src: url("Unica77LLWeb-MediumItalic.eot?#iefix") format("embedded-opentype"),
        url("Unica77LLWeb-MediumItalic.woff2") format("woff2"),
        url("Unica77LLWeb-MediumItalic.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: "Unica77LLWebMedium";
    src: url("Unica77LLWeb-Medium.eot");
    src: url("Unica77LLWeb-Medium.eot?#iefix") format("embedded-opentype"),
        url("Unica77LLWeb-Medium.woff2") format("woff2"),
        url("Unica77LLWeb-Medium.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}

@font-face {
    font-family: "Unica77LLWebItalic";
    src: url("Unica77LLWeb-Italic.eot");
    src: url("Unica77LLWeb-Italic.eot?#iefix") format("embedded-opentype"),
        url("Unica77LLWeb-Italic.woff2") format("woff2"),
        url("Unica77LLWeb-Italic.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}

@font-face {
  font-family: Compass Sans;
  font-style: normal;
  font-weight: 400;
  font-display:fallback;src: url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Regular.woff2) format("woff2"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Regular.woff) format("woff"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Regular.ttf) format("truetype")
}

@font-face {
  font-family: Compass Sans;
  font-style: normal;
  font-weight: 500;
  font-display:fallback;src: url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Medium.woff2) format("woff2"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Medium.woff) format("woff"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Medium.ttf) format("truetype")
}

@font-face {
  font-family: Compass Sans;
  font-style: normal;
  font-weight: 700;
  font-display:fallback;src: url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Bold.woff2) format("woff2"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Bold.woff) format("woff"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSans-Bold.ttf) format("truetype")
}

@font-face {
  font-family: "Compass Serif";
  font-style: normal;
  font-weight: 400;
  font-display:fallback;src: url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-Regular.woff2) format("woff2"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-Regular.woff) format("woff"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-Regular.ttf) format("truetype")
}

@font-face {
  font-family: "Compass Serif";
  font-style: normal;
  font-weight: 600;
  font-display:fallback;src: url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-SemiBold.woff2) format("woff2"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-SemiBold.woff) format("woff"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-SemiBold.ttf) format("truetype")
}

@font-face {
  font-family: "Compass Serif";
  font-style: normal;
  font-weight: 700;
  font-display:fallback;src: url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-Bold.woff2) format("woff2"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-Bold.woff) format("woff"),url(//d11k51v32u8ru4.cloudfront.net/fonts/3.2.1/CompassSerif-Bold.ttf) format("truetype")
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-light.7ac514d5.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-light.41b27365.woff) format("woff");
  font-weight: 300;
  font-style: normal
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-lightitalic.2cc76801.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-lightitalic.5fa815d1.woff) format("woff");
  font-weight: 300;
  font-style: italic
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-medium.751bb706.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-medium.eaace554.woff) format("woff");
  font-weight: 500;
  font-style: normal
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-mediumitalic.e4440a25.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-mediumitalic.0e958886.woff) format("woff");
  font-weight: 500;
  font-style: italic
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-semibold.c3e03127.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-semibold.034d3bf3.woff) format("woff");
  font-weight: 600;
  font-style: normal
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-semibolditalic.e1bfbe8e.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-semibolditalic.c15e72d7.woff) format("woff");
  font-weight: 600;
  font-style: italic
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-bold.be459b0a.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-bold.1b7c5e6e.woff) format("woff");
  font-weight: 700;
  font-style: normal
}

@font-face {
  font-family: Lyft Pro;
  src: url(https://cdn.lyft.com/tetris/lyftpro-bolditalic.783b4233.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/lyftpro-bolditalic.616543e4.woff) format("woff");
  font-weight: 700;
  font-style: italic
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://cdn.lyft.com/tetris/proximanova-regularitalic.1b90d21c.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/proximanova-regularitalic.7d6a9503.woff) format("woff");
  font-weight: 400;
  font-style: italic
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://cdn.lyft.com/tetris/proximanova-regular.116fa118.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/proximanova-regular.ffe614f0.woff) format("woff");
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://cdn.lyft.com/tetris/proximanova-mediumitalic.ddae57f9.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/proximanova-mediumitalic.a213ecf5.woff) format("woff");
  font-weight: 500;
  font-style: italic
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://cdn.lyft.com/tetris/proximanova-medium.4037cad5.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/proximanova-medium.f7683815.woff) format("woff");
  font-weight: 500;
  font-style: normal
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://cdn.lyft.com/tetris/proximanova-bolditalic.7f94ad46.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/proximanova-bolditalic.ba9caf42.woff) format("woff");
  font-weight: 700;
  font-style: italic
}

@font-face {
  font-family: Proxima Nova;
  src: url(https://cdn.lyft.com/tetris/proximanova-bold.17bedb5e.woff2) format("woff2"),url(https://cdn.lyft.com/tetris/proximanova-bold.c629b6a9.woff) format("woff");
  font-weight: 700;
  font-style: normal
}
`;
