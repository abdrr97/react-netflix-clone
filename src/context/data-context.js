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
        title: 'action',
        items: await fetchData(`/discover/movie?with_genres=28&api_key=${API_KEY}`),
      },
      {
        slug: 'adventure',
        title: 'adventure',
        items: await fetchData(`/discover/movie?with_genres=12&api_key=${API_KEY}`),
      },
      {
        slug: 'animation',
        title: 'animation',
        items: await fetchData(`/discover/movie?with_genres=16&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'comedy',
        items: await fetchData(`/discover/movie?with_genres=35&api_key=${API_KEY}`),
      },
      {
        slug: 'crime',
        title: 'crime',
        items: await fetchData(`/discover/movie?with_genres=80&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'documentary',
        items: await fetchData(`/discover/movie?with_genres=99&api_key=${API_KEY}`),
      },
      {
        slug: 'drama',
        title: 'drama',
        items: await fetchData(`/discover/movie?with_genres=18&api_key=${API_KEY}`),
      },
      {
        slug: 'family',
        title: 'family',
        items: await fetchData(`/discover/movie?with_genres=10751&api_key=${API_KEY}`),
      },
      {
        slug: 'fantasy',
        title: 'fantasy',
        items: await fetchData(`/discover/movie?with_genres=14&api_key=${API_KEY}`),
      },
      {
        slug: 'history',
        title: 'history',
        items: await fetchData(`/discover/movie?with_genres=36&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'horror',
        items: await fetchData(`/discover/movie?with_genres=27&api_key=${API_KEY}`),
      },
      {
        slug: 'music',
        title: 'music',
        items: await fetchData(`/discover/movie?with_genres=10402&api_key=${API_KEY}`),
      },
      {
        slug: 'mystery',
        title: 'mystery',
        items: await fetchData(`/discover/movie?with_genres=9648&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'romance',
        items: await fetchData(`/discover/movie?with_genres=10749&api_key=${API_KEY}`),
      },
      {
        slug: 'science',
        title: 'science',
        items: await fetchData(`/discover/movie?with_genres=878&api_key=${API_KEY}`),
      },
      {
        slug: 'thriller',
        title: 'thriller',
        items: await fetchData(`/discover/movie?with_genres=53&api_key=${API_KEY}`),
      },
      {
        slug: 'tv',
        title: 'tv',
        items: await fetchData(`/discover/movie?with_genres=10770&api_key=${API_KEY}`),
      },
      {
        slug: 'war',
        title: 'war',
        items: await fetchData(`/discover/movie?with_genres=10752&api_key=${API_KEY}`),
      },
      {
        slug: 'western',
        title: 'western',
        items: await fetchData(`/discover/movie?with_genres=37&api_key=${API_KEY}`),
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
