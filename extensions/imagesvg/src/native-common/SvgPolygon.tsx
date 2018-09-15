/**
 * SvgPolygon.tsx
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform abstraction for
 * SVG Polygon elements.
 */

import * as React from 'react';
import * as RNSvg from 'react-native-svg';

import { SvgPolygonProps } from '../common/Types';

export class SvgPolygon extends React.Component<SvgPolygonProps, {}> {
  render() {
    return (
      <RNSvg.Polygon
        fill={this.props.fillColor || '#fff'}
        strokeWidth={this.props.strokeWidth}
        strokeOpacity={this.props.strokeOpacity}
        fillOpacity={this.props.fillOpacity}
        stroke={this.props.strokeColor}
        points={this.props.points}
      />
    );
  }
}

export default SvgPolygon;
