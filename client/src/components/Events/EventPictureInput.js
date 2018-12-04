import React, { } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    picPreviewWrapper: {
        display: "inline-block",
        verticalAlign: "top",
        width: "calc(100% - 150px)"
    },
    picPreview: {
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.up('md')]: {
            margin: "auto"
        },
        [theme.breakpoints.down('md')]: {
            height: "100px",
            width: "100px",
        }
    },
    picOptions: {
        display: "inline-block",
        maxWidth: "150px",
        marginTop: "10px",
    },
    picOption: {
        height: "50px",
        width: "50px",
        cursor: "pointer",
        marginRight: "10px",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "inline-block",
        [theme.breakpoints.down('md')]: {
            height: "40px",
            width: "40px",
        }
    }
})


class EventPictureInput extends React.Component {
    static pictures = [
        { src: "01" },
        { src: "02" },
        { src: "03" },
        { src: "04" },
        { src: "05" }
    ];

    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.event ? this.props.event.picture : EventPictureInput.pictures[0]
        }
        console.log(this.props.event);
    }

    onPictureChange(selected) {
        this.setState({ selected: selected });
        this.props.onChange(selected);
    }

    render() {
        const { classes } = this.props;
        return (
            <section style={{ display: "inline", textAlign: "center" }}>
                {/* Picture preview */}
                <div className={classes.picPreviewWrapper}>
                    <div className={classes.picPreview} style={{ backgroundImage: `url('./barbecue-${this.state.selected.src}.jpg')` }}></div>
                </div>
                {/* Picture options */}
                <div className={classes.picOptions}>
                    {EventPictureInput.pictures.map((picture, index) =>
                        <div
                            onClick={(e) => { this.onPictureChange(picture) }}
                            key={index}
                            className={classes.picOption}
                            style={{
                                backgroundImage: `url('./barbecue-${picture.src}.jpg')`,
                                opacity: (this.state.selected.src === picture.src ? "1.0" : "0.5")
                            }}
                        >
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventPictureInput)