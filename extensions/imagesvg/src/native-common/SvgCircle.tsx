/**
 * SvgCircle.tsx
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform abstraction for
 * SVG Circle elements.
 */

import * as React from 'react';
import * as RNSvg from 'react-native-svg';

import { SvgCircleProps } from '../common/Types';

export class SvgCircle extends React.Component<SvgCircleProps, {}> {
    render() {
        return (
            <RNSvg.Circle
                fill={this.props.fillColor || '#fff'}
                strokeWidth={this.props.strokeWidth}
                strokeOpacity={this.props.strokeOpacity}
                fillOpacity={this.props.fillOpacity}
                stroke={this.props.strokeColor}
                cx={this.props.cx}
                cy={this.props.cy}
                r={this.props.r}
            />
        );
    }
}

export default SvgCircle;
