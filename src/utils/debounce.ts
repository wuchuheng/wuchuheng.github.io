type DebounceFunType  = () => void
type DebounceWaitType  = number

const debounce = (func: DebounceFunType, wait: DebounceWaitType): () => void => {
    let timer: ReturnType<typeof setTimeout>;

    return () => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, wait)
    }
}

export default debounce

