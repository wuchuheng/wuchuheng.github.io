import React from "react";

interface Props {
    children: React.ReactNode;
    url: string;
}

export const CodesanboxRender = ({url}: Props): JSX.Element => (
    <iframe
    src={url}
    style={{
        width: "100%",
        height: "500px",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden"
    }}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
);

export default CodesanboxRender
