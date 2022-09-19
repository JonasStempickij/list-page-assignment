import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';

const columns = [
    { field: 'artist', headerName: 'Artist', width: 130 },
    { field: 'album', headerName: 'Album', width: 130 },
    { field: 'genre', headerName: 'Genre', width: 130 },
];

export const DataTable = ({ records }) => {
    const router = useRouter();
    const handleRowClick = (rowData) => {
        const { id } = rowData;
        router.push(`/record/${id}`);
    };
    return (
        <Box>
            <DataGrid
                onRowClick={handleRowClick}
                rows={records}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight
            />
        </Box>
    );
};
