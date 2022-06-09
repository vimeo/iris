import { themes } from '@vimeo/iris/themes';

import Footer from '../components/Footer';
import Header from '../components/Header';

export function Page({
  themeSet,
  children,
  sidebar = null,
  ...props
}) {
  function toggleTheme() {
    themeSet((theme) =>
      theme.name === 'dark' ? themes.light : themes.dark
    );
  }

  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      <Header handleToggleTheme={toggleTheme} />

      {sidebar && sidebar}

      <main>{children}</main>

      <Footer />
    </div>
  );
}
