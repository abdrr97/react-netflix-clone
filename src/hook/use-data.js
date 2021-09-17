import { useContext } from 'react'
import { DataContext } from '../context/data-context'

export const useDataContext = () => useContext(DataContext)
