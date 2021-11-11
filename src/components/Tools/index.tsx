import React from "react";
import { Tag, Button } from 'antd';
import styles from "./styles.module.scss"
import 'antd/dist/antd.css'

interface Props extends NameRenderPops, TagsRenderProps, LinksRenderProps{
    desc: string;
    cover: string;
}

const Tools = ({links, website, name, desc, cover, tags}: Props): React.ReactElement => {
    return (
        <div className={styles.itemRender}>
            <img src={cover} />
            <NameRender name={name} website={website}  />
            <p>{desc}</p>
            <TagsRender tags={tags} />
            <LinksRender links={links} />
        </div>
    )
}

interface NameRenderPops {
    website?: string;
    name: string;
}

const NameRender = ({website, name}: NameRenderPops): React.ReactElement => {
    return website ?
        (<a href={website} target="_blank">{name} →</a>) :
        (<h3>{name}</h3>);
}

interface TagsRenderProps {
    tags?: Array<string>
}

const TagsRender = ({tags}: TagsRenderProps): React.ReactElement => {
    if (!tags) return <></>
    const classnames = [
        styles.grid,
        styles.tagsRender,
        ...(tags.length === 1 ? [styles.gridColumn1]: []),
        ...(tags.length === 2 ? [styles.gridColumn2]: []),
        ...(tags.length === 3 ? [styles.gridColumn3]: []),
        ...(tags.length === 4 ? [styles.gridColumn4]: []),
        ...(tags.length >= 5 ? [styles.gridColumn5]: []),
    ]
    const colors: Array<string> =  ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];

    return (
        <div className={classnames.join(' ')}>
            {tags.map((tag, index) => {
                const color = colors[ index % colors.length]
                return <Tag
                    key={index}
                    color={color}
                >{tag}</Tag>
            } )}
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
    const colors: Array<string> =  ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
    return (
        <div className={classNames.join(" ")}>
            {names.map((name, index) => {
                return (
                    <a key={index} href={links[name]}>
                        <Button
                            color={colors[ index % colors.length]}
                        >{name}</Button>
                    </a>
                )
            })}
        </div>
    )
}

export default Tools;



