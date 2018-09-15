/*
 * PluginBase.ts
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Base export for the iOS implementation of the plugin.
 */

import * as Types from '../common/Types';
import ImageSvg from '../native-common/ImageSvg';
import SvgPath from '../native-common/SvgPath';
import SvgRect from '../native-common/SvgRect';
import SvgPolygon from '../native-common/SvgPolygon';
import SvgCircle from '../native-common/SvgCircle';

export { ImageSvg as default, SvgPath, SvgRect, SvgPolygon, SvgCircle, Types };
