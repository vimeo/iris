import { VerticalMenuItemState as State } from './VerticalMenuItemTypes';

export const nestedMenuOpen = (prevState: State) => ({
  showNestedInteraction: prevState.nestedMenuOpen,
  nestedMenuOpen: prevState.nestedMenuOpen,
  subMenuOpen: prevState.subMenuOpen,
});

export const showNestedInteraction = () => ({
  showNestedInteraction: true,
});

export const linkIsNotHovered = () => ({
  linkIsHovered: false,
});

export const linkIsHovered = () => ({
  linkIsHovered: true,
});

export const panelOpen = () => ({
  nestedMenuOpen: true,
  showNestedInteraction: true,
});

export const panelClose = () => ({
  nestedMenuOpen: false,
  showNestedInteraction: false,
});
