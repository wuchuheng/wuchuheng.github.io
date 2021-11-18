/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

export default function swCustom(params) {
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: running swCustom code', params);
    }

    // Cache responses from external resources
    registerRoute(
        (context) => {
            const res = [
                /graph\.facebook\.com\/.*\/picture/,
                /netlify\.com\/img/,
                /avatars1\.githubusercontent/,
                /dog\.glb/,
            ].some((regex) => context.url.href.match(regex))

            console.log(res)

            return res
        },
        new StaleWhileRevalidate(),
    );
}