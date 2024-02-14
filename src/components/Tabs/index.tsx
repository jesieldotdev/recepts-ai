import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, SxProps, ThemeProvider } from '@mui/material/styles';
import { TabProps } from '@/models/General';

const theme = createTheme({
    palette: {
        primary: {
            main: '#906151',
        },
        secondary: {
            main: '#E8CBB8',
        },
    },
});

interface ThreeColTabsProps {
    tabs: TabProps[]
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;

}

const tabStyle = {
    textTransform: 'inherit',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 300
} as SxProps

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // height: 'calc(100vh - 48px)', // Ajusta a altura do painel subtraindo a altura das guias
                    }}
                >
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

export default function ThreeColumnTabs({ tabs }: ThreeColTabsProps) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 32,
                    marginTop: -2
                    // height: '100vh', 
                }}
            >
                <Tabs  sx={{ indicator: { height: 4 } }} value={value} onChange={handleChange} aria-label="Three column tabs example">
                    {
                        tabs && tabs.map(tab => <Tab key={tab.id} disableRipple sx={tabStyle} label={tab.name} />)
                    }
                </Tabs>
                <Box sx={{
                    width: '100%',
                    // backgroundColor: theme.palette.primary.main
                }}>

                    {tabs.map(tab => <TabPanel key={tab.id} value={value} index={tab.id}>
                        {tab.content}
                    </TabPanel>)
                    }

                </Box>
            </Box>
        </ThemeProvider>
    );
}
