// @ts-ignore
import style from "./style.module.scss";
import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import Icons from "../../../components/icons";
import Img, {
  convertStorageUrl,
  hasStorageProtocol,
} from "../../../components/Img";

/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/10/12 09:43
 */

type ItemDataType = {
  name: string;
  icon: string;
  urls: string[];
  downloadUrl: string;
};

export default (): React.ReactElement => {
  const items: ItemDataType[] = [
    {
      name: "MacOS",
      icon: "icon-ios",
      urls: ["storage:///image/macos-screen.png"],
      downloadUrl: "https://github.com/wuchuheng/revelation/releases",
    },
    {
      name: "Windows",
      icon: "icon-windows",
      urls: ["storage:///image/macos-screen.png"],
      downloadUrl: "https://github.com/wuchuheng/revelation/releases",
    },
    {
      name: "Linux",
      icon: "icon-linux",
      urls: ["storage:///image/macos-screen.png"],
      downloadUrl: "https://github.com/wuchuheng/revelation/releases",
    },
    {
      name: "IOS",
      icon: "icon-ios",
      urls: [
        "storage:///image/Simulator%20Screen%20Shot%20-%20iPhone%208%20-%202022-10-13%20at%2001.02.29.png",
        "storage:///image/Simulator%20Screen%20Shot%20-%20iPhone%208%20-%202022-10-13%20at%2001.02.24.png",
        "storage:///image/Simulator%20Screen%20Shot%20-%20iPhone%208%20-%202022-10-13%20at%2001.01.26.png",
      ],
      downloadUrl:
        "https://apps.apple.com/cn/app/my-revelation/id1645708224?l=en",
    },
    {
      name: "Android",
      icon: "icon-android",
      urls: ["storage:///image/macos-screen.png"],
      downloadUrl: "https://github.com/wuchuheng/revelation/releases",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={style.main}>
      <div className={style.tabWrapper}>
        {items.map((item, index) => (
          <HeaderItem
            isActive={index == activeIndex}
            name={item.name}
            iconName={item.icon}
            key={index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div
        className={style.img}
        style={{
          gridTemplateColumns: `repeat(${items[activeIndex].urls.length}, 1fr)`,
        }}
      >
        {items[activeIndex].urls.map((item, index) => (
          <img
            src={hasStorageProtocol(item) ? convertStorageUrl(item) : item}
            key={index}
          />
        ))}
      </div>
      <a href={items[activeIndex].downloadUrl}>
        <div className={style.download}>
          <Icons name={items[activeIndex].icon} size={20} />
          <div className={style.downloadTip}>
            Download for {items[activeIndex].name}
          </div>
        </div>
      </a>
    </div>
  );
};
