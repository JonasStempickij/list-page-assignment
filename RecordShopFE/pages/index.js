import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { DataTable } from '../components';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function Home({ records }) {
    return (
        <>
            <Head>
                <title>List Page</title>
                <meta name='description' content='Main List Page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginInline: 'auto',
                        minHeight: '100vh',
                        gap: 2,
                    }}
                >
                    <Typography variant='h4' textAlign='center' mx='auto'>
                        List Page
                    </Typography>
                    <DataTable records={records} />
                    <Link href='/addRecord'>
                        <Button variant='contained'>Add Record</Button>
                    </Link>
                </Container>
            </main>
        </>
    );
}

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:5000/api/records');
    const records = res.data;
    return { props: { records } };
}
