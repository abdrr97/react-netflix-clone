import React, { createContext } from 'react'
import axios from 'axios'

const API_KEY = '0c568d197bc3b68a0c411fc0c7300f3d'
const API_BASE = 'https://api.themoviedb.org/3'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const fetchData = async (endPoint) => await axios.get(`${API_BASE}${endPoint}`)

  const getHomeList = async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await fetchData(`/discover/tv/?with_network=213&api_key=${API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Trending',
        items: await fetchData(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await fetchData(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await fetchData(`/discover/movie?with_genres=28&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await fetchData(`/discover/movie?with_genres=35&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await fetchData(`/discover/movie?with_genres=27&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await fetchData(`/discover/movie?with_genres=10749&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await fetchData(`/discover/movie?with_genres=99&api_key=${API_KEY}`),
      },
    ]
  }

  const search = async (_query, _cancelToken) => {
    if (!_query) return

    return await axios.get(SEARCH_API + _query, { cancelToken: _cancelToken.token })
  }

  const values = {
    getHomeList,
    search,
  }
  return <DataContext.Provider value={values} children={children} />
}

export { DataContext, DataProvider }
