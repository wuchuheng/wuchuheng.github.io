import React from "react";
import { TagsRender } from "./Library";
// @ts-ignore
import styles from "./styles.module.scss";
import { convertStorageUrl, hasStorageProtocol } from "../Img";

interface Props extends NameRenderPops, TagsRenderProps, LinksRenderProps {
  desc: string;
  cover: string;
}

const Tools = ({
  links,
  website,
  name,
  desc,
  cover,
  tags,
}: Props): React.ReactElement => {
  // 1. Process the input.

  // 2. Process the logic.

  cover = hasStorageProtocol(cover) ? convertStorageUrl(cover) : cover;

  // 3. Return the result.

  return (
    <div className={styles.itemRender}>
      <img src={cover} />
      <NameRender name={name} website={website} />
      <p className="toolsDesc">{desc}</p>
      <TagsRender tags={tags} />
      <LinksRender links={links} />
    </div>
  );
};

interface NameRenderPops {
  website?: string;
  name: string;
}

const NameRender = ({ website, name }: NameRenderPops): React.ReactElement => {
  return website ? (
    <a href={website} target="_blank" className="toolsName">
      {name} →
    </a>
  ) : (
    <h3 className="toolsName">{name}</h3>
  );
};

interface TagsRenderProps {
  tags?: string[];
}

interface LinksRenderProps {
  links?: { string: string };
}
const LinksRender = ({ links }: LinksRenderProps): React.ReactElement => {
  if (!links) return <></>;

  // 1. Process the input.
  // 2. Process the logic.

  const names = Object.getOwnPropertyNames(links);
  const classNames: string[] = [
    styles.grid,
    ...(names.length === 1 ? [styles.gridColumn1] : []),
    ...(names.length === 2 ? [styles.gridColumn2] : []),
    ...(names.length >= 1 ? [styles.gridColumn3] : []),
  ];

  const convertUrl = (url: string) =>
    hasStorageProtocol(url) ? convertStorageUrl(url) : url;

  // 3. Return the result.
  return (
    <div className={classNames.join(" ")}>
      {names.map((name, index) => {
        return (
          <a key={index} href={convertUrl(links[name])}>
            <button
              // color={colors[ index % colors.length]}
              className={styles.button}
            >
              {name}
            </button>
          </a>
        );
      })}
    </div>
  );
};

export { LinksRender };
export default Tools;
