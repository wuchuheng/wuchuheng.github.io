import React, {useState} from "react";
import LoadingSpinner from "../LoadingSpinner";

interface IframeContainerProps {
    src: string;
    style: {[key: string]: string}
    codesandbox?: boolean
}
const IframeContainer = ({src, style, ...props}: IframeContainerProps): React.ReactElement => {
    const [showLoading, setShowLoading] = useState<boolean>(true)
    const handleOnload = () => setShowLoading(false )
    const codesandboxAttr = {
        sandbox: "allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
        allow: "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    }
    const isCodesandboxAttr = src.match(/codesandbox\.io/) != null
    console.log(isCodesandboxAttr)
    const CodesandboxIframe = (): React.ReactElement => {
        return (
            <>
                <iframe
                    src={src}
                    style={{
                        width: "100%",
                        height: "500px",
                        border: "0",
                        borderRadius: "4px",
                        overflow: "hidden"
                    }}
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    onLoad={handleOnload}
                    {...(isCodesandboxAttr ? codesandboxAttr : {})}
                />
                {showLoading && <LoadingSpinner style={{...style}}/>}
            </>
        )
    }
    const DefaultIframe = () => {
        return (
            <>
                <iframe
                    src={src}
                    style={{
                        width: '100%',
                        height: '100%',
                        ...style,
                        display: showLoading ? 'none' : 'block'}}
                    onLoad={handleOnload}
                    {...(isCodesandboxAttr ? codesandboxAttr : {})}
                />
                {showLoading && <LoadingSpinner style={{...style}}/>}
            </>
        )
    }


    return (
        <>
            {isCodesandboxAttr && <CodesandboxIframe />}
            {!isCodesandboxAttr && <DefaultIframe />}
        </>
    )

}

export default IframeContainer;