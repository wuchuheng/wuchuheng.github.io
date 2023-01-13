/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import LightBox from '../Lightbox/Lightbox'

import styles from './styles.module.css'

interface Props {
    src: string;
    alt?: string;
    align?: "center";
    size?: number;
}

function Img({src:url, alt, align, size}: Props): JSX.Element {
    const hasUrl = url.match('https?://[^\\.]+\\.[^\\.]+')
    const prefix = "//qiniu.wuchuheng.com"
    const props = {
        ...(alt ? {alt} : {}),
    }
    const column = <LightBox
        url={hasUrl ? url : `${prefix}${url}`}
        alt={alt || ''}
        {
            ...(size != null ? {width: size} : {width: 30})
        }
    />

    const layoutRender = (
        <div className={styles.layoutWrapper}>{column}</div>
    );

    return align === 'center' ? layoutRender : column;
}

export default Img;
