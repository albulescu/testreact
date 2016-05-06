'use strict';

import React from 'react';

require('styles/a/B.less');

class BComponent extends React.Component {
  render() {
    return (
      <div className="b-component">
        Please edit src/components/a//BComponent.js to update this component!
      </div>
    );
  }
}

BComponent.displayName = 'ABComponent';

// Uncomment properties you need
// BComponent.propTypes = {};
// BComponent.defaultProps = {};

export default BComponent;
