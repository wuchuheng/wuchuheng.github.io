import React, { useState, useCallback } from 'react'
import styles from "../styles.module.scss";
import { LinksRender } from "../Tools.tsx";
import { MdContentCopy, MdCheck } from 'react-icons/md';

declare interface LibraryProps extends LinksRenderProps,
    ImgRenderProps,
    ARenderProps,
    TagsRenderProps,
    StarRenderProps {}
interface LinksRenderProps {
  links?: { string: string };
}

declare interface ImgRenderProps extends CommonRepProps {
  cover?: string;
  desc: string;
}

declare interface TagsRenderProps {
  tags: Array<String>;
}

declare interface CommonRepProps {
  rep: string;
}

declare interface ARenderProps extends CommonRepProps {
  website?: string;
  name?: string;
}

const Library = ({
  desc,
  rep,
  cover,
  name,
  website,
  tags,
  links,
}: LibraryProps): React.ReactElement => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});
  
  // Handle copy to clipboard functionality
  const handleCodeClick = useCallback(async (text: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [codeId]: true }));
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [codeId]: false }));
      }, 2000);
      
      console.log('Code copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);
  
  // 2. Handle logic.
  // 2.1 If the description is include "`xxx`", then the description is a code block.
  const codeBlockReg = /`.*`/g;
  let codeCounter = 0;
  
  const processedDesc = desc.replace(codeBlockReg, (match) => {
    const codeText = match.replace(/`/g, "");
    const codeId = `code-${rep}-${codeCounter++}`;
    const isCopied = copiedStates[codeId] || false;
    
    return `<span class="code-wrapper" onclick="window.copyCodeHandler && window.copyCodeHandler('${codeText}', '${codeId}')" title="Click to copy">
      <code style="padding: 0.2em 0.4em;">${codeText}
      <span id="icon-${codeId}">
        ${isCopied ? '✓' : '📋'}
      </span>
      </code>
    </span>`;
  });
  
  // Add the copy function to window object and update icons
  React.useEffect(() => {
    (window as any).copyCodeHandler = (text: string, codeId: string) => {
      handleCodeClick(text, codeId);
    };
    
    // Update icons based on copied states
    Object.keys(copiedStates).forEach(codeId => {
      const iconElement = document.getElementById(`icon-${codeId}`);
      if (iconElement) {
        iconElement.innerHTML = copiedStates[codeId] ? '✓' : '📋';
        iconElement.style.color = copiedStates[codeId] ? '#4CAF50' : '#666';
      }
    });
    
    return () => {
      delete (window as any).copyCodeHandler;
    };
  }, [handleCodeClick, copiedStates]);

  return (
    <div className={styles.itemRender}>
      <ImgRender desc={desc} rep={rep} cover={cover} />
      <ARender rep={rep} name={name} website={website} />
      <p className="lib--desc" dangerouslySetInnerHTML={{__html: processedDesc}}></p>
      <TagsRender tags={tags} />
      <LinksRender links={links} />
      <StarRender desc={desc} rep={rep} />
    </div>
  );
};

declare interface StarRenderProps extends CommonRepProps {
  desc: string;
}

const StarRender = ({ rep, desc }: StarRenderProps): React.ReactElement => {
  const classNames: Array<string> = [styles.grid, styles.gridColumn3];
  const username = getUsernameByRep(rep);
  const repName = getRepName(rep);
  const starUrl = `https://img.shields.io/github/stars/${username}/${repName}`;
  const forkUrl = `https://img.shields.io/github/forks/${username}/${repName}`;
  const followUrl = `https://img.shields.io/github/followers/${username}`;

  return (
    <div className={classNames.join(" ")}>
      <img src={starUrl} alt={desc} />
      <img src={forkUrl} alt={desc} />
      <img src={followUrl} alt={desc} />
    </div>
  );
};

export const TagsRender = ({ tags }: TagsRenderProps): React.ReactElement => {
  if (!tags) return <></>;
  const colors: Array<{ color: string; background: string }> = [
    { color: "#D96868", background: "#FAEEEE" },
    { color: "#DFB573", background: "#FBF4E9" },
    { color: "#BABBBF", background: "#F2F2F3" },
    { color: "#8EC358", background: "#F0F8E8" },
    { color: "#5C97FC", background: "#ECF3FF" },
  ];
  return (
    <div className={[styles.flexTags, styles.tagsRender].join(" ")}>
      {tags.map((tag, index) => {
        const { color, background } = colors[index % colors.length];
        return (
          <span
            style={{ color, background }}
            className={[styles.tag, 'lib-tag'].join(" ")}
            key={index}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};
const ARender = ({ website, rep, name }: ARenderProps): React.ReactElement => {
  const url = website ? website : rep;
  name = name ? name : `${getUsernameByRep(rep)}/${getRepName(rep)}`;

  return (
    <a href={url} target="_blank">
      <h3>{name} →</h3>
    </a>
  );
};

const getRepName = (repName: string): string => {
  const [, , rep] = repName.match(/github\.com\/([^\/]+)\/([\w|_|-]+)/);

  return rep;
};

const ImgRender = ({
  cover,
  desc,
  rep,
}: ImgRenderProps): React.ReactElement => {
  cover = cover
    ? cover
    : `https://github.com/${getUsernameByRep(rep)}.png?size=80`;

  return <img src={cover} alt={desc} />;
};

const getUsernameByRep = (rep: string) => {
  const [_, username] = rep.match(/github\.com\/([^\/]+)/);

  return username;
};

export default Library;
