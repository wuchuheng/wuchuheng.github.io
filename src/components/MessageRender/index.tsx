import React, {memo, useCallback, useEffect, useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import styles from "../BrowserWindow/styles.module.scss";
import MuiAlert, {AlertProps} from "@mui/material/Alert";


interface MessageRenderProps {
    open: boolean
    onClose: (isClose) => void
}
const MessageRender = ({open, onClose}: MessageRenderProps): React.ReactElement => {
    const autoHideDuration: number = 6000
    const [timeoutHandler, setTimeoutHandler] = React.useState<null | ReturnType<typeof setTimeout>>();
    useEffect(() => {
        open && setTimeoutHandler(setTimeout(() => onClose(false), autoHideDuration))
        return () => timeoutHandler && clearTimeout(timeoutHandler)
    }, [open])


    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
        onClose(false)
    };

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={6000}
        >
            <Alert onClose={handleClose}
                   severity="success" variant='outlined' sx={{ width: '100%' }}
                   className={styles.alertRender}
            >
                Successful coped
            </Alert>
        </Snackbar>
    )
}

export default memo(MessageRender)

