/**
 *  This file is part of wuchuheng.com
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/15 13:42
 */

import React, {useState} from "react";
import ImgLightbox  from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const Lightbox: React.FC<{alt?: string, url: string, width?: number}> = ({alt,url, width}) => {
    const [isVisit, setIsVisit] = useState<boolean>(false);
    return (
        <>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', justifyItems: 'center'}}>
            <img src={url} onClick={() => setIsVisit(true)} alt={alt}
                style={{
                    ...(width != null? {width: `${width}rem`} : {})
                }}
            />
            {
                isVisit && (
                    // @ts-ignore
                    <ImgLightbox mainSrc={url} onCloseRequest={() => setIsVisit(false)} />
                )
            }
            </div>
        </>
    )
}

export default Lightbox