/**
 * Alert.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Native Alert dialog boxes for ReactXP.
 */

import * as RN from 'react-native';

import * as RX from '../common/Interfaces';
import AppConfig from '../common/AppConfig';
import UserInterface from '../native-common/UserInterface';

// Native implementation for alert dialog boxes
export class Alert implements RX.Alert {
    public show(title: string, message?: string, buttons?: RX.Types.AlertButtonSpec[],
            options?: RX.Types.AlertOptions): void {

        let alertOptions: RN.ExtendedAlertOptions = {};
        if (options && options.rootViewId) {
            const nodeHandle = UserInterface.findNodeHandleByRootViewId(options.rootViewId);
            if (nodeHandle) {
                alertOptions.rootViewHint = nodeHandle;
            } else if (AppConfig.isDevelopmentMode()) {
                console.warn('rootViewId does not exist: ', options.rootViewId);
            }
        }

        RN.Alert.alert(title, message, buttons, alertOptions);
    }
}

export default new Alert();
