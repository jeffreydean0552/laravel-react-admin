import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Card,
    Typography,
    Button,
    LinearProgress,
    withStyles,
} from '@material-ui/core';

import logo from '../../../assets/img/logos/2/960x540.png';

const Auth = props => (
    <Grid
        container
        justify="center"
        alignItems="center"
        className={props.classes.container}
    >
        <Grid item className={props.classes.content}>
            <>
                {props.loading && (
                    <span>
                        <LinearProgress className={props.classes.progress} />
                    </span>
                )}

                <Card className={props.classes.form}>
                    <Grid
                        container
                        className={props.classes.logoContainer}
                        justify="center"
                    >
                        <img
                            src={logo}
                            alt="company-logo"
                            className={props.classes.logo}
                        />
                    </Grid>

                    <Grid container direction="column" justify="space-between">
                        <Grid item className={props.classes.heading}>
                            <Typography variant="h4" component="h2">
                                {props.title}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="h3"
                                color="textSecondary"
                            >
                                {props.subTitle}
                            </Typography>
                        </Grid>

                        <Grid item>{props.children}</Grid>
                    </Grid>
                </Card>
            </>
        </Grid>
    </Grid>
);

Auth.propTypes = {
    loading: PropTypes.bool,
    title: PropTypes.string,
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const styles = theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            minHeight: '100vh',
        },
    },

    content: {
        width: '32rem',
    },

    form: {
        [theme.breakpoints.up('sm')]: {
            padding: '2rem',
            minHeight: '75vh',
        },
    },

    progress: {
        margin: 0,
        minHeight: '0.5rem',
        borderTopRightRadius: '100%',
        borderTopLeftRadius: '100%',
    },

    logoContainer: {
        textAlign: 'center',
    },

    logo: {
        width: '12rem',
        height: '6rem',
    },

    heading: {
        margin: '2.5rem 0rem',
        textAlign: 'center',
    },
});

const Styled = withStyles(styles)(Auth);

export { Styled as Auth };
