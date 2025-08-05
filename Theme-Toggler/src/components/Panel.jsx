import { useContext } from 'react'
import {ThemeContext} from '../App'

const Panel = ({ title, children }) => {
    const isDark = useContext(ThemeContext);
    return (
        <section className={`space-y-2 space ${isDark ? 'bg-black text-white' : 'bg-white'} p-2`} >
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default Panel
