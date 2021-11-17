import React, {memo} from "react";
import { prettyPrintJson } from 'pretty-print-json'

interface CodesanboxSimplePreviewRenderProps {
    children: React.ReactNode
    url: string
}
const CodesanboxPurePreviewRender = ({url}: CodesanboxSimplePreviewRenderProps): React.ReactElement => {
    const data = [
            {
                "uid": "1",
                "title": "狂人日记",
                "id": "1",
                "chapters": [
                    {
                        "id": "1",
                        "title": "狂人日记",
                        "content": "虚..., 别出声,他们在吃人..."
                    }
                ],
                "updatedTime": "2021-11-17T11:56:05.106Z"
            },
        ];

    const html = prettyPrintJson.toHtml(data)
return (
    <>
        <pre dangerouslySetInnerHTML={{ __html: html}} />
    </>
    )
}

export default memo(CodesanboxPurePreviewRender);