import * as React from 'react';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Navigation from "./Navigation";

export default class Home extends React.Component {
  render() {
    return (
      <div>
          <UWPThemeProvider
            theme={getTheme({
              themeName: "dark",
              accent: "#0078D7",
              useFluentDesign: true,
              desktopBackgroundImage: "https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg"
            })}
            >
              <Navigation />
            </UWPThemeProvider>
      </div>
    );
  }
}
