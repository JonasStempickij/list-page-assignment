import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Form from '../components/Form';
import { Box } from '@mui/system';
import Head from 'next/head';

export default function AddRecord() {
    const [formData, setFormData] = useState({
        artist: '',
        album: '',
        genre: '',
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/records';
        await axios.post(url, formData);
        router.push('/');
    };

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <Head>
                <title>Add Record Page</title>
                <meta name='description' content='Detail Page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Form
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                formData={formData}
            />
        </>
    );
}
