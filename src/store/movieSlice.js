import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../services";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_, {rejectWithValue}) => {
        try {
            const movie = await movieServices.getAll()
            return movie
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

export const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async (_, {rejectWithValue}) => {
        try {
            const popular = await movieServices.getPopular()
            return popular
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

export const pagination = createAsyncThunk(
    'movieSlice/pagination',
    async (page, {dispatch}) => {
        try {
            const newPage = await movieServices.paginationMovie(page)
            console.log(page)
            dispatch(reloadPage(newPage))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const paginationGenre = createAsyncThunk(
    'movieSlice/pagination',
    async ({genreId, page}, {dispatch}) => {
        try {
            const newPageGenres = await movieServices.paginationGenre(genreId, page)
            dispatch(reloadPageGenre(newPageGenres))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const getMovieInfo = createAsyncThunk(
    'movieSlice/getMovieInfo',
    async (id, {dispatch}) => {
        try {
            const movieDetails = await movieServices.movieInfo(id)
            dispatch(movieInfoDispatch(movieDetails))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const getMovieComments = createAsyncThunk(
    'movieSlice/getMovieComments',
    async (id, {dispatch}) => {
        try {
            const movieComments = await movieServices.reviewsById(id)
            dispatch(movieCommentsDispatch(movieComments))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const getMovieVideo = createAsyncThunk(
    'movieSlice/getMovieVideo',
    async (id, {dispatch}) => {
        try {
            const movieVideo = await movieServices.getVideo(id)
            dispatch(movieVideoDispatch(movieVideo))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const getUpcoming = createAsyncThunk(
    'movieSlice/getUpcoming',
    async (_, {dispatch}) => {
        try {
            const upcoming = await movieServices.getUpcoming()
            dispatch(movieUpcomingDispatch(upcoming))
        } catch (e) {
            console.log(e)
        }
    }
);

export const getMovieActor = createAsyncThunk(
    'movieSlice/getMovieActor',
    async (id, {dispatch}) => {
        try {
            const movieActor = await movieServices.getActor(id)
            dispatch(movieActorDispatch(movieActor))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {dispatch}) => {
        try {
            const genres = await movieServices.genreList()
            dispatch(movieGenresDispatch(genres))
        } catch (e) {
            console.log(e)
        }
    }
);

export const getGenreList = createAsyncThunk(
    'movieSlice/getGenreList',
    async (id, {dispatch}) => {
        try {
            const movieByGenre = await movieServices.getGenre(id)
            dispatch(movieGenreDispatch(movieByGenre))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (keyword, {dispatch}) => {
        try {
            const searchResult = await movieServices.search(keyword)
            dispatch(searchResultDispatch(searchResult))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const latestMovie = createAsyncThunk(
    'movieSlice/latestMovie',
    async (_, {dispatch}) => {
        try {
            const latest = await movieServices.latest()
            dispatch(latestResultDispatch(latest))
        } catch (e) {
            console.log(e.message)
        }
    }
);

export const tvList = createAsyncThunk(
    'movieSlice/tv',
    async (_, {dispatch}) => {
        try {
            const tv = await movieServices.tv()
            dispatch(tvResultDispatch(tv))
        } catch (e) {
            console.log(e.message)
        }
    }
);
export const tVpagination = createAsyncThunk(
    'movieSlice/tVpagination',
    async (page, {dispatch}) => {
        console.log(page)
        try {
            const newTvPage = await movieServices.tVpagination(page)
            dispatch(tVpaginationDispatch(newTvPage))
        } catch (e) {
            console.log(e.message)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        //contents
        movies: [],
        comments: [],
        upcoming: [],
        actor: [],
        genres: [],
        genreList: [],
        latest: [],
        searchResults: [],
        tv: [],
        videos: null,
        movieInfo: null,
        popular: [],
        //status
        status: null,
        statusInfo: true,
        statusUpcoming: true,
        statusActor: true,
        statusGenres: true,
        statusByGenreList: true,
        statusSearchResults: true,
        statusLatest: true,
        statusTv: true,
        statusPopular: null,
        //errors
        error: null,
        errorPopular: null
    },

    reducers: {
        reloadPage: (state, action) => {
            state.movies = action.payload
        },
        reloadPageGenre: (state, action) => {
            state.genreList = action.payload
        },
        tVpaginationDispatch: (state, action) => {
            console.log(action.payload)
            state.tv = action.payload
        },
        movieInfoDispatch: (state, action) => {
            state.statusInfo = true
            state.movieInfo = action.payload
            state.statusInfo = false
        },
        movieCommentsDispatch: (state, action) => {
            state.comments = action.payload
        },
        movieVideoDispatch: (state, action) => {
            state.videos = action.payload
        },
        movieUpcomingDispatch: (state, action) => {
            state.statusUpcoming = true
            state.upcoming = action.payload
            state.statusUpcoming = false
        },
        movieActorDispatch: (state, action) => {
            state.statusActor = true
            state.actor = action.payload
            state.statusActor = false
        },
        movieGenresDispatch: (state, action) => {
            state.statusGenres = true
            state.genres = action.payload
            state.statusGenres = false
        },
        movieGenreDispatch: (state, action) => {
            state.statusByGenreList = true
            state.genreList = action.payload
            state.statusByGenreList = false
        },
        searchResultDispatch: (state, action) => {
            state.statusSearchResults = true
            state.searchResults = action.payload
            state.statusSearchResults = false
        },
        latestResultDispatch: (state, action) => {
            state.statusLatest = true
            state.latest = action.payload
            state.statusLatest = false
        },
        tvResultDispatch: (state, action) => {
            state.statusTv = true
            state.tv = action.payload
            state.statusTv = false
        }
    },

    extraReducers: {
        [getAllMovie.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getPopular.pending]: (state) => {
            state.statusPopular = 'pending'
            state.errorPopular = null
        },
        [getPopular.fulfilled]: (state, action) => {
            state.statusPopular = 'fulfilled'
            state.popular = action.payload
        },
        [getPopular.rejected]: (state, action) => {
            state.statusPopular = 'rejected'
            state.errorPopular = action.payload
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {
    tVpaginationDispatch, tvResultDispatch, latestResultDispatch, searchResultDispatch,
    movieGenreDispatch, reloadPage, reloadPageGenre, movieInfoDispatch, movieCommentsDispatch,
    movieVideoDispatch, movieUpcomingDispatch, movieActorDispatch, movieGenresDispatch
} = movieSlice.actions;

export {movieReducer};