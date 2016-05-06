'use strict';

import React from 'react';

require('styles/header/Badge.less');

class BadgeComponent extends React.Component {
  render() {
    return (
      <div className="badge-component">
        Please edit src/components/header//BadgeComponent.js to update this component!
      </div>
    );
  }
}

BadgeComponent.displayName = 'HeaderBadgeComponent';

// Uncomment properties you need
// BadgeComponent.propTypes = {};
// BadgeComponent.defaultProps = {};

export default BadgeComponent;
