import {Routes, Route} from "react-router-dom";

import './App.css';
import {MoviesPage} from "./Containers";
import {Layout,GenresPage, MovieInfo,SearchPage,LatestPage, OrderdescPage, TvPage} from "./components";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>;
                    <Route index  element={<MoviesPage/>}/>;
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>;
                    <Route path={'/genreList/:genreId'} element={<GenresPage/>}/>;
                    <Route path={'/search'} element={<SearchPage/>}/>;
                    <Route path={'/latest'} element={<LatestPage/>}/>;
                    <Route path={'/tv'} element={<TvPage/>}/>;
                    <Route path={'/orderdesc'} element={<OrderdescPage/>}/>;
                </Route>
            </Routes>
        </div>
    );
}

export default App;
