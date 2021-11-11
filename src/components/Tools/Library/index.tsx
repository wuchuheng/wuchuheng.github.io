import React from "react";
import {Tag} from "antd";
import styles from "../styles.module.scss";

declare interface LibraryProps extends ImgRenderProps, ARenderProps, TagsRenderProps, StarRenderProps{ }

declare interface ImgRenderProps extends CommonRepProps {
    cover?: string
    desc: string
}

declare interface TagsRenderProps {
    tags: Array<String>
}

declare interface CommonRepProps {
    rep: string
}

declare interface ARenderProps extends CommonRepProps{
    website?: string
    name?: string
}

const Library = ({desc, rep, cover, name, website, tags}: LibraryProps): React.ReactElement => {

    return (
        <div className={styles.itemRender}>
            <ImgRender desc={desc} rep={rep} cover={cover} />
            <ARender rep={rep} name={name} website={website} />
            <p>{desc}</p>
            <TagsRender tags={tags} />
            <StarRender desc={desc} rep={rep} />
        </div>
    )
}

declare interface StarRenderProps extends CommonRepProps{
    desc: string
}

const StarRender = ({rep, desc}: StarRenderProps): React.ReactElement => {
    const classNames: Array<string> = [
        styles.grid,
        styles.gridColumn3
    ]
    const username = getUsernameByRep(rep)
    const repName = getRepName(rep)
    const starUrl = `https://img.shields.io/github/stars/${username}/${repName}`
    const forkUrl = `https://img.shields.io/github/forks/${username}/${repName}`
    const followUrl = `https://img.shields.io/github/followers/${username}`

    return (
        <div className={classNames.join(" ")}>
            <img src={starUrl} alt={desc} />
            <img src={forkUrl} alt={desc} />
            <img src={followUrl} alt={desc} />
        </div>
    )
}

const TagsRender = ({tags}: TagsRenderProps): React.ReactElement => {
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
    const colors: Array<string> =  ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
    return (
        <div className={classNames.join(" ")}>
            {tags.map((tag, index) => {
                return <Tag color={colors[index % colors.length]} key={index}>{tag}</Tag>
            })}
        </div>
    )
}
const ARender = ({website, rep, name}: ARenderProps): React.ReactElement => {
    const url = website ? website : rep;
    name =  name ? name : `${getUsernameByRep(rep)}/${getRepName(rep)}`

    return (
        <a href={url} target="_blank">
            <h3>{name} →</h3>
        </a>
    )
}

const getRepName = (repName: string): string => {
    const [, , rep] = repName.match(/github\.com\/([^\/]+)\/([\w|-|_]+)/)

    return rep

}

const ImgRender = ({cover, desc, rep}: ImgRenderProps): React.ReactElement => {
    cover = cover ? cover : `https://github.com/${getUsernameByRep(rep)}.png?size=80`

    return <img src={cover}  alt={desc}/>
}

const getUsernameByRep = (rep: string) => {
    const [_, username ] = rep.match(/github\.com\/([^\/]+)/)

    return username
}

export default Library