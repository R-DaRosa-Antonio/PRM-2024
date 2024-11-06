import { API } from "../@libs/axios";
import { IMovie } from "../@libs/types";

const _endpoint = "/movies";

const getMovies = async (): Promise<IMovie[]> => {
  const { data } = await API.get(_endpoint);

  return data;
};

const getMoviesById = async (id: string): Promise<IMovie> => {
  const { data } = await API.get(`${_endpoint}/${id}`);

  return data;
};

const getByCategoryId = async (id: number): Promise<IMovie[]> => {
  const { data } = await API.get(`${_endpoint}?categoryId=${id}`);

  return data;
};

export const MoviesService = {
  getMovies,
  getMoviesById,
  getByCategoryId
};
