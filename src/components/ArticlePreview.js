import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px',
    // maxWidth: 500,
    border:'1px solid black'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ArticlePreview() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  DeepDive
                </Typography>
                <Typography variant="h5" gutterBottom>
                  한국의 백신 접종은 늦은가?
                </Typography>
                <Typography variant="body2" color="textSecondary">
                대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이 임명한다.
                정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Read
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">9/13(월)</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}