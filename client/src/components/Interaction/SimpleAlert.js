import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SimpleAlertDialog extends React.Component {
    render() {
        const { isOpen, title, message } = this.props;
        return (
            <div>
                <Dialog
                    open={isOpen}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{title || ""}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(e) => { this.props.onAccept(e) }} color="primary" autoFocus>
                            Beleza
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default SimpleAlertDialog;