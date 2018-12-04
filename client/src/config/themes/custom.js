import { createMuiTheme } from '@material-ui/core'

const custom = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#fff',
            dark: '#666666',
            light: '#7986cb',
            main: '#fe1800'
        }
    },
    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiButton: {
            // Name of the rule
            containedPrimary: {
                // Some CSS
                background: `linear-gradient(45deg, #fe1800 30%, #fe6d00 90%)`,
                backgroundColor: 'transparent',
                borderRadius: 40,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
            outlined: {
                borderRadius: '20px'
            },
            // Name of the rule
            fab: {
                // Some CSS
                background: `linear-gradient(45deg, #fe1800 30%, #fe6d00 90%)`,
                backgroundColor: 'transparent',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
            },
            disabled: {
                opacity: 0.5,
                color: '#ffffff !important'
            }
        },
        MuiSvgIcon: {
            root: {
                verticalAlign: 'middle'
            }
        },
        MuiInput: {
            root: {
                padding: '10px',
            },
            underline: {
                '&:before': {
                    borderBottom: '1px solid rgba(20, 20, 20, 0.2)'
                },
                '&:after': {
                    borderBottom: `2px solid #fe1800`
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: `2px solid #fe1800`
                }
            },
            input: {
                breakpoints: {
                    sm: {
                        fontSize: '12px !important'
                    }
                },
            }
        },
        MuiTabs: {
            root: {
                width: '100%',
                boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.2)',
            }
        },
        MuiTab: {
            label: {
                fontSize: '10px'
            }
        }
    }
})

export default custom