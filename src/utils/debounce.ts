type DebounceFunType  = () => void
type DebounceWaitType  = number

const debounce = (func: DebounceFunType, wait: DebounceWaitType): () => void => {
    let timeoutHandle: number

    return () => {
        timeoutHandle && clearTimeout(timeoutHandle)
        timeoutHandle = setTimeout(() => {
            func()
        }, wait)
    }
}

export default debounce

