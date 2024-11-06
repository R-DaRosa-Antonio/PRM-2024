import {Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../../services/movies-service";
import { IMovie } from "../../@libs/types";

function HighLightSection(){

    const params = useParams();

    const [Movie, setMovie] = useState<IMovie>({}as IMovie);

    useEffect(()=>{

        const movieId = (params.id)? params.id: '9a30bc42-348f-4cc5-8de5-8e13cad1052e'

         
         MoviesService.getMoviesById(params.id).then(result => {
                if(result) setMovie(result)
            })
            .catch(error => {
                console.log(error)
            })
        
            },[params])
        
        
    

    return(
        <Stack>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src={`assets/${Movie.poster}`}/>
                    <Stack
                     sx={{

                        justifyContent:'center'
                     }}
                    >
                        <Typography variant="h4"> {Movie.title}
                        </Typography>

                        <Typography variant = "subtitle2"> <span style={{
                            borderWidth:'1px',
                            borderStyle:'solid',
                            padding:'0.2rem',
                            marginRight:'0.3rem'
                            
                            }}>{Movie.ageRating}</span> Aventura, Fantasia, Ação
                        </Typography>


                        <Typography variant="subtitle1"
                            sx= {{
                               
                            }}
                        > Sinopse
                        </Typography>


                        <Typography variant= "body2">
                            {Movie.description}
                        </Typography>


                        <Stack
                        gap={1}
                        direction="row">
                          

                            <Button 
                            variant="outlined">Assistir</Button>

                            <Button
                            variant="outlined">Detalhes</Button>

                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default HighLightSection;