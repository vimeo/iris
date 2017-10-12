import typeGenerator from './Type';

const Header1 = typeGenerator('Header1', 'h1');
const Header2 = typeGenerator('Header2', 'h2');
const Header3 = typeGenerator('Header3', 'h3');
const Header4 = typeGenerator('Header4', 'h4');
const Header5 = typeGenerator('Header5', 'h5');
const Header6 = typeGenerator('Header6', 'h6');
const ParagraphLg = typeGenerator('ParagraphLg', 'p');
const ParagraphMd = typeGenerator('ParagraphMd', 'p');
const ParagraphSm = typeGenerator('ParagraphSm', 'p');
const ParagraphAltLg = typeGenerator('ParagraphAltLg', 'p');
const ParagraphAltMd = typeGenerator('ParagraphAltMd', 'p');
const ParagraphAltSm = typeGenerator('ParagraphAltSm', 'p');

export { ParagraphLg, ParagraphSm, ParagraphMd, ParagraphAltLg, ParagraphAltMd, ParagraphAltSm, Header1, Header2, Header3, Header4, Header5, Header6 };