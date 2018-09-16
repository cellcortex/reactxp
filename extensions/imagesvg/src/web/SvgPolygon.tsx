/*
 * SvgPolygon.tsx
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform abstraction for
 * SVG Rect elements.
 */

import * as React from 'react';

import { SvgPolygonProps } from '../common/Types';

export class SvgPolygon extends React.Component<SvgPolygonProps, {}> {
    render() {
        return (
            <polygon
                fill={this.props.fillColor}
                fillOpacity={this.props.fillOpacity}
                stroke={this.props.strokeColor}
                strokeOpacity={this.props.strokeOpacity}
                strokeWidth={this.props.strokeWidth}
                points={this.props.points}
            />
        );
    }
}

export default SvgPolygon;
