import * as React from "react";
import * as PropTypes from "prop-types";

import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";

export default class Navigation extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    static contextTypes = { theme: PropTypes.object };
    context: { theme: ReactUWP.ThemeType };

  render() {
    const baseStyle: React.CSSProperties = {
      marginTop: "0",
      height: "100vh"
    };
    const navigationTopNodes = [
      <SplitViewCommand label="Connection" icon="Connect" />,
      <SplitViewCommand label="Saved Servers" icon="Save" />
    ];

    const navigationBottomNode = [
      <SplitViewCommand label="Settings" icon={"\uE713"} />,
    ];

    const { theme } = this.context;

    return (
        <NavigationView
          style={baseStyle}
          pageTitle="San Francisco"
          displayMode="overlay"
          autoResize={false}
          background={theme.listLow}
          initWidth={48}
          navigationTopNodes={navigationTopNodes}
          navigationBottomNodes={navigationBottomNode}
          focusNavigationNodeIndex={0}
        >
        </NavigationView>
    );
  }
}