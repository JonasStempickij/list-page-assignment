import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Index = ({ singleRecord }) => {
    const { artist, album, genre, id } = singleRecord;

    const router = useRouter();

    const handleDelete = async () => {
        const url = `http://localhost:5000/api/records/${id}`;
        await axios.delete(url);
        router.push('/');
    };

    return (
        <>
            <Head>
                <title>Detail Page</title>
                <meta name='description' content='Detail Page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Container
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                <Typography variant='h4' textAlign='center' mx='auto'>
                    Detail Page
                </Typography>
                <Card sx={{ minWidth: 300 }}>
                    <CardContent>
                        <Typography variant='h4'>{artist}</Typography>
                        <Typography variant='h5'>{album}</Typography>
                        <Typography variant='subtitle1'>{genre}</Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={'/'}>
                            <Button>Back to List Page</Button>
                        </Link>
                        <Button
                            variant='outlined'
                            color='error'
                            onClick={handleDelete}
                        >
                            Delete Record
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
};

export async function getServerSideProps({ params }) {
    const { id } = params;
    try {
        const res = await axios.get(`http://localhost:5000/api/records/${id}`);
        const singleRecord = res.data;
        return { props: { singleRecord } };
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
}

export default Index;
