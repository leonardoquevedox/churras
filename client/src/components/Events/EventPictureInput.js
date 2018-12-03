import React, { } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    picPreview: {
        height: "200px",
        width: "200px",
        margin: "auto",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    picOptions: {
        width: "100%",
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
        display: "inline-block"
    }
})


class EventPictureInput extends React.Component {
    pictures = [
        { src: "01" },
        { src: "02" },
        { src: "03" },
        { src: "04" },
        { src: "05" }
    ];

    state = {
        selected: this.pictures[0]
    };

    render() {
        const { classes } = this.props;
        return (
            <section style={{ display: "block", textAlign: "center" }}>
                {/* Picture preview */}
                <div className={classes.picPreview} style={{ backgroundImage: `url('./barbecue-${this.state.selected.src}.jpg')` }}></div>
                <div className={classes.picOptions}>
                    {/* Picture options */}
                    {this.pictures.map((picture, index) =>
                        <div
                            onClick={(e) => { this.setState({ selected: picture }) }}
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