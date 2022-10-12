import React from "react";
import '../../css/iconfont.css'

/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/10/12 09:27
 */

const IconS: React.FC<{ name: String; size?: number }> = ({name, size = 40}) => {
    console.log(name)
    return <i className={`iconfont ${name}`} style={{fontSize: size}} />

}


export default IconS