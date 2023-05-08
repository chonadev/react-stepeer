import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { LinearSteeper } from "./LinearSteeper";
import { StepForms } from "./StepForms";

export function Layout() {
    return (
        <div>
            <header>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Proyecto
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            <main>
                <StepForms />
            </main>
            <footer>
                <Box>
                    <LinearSteeper />
                </Box>
            </footer>
        </div>
    );
    
}