import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';



const Home = ({ toggleDrawer }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const items = [
        {
            name: "Rohit Sharma", title: "Card One", src: "./img/dash1.jpg", desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        },
        { name: "virat Kohli", title: "Card Two", src: "./img/dash2.jpg", desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" },
        { name: "MS Dhoni", title: "Card Three", src: "./img/dash2.jpg", desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" }
    ]
    return (
        <>
            <Layout toggleDrawer={toggleDrawer}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        {
                            loading ? (
                                <>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-end", // Align like bars
                                            gap: 2,
                                            height: 300,
                                            width: "100%",
                                            p: 3     // Set max height to align all bars
                                        }}
                                    >
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={40} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={200} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={100} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={150} animation="wave" />
                                    </Box>
                                </>
                            )

                                : (

                                    <BarChart sx={{ width: "100%" }}
                                        xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                        height={300} />
                                )
                        }
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                        {
                            loading ? (
                                <>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-end", // Align like bars
                                            gap: 2,
                                            height: 300,
                                            width: "100%",
                                            p: 3     // Set max height to align all bars
                                        }}
                                    >
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={40} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={200} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={100} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={260} animation="wave" />
                                        <Skeleton variant="rectangular" width={50} height={150} animation="wave" />
                                    </Box>
                                </>
                            )

                                : (

                                    <BarChart sx={{ width: "100%" }}
                                        xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                        height={300} />
                                )
                        }
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {

                        items.map((item, i) =>
                        (
                            <Grid size={{ xs: 12, md: 4 }} key={i}>
                                <Card sx={{ p: 2 }}>
                                    {
                                        loading ?
                                            <Box sx={{ p: 3 }}>
                                                <Skeleton variant="rectangular" width={380} height={140} animation="wave" />
                                                <Skeleton width="60%" />
                                                <Skeleton variant="text" sx={{ fontSize: '1rem', height: "100px" }} />

                                                <Box sx={{ display: "flex", gap: 2 }}>
                                                    <Skeleton width="20%" />
                                                    <Skeleton width="20%" />
                                                </Box>
                                            </Box>
                                            : (
                                                <>
                                                    <CardMedia sx={{ height: 140 }}
                                                        image={item.src}
                                                        title={item.title} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                            {item.desc}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small">Share</Button>
                                                        <Button size="small">Learn More</Button>
                                                    </CardActions>
                                                </>

                                            )
                                    }
                                </Card>


                            </Grid>
                        )
                        )
                    }

                </Grid>
            </Layout >


        </>
    )
}

export default Home
