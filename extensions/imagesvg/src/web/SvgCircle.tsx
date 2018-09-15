/*
 * SvgCircle.tsx
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform abstraction for
 * SVG Rect elements.
 */

import * as React from 'react';

import { SvgCircleProps } from '../common/Types';

export class SvgCircle extends React.Component<SvgCircleProps, {}> {
  render() {
    return (
      <circle
        fill={this.props.fillColor}
        fillOpacity={this.props.fillOpacity}
        stroke={this.props.strokeColor}
        strokeOpacity={this.props.strokeOpacity}
        strokeWidth={this.props.strokeWidth}
        cx={this.props.cx}
        cy={this.props.cy}
        r={this.props.r}
      />
    );
  }
}

export default SvgCircle;
