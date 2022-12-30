import React, {useCallback, useState} from "react";
import LoadingSpinner from "../LoadingSpinner";
import VoxelDog  from "./VoxelDog/VoxelDog";

const DogContainer = (): React.ReactElement => {
    const [loading, setLoading] = useState<boolean>(true)
    const handleLoad = useCallback(() => {
        setLoading(false)
    }, [])
    return (
        <>
            {loading && <LoadingSpinner /> }
            <div style={{display: loading ? 'none' : 'block'}}>
                <VoxelDog onLoad={handleLoad} />
            </div>
        </>
    )
}

export default DogContainer;