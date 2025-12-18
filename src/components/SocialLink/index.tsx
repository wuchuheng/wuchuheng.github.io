import React from "react";
// @ts-ignore
import styles from "../Tools/styles.module.scss";
import {
    SiGravatar
} from "react-icons/si"

declare interface LibraryProps extends ImgRenderProps, ARenderProps, TagsRenderProps, StarRenderProps, LinksRenderProps{
    desc: string
}

declare interface ImgRenderProps extends CommonRepProps{
    name: string
}

declare interface TagsRenderProps {
    tags: Array<String>
}

declare interface CommonRepProps {
    avatar?: string
}

declare interface ARenderProps extends CommonRepProps{
    website: string
    name: string
}

const SocialLink = ({desc, avatar, name, website, tags, links}: LibraryProps): React.ReactElement => {

    return (
        <div className={styles.itemRender}>
            <ImgRender name={name} avatar={avatar} />
            <ARender avatar={avatar} name={name} website={website} />
            <p>{desc}</p>
            <TagsRender tags={tags} />
            <LinksRender links={links} />
        </div>
    )
}

interface LinksRenderProps {
    links?:{string : string}
}
const LinksRender = ({links}: LinksRenderProps): React.ReactElement => {
    if (!links) return (<></>)
    const names = Object.getOwnPropertyNames(links)
    const classNames: Array<string> = [
        styles.grid,
        ...(names.length === 1 ? [styles.gridColumn1] : []),
        ...(names.length === 2 ? [styles.gridColumn2] : []),
        ...(names.length >= 1 ? [styles.gridColumn3] : []),
    ]
    return (
        <div className={classNames.join(" ")}>
            {names.map((name, index) => {
                return (
                    <a key={index} href={links[name]}>
                        <button
                            // color={colors[ index % colors.length]}
                            className={styles.button}
                        >{name}</button>
                    </a>
                )
            })}
        </div>
    )
}


declare interface StarRenderProps extends CommonRepProps{
    desc: string
}

export const TagsRender = ({tags}: TagsRenderProps): React.ReactElement => {
    if (!tags) return (<></>)
    const classNames = [
        styles.grid,
        styles.tagsRender,
        ...(tags.length === 1 ? [styles.gridColumn1] : []),
        ...(tags.length === 2 ? [styles.gridColumn2] : []),
        ...(tags.length === 3 ? [styles.gridColumn3] : []),
        ...(tags.length === 4 ? [styles.gridColumn4] : []),
        ...(tags.length >= 5 ? [styles.gridColumn5] : []),
    ]
    const colors: Array<{color: string; background: string}> =  [
        {color: '#D96868', background:'#FAEEEE'},
        {color: '#DFB573', background:'#FBF4E9'},
        {color: '#BABBBF', background:'#F2F2F3'},
        {color: '#8EC358', background:'#F0F8E8'},
        {color: '#5C97FC', background:'#ECF3FF'},
    ];
    return (
        <div className={classNames.join(" ")}>
            {tags.map((tag, index) => {
                const {color, background} = colors[index % colors.length]
                return <span
                    style={{color, background}}
                    className={styles.tag}
                    key={index}>{tag}</span>
            })}
        </div>
    )
}
const ARender = ({website, name}: ARenderProps): React.ReactElement => {
    return (
        <a href={website} target="_blank">
            <h3>{name} →</h3>
        </a>
    )
}

const ImgRender = ({name, avatar}: ImgRenderProps): React.ReactElement => {
    return avatar ? <img src={avatar}  alt={name}/> : <SiGravatar style={{fontSize: "2.7rem", color: 'var(--ifm-color-primary)', marginBottom: ".2rem"}} />
}

export default SocialLink