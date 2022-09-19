import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Form = ({ handleSubmit, handleInputChange, formData }) => {
    const { artist, album, genre } = formData;

    return (
        <form onSubmit={handleSubmit}>
            <Box
                maxWidth='md'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginInline: 'auto',
                    minHeight: '100vh',
                    gap: 2,
                }}
            >
                <Typography variant='h4' mx='auto'>
                    Add New Record
                </Typography>

                <TextField
                    label='Artist'
                    variant='outlined'
                    value={artist}
                    name='artist'
                    required
                    onChange={handleInputChange}
                />
                <TextField
                    label='Album'
                    variant='outlined'
                    value={album}
                    name='album'
                    required
                    onChange={handleInputChange}
                />
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id='select-genre-label'>Genre</InputLabel>
                    <Select
                        labelId='select-genre-label'
                        value={genre}
                        name='genre'
                        onChange={handleInputChange}
                        label='Genre'
                        required
                    >
                        <MenuItem value={'Rock'}>Rock</MenuItem>
                        <MenuItem value={'Pop'}>Pop</MenuItem>
                        <MenuItem value={'Electronic'}>Electronic</MenuItem>
                    </Select>
                </FormControl>
                <ButtonGroup>
                    <Link href={'/'}>
                        <Button type='button'>Back</Button>
                    </Link>
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{ alignSelf: 'flex-end' }}
                    >
                        Submit
                    </Button>
                </ButtonGroup>
            </Box>
        </form>
    );
};

export default Form;
