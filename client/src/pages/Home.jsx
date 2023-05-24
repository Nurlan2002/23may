import { Button } from '@mui/base'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './index.module.css'

const Home = () => {
    return (
        <>
            <div className={style.image}>
                {/* <div className={style.img}></div> */}
                <div className={style.yazi}><h1>Improved
                    Production level
                    with Robotics</h1>
                    <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
                    <Button variant="contained">View Detaails</Button>

                </div>
                <div className={style.img}></div>
            </div>
            <section>
                <div className={style.container}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item lg={3} sm={6} xc={12}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="250"
                                    image="https://preview.colorlib.com/theme/robotics/img/p1.png
        "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                    The Upper Eye


                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={3} sm={6} xc={12}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="250"
                                    image="	https://preview.colorlib.com/theme/robotics/img/p2.png
        "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    The Crab Wheel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={3} sm={6} xc={12}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="250"
                                    image="https://preview.colorlib.com/theme/robotics/img/p3.png.webp
        "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    The Plug Ninja
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={3} sm={6} xc={12}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="250"
                                    image="https://preview.colorlib.com/theme/robotics/img/p4.png.webp
        "
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    The Controller
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default Home