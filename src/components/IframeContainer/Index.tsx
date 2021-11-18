import React, {useState} from "react";
import LoadingSpinner from "../LoadingSpinner";

interface IframeContainerProps {
    src: string;
    style: {[key: string]: string}
}
const IframeContainer = ({src, style}: IframeContainerProps): React.ReactElement => {
    const [showLoading, setShowLoading] = useState<boolean>(true)
    const handleOnload = () => setShowLoading(false )
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
            />
            {showLoading && <LoadingSpinner style={{...style}}/>}
        </>
    )

}

export default IframeContainer;