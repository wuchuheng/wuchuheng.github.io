import React, {memo} from "react";
import { prettyPrintJson } from 'pretty-print-json'

interface CodesanboxSimplePreviewRenderProps {
    children: React.ReactNode
    url: string
}
const CodesanboxPurePreviewRender = ({url}: CodesanboxSimplePreviewRenderProps): React.ReactElement => {
    const data =
        [
            {
                id: 1,
                name: "banner1",
                url: "http:xxx.com/xxx"
            },
            {
                id: 2,
                name: "banner2",
                url: "http:xxx.com/xxx"
            }
        ]
    const html = prettyPrintJson.toHtml(data)
return (
    <>
        <pre dangerouslySetInnerHTML={{ __html: html}} />
    </>
    )
}

export default memo(CodesanboxPurePreviewRender);