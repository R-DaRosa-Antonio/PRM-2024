import { API } from "../@libs/axios";
import { ICategory } from "../@libs/types";

const _endpoint = "/categories";

const create = (category: ICategory) => API.post(_endpoint, category);
const getAll = () => API.get(_endpoint);
const getById = (id: number) => API.get(`${_endpoint}/${id}`);
const update = (id: number, category: ICategory) =>
  API.put(`${_endpoint}/${id}`, category);
const remove = (id: number) => API.delete(`${_endpoint}/${id}`);

export const CategoryService = {
  create,
  getAll,
  getById,
  update,
  remove,
};
