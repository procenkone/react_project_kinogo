import {axiosServices} from "./axios.services";
import {urls} from "./urls.configs";

export const movieServices = {
    getAll: () => axiosServices.get(`${urls.discoverMovie}?${urls.languageRU}`).then(value => value.data),
    getPopular: () => axiosServices.get(`${urls.movie}top_rated?${urls.languageRU}`).then(value => value.data),
    paginationMovie: (page) => axiosServices.get(`${urls.discoverMovie}?${urls.languageRU}&${urls.page}${page}`).then(value => value.data),
    movieInfo: (id) => axiosServices.get(`${urls.movie}/${id}?${urls.languageRU}`).then(value => value.data),
    reviewsById: (id) => axiosServices.get(`${urls.movie}${id}/reviews`).then(value => value.data),
    getVideo: (id) => axiosServices.get(`movie/${id}/videos`).then(value => value.data),
    getUpcoming: () => axiosServices.get(`${urls.movie}upcoming?${urls.languageRU}`).then(value => value.data),
    getActor: (id) => axiosServices.get(`${urls.movie}${id}/credits?${urls.languageRU}`).then(value => value.data),
    genreList: () => axiosServices.get(`/genre${urls.movie}list?${urls.languageRU}`).then(value => value.data),
    getGenre: (id) => axiosServices.get(`${urls.discoverMovie}?${urls.languageRU}&${urls.withGenres}${id}`).then(value => value.data),
    paginationGenre: (genreId, page) => axiosServices.get(`${urls.discoverMovie}?${urls.languageRU}&${urls.withGenres}${genreId}&${urls.page}${page}`).then(value => value.data),
    search: (keyword) => axiosServices.get(`/search/movie?${urls.languageRU}&query=${keyword}`).then(value => value.data),
    latest: () => axiosServices.get(`${urls.movie}latest?${urls.languageRU}`).then(value => value.data),
    tv: () => axiosServices.get(`${urls.discoverTv}?${urls.languageRU}`).then(value => value.data),
    tVpagination: (page) => axiosServices.get(`${urls.discoverTv}?${urls.languageRU}&${urls.page}${page}`).then(value => value.data)
}
