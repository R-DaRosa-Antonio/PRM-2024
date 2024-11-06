import {Box, Container, Stack, Typography} from "@mui/material";
import Moviecard from "../MovieCard";
import { useEffect, useState } from "react";
import { ICategory, IMovie } from "../../@libs/types";
import { MoviesService } from "../../services/movies-service";


type SectionProps = {
    category: ICategory;
}


function Section({
    category

}:SectionProps){ 
    const [movies, setMovies] = useState<IMovie[]>([]);

useEffect(() =>{
// executa oque esta aqui dentro quando carrega o componente

if(category.id){
    MoviesService.getByCategoryId(category.id)
        .then(result =>{
        setMovies(result)
    });
}

},[]); 
        
    return(
        
        <Box>
          <Container>
            <Typography
                variant="h6"
                sx={{
                    fontWeight:400,
                    paddingTop: '2rem'
                }}
            >
            

                {category.name}
            </Typography>
            <Stack
                direction="row"
                gap="5rem"
                sx={{
                    overflowY:"hidden",
                    whiteSpace: 'nowrap',
                    paddingY: "1rem"


                }}
            >
                {movies.map(item=>(
                    <Moviecard key={item.id} movie={item}/>
                ))}
                

            </Stack>

            </Container>  
        </Box>
    )
}

export default Section;