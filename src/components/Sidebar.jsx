import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory_1, setSelectedCategory_2 }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
        }}
    >
        {categories.map((mass) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory_2(mass.name)}
                style={{
                    background: mass.name === selectedCategory_1 && '#FC1503',
                    color: 'white',
                }}
                key={mass.name}
            >
                <span
                    style={{
                        color: mass.name === selectedCategory_1 ? 'white' : 'red',
                        marginRight: '15px',
                    }}
                >
                    {mass.icon}
                </span>
                <span style={{ opacity: mass.name === selectedCategory_1 ? '1' : '0.8' }}>
                    {mass.name}
                </span>
            </button>
        ))}
    </Stack>
);
export default Sidebar;
