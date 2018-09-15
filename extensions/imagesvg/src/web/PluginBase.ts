/*
 * PluginBase.ts
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Base export for the Web implementation of the plugin.
 */

import * as Types from '../common/Types';
import ImageSvg from './ImageSvg';
import SvgPath from './SvgPath';
import SvgRect from './SvgRect';
import SvgCircle from './SvgCircle';
import SvgPolygon from './SvgPolygon';

export { ImageSvg as default, SvgPath, SvgRect, SvgPolygon, SvgCircle, Types };
