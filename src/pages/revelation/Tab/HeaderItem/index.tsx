import React from "react";
import Icons from "../../../../components/icons";
// @ts-ignore
import style from './style.module.scss';

/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/10/12 09:47
 */
type HeaderItemPropsType = {
    name: string, iconName: string,
    isActive: boolean
    onClick: () => void
}
const HeaderItem: React.FC<HeaderItemPropsType> = ({name, iconName, isActive, onClick}) => {
    const fontSize = 25;
    return (<div style={{display: "flex", cursor: 'pointer' }} onClick={onClick} className={[isActive ? style.active : ''].join(' ')}>
        <Icons name={iconName} size={fontSize} />
        <div style={{fontSize: fontSize, marginLeft: '5px'}}>{name}</div>
    </div>)
}

export default HeaderItem
