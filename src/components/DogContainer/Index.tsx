import React, {useCallback, useState} from "react";
import LoadingSpinner from "../LoadingSpinner";
import DogContainer  from "./VoxelDog";

const Index = (): React.ReactElement => {
    const [loading, setLoading] = useState<boolean>(true)
    const handleLoad = useCallback(() => {
        setLoading(false)
    }, [])
    return (
        <>
            {loading && <LoadingSpinner /> }
            <div style={{display: loading ? 'none' : 'block'}}>
                <DogContainer onLoad={handleLoad} />
            </div>
        </>
    )
}

export default Index;