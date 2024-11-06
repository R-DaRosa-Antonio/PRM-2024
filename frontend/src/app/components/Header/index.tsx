import { AppBar, Box, Button, Container, Toolbar, Typography, styled } from "@mui/material";

const MenuButton = styled(Button)({
    color:'white',
    fontWeight:400

    
})

function Header(){
    return(
        <AppBar>
            <Container>
             <Toolbar>
                <Typography 
                    variant="h6"
                >
                    Mater Play

                </Typography>
                <Box
                    sx={{
                        paddingLeft: '1rem'

                    }}
                
                >
                    <MenuButton variant= "text" disabled>Todos</MenuButton>
                    <MenuButton variant= "text">Séries</MenuButton>
                    <MenuButton variant= "text">Filmes</MenuButton>

                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;