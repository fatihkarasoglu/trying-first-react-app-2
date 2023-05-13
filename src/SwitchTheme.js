import SiteContext, { useSite } from "./context/SiteContext";

export default function SwitchTheme() {

    const {theme, setTheme} = useSite();
    
    return(
        <>
            Mevcut Tema = {theme} <br />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light' )} >Temayı Değiştir</button>
        </>
    )
}