/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import LightBox from "../Lightbox/Lightbox";

import styles from "./styles.module.css";

const baseUrl = "https://qiniu.wuchuheng.com/qiniu";
const protocol: string = "storage://";

/**
 * Convert the url to storage url.
 * @param url
 * @returns {string}
 */
export const convertStorageUrl = (url: string) => {
  const subUrl = url.substr(protocol.length);

  const newUrl = `${baseUrl}${subUrl}`;
  return newUrl;
};

/**
 * Check if the given URL has the storage protocol.
 *
 * @param url - The URL to check.
 * @returns {boolean} True if the URL has the storage protocol, false otherwise.
 */
export const hasStorageProtocol = (url: string): boolean => {
  if (
    url.length > protocol.length &&
    url.substr(0, protocol.length) == protocol
  ) {
    return true;
  } else {
    return false;
  }
};

interface Props {
  src: string;
  alt?: string;
  align?: "center";
  size?: number;
}

function Img({ src: url, alt, align, size }: Props): JSX.Element {
  // 1. Process the input.
  // 2. Process the logic.
  // 2.1 If the protocol is storage://, then convert the url with the baseUrl.
  const newUrl = hasStorageProtocol(url) ? convertStorageUrl(url) : url;

  // 3. Return the result.
  const column = (
    <LightBox
      url={newUrl}
      alt={alt || ""}
      {...(size != null ? { width: size } : { width: 30 })}
    />
  );

  const layoutRender = <div className={styles.layoutWrapper}>{column}</div>;

  return align === "center" ? layoutRender : column;
}

export default Img;
