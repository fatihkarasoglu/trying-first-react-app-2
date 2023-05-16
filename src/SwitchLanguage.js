import { useSite } from "./context"

export default function SwitchLanguage() {

    const {language, setLanguage} = useSite();

    return(
        <>
            Mevcut Dil = {language} <br />
            <button onClick={() => setLanguage(language === 'TR' ? 'EN' : 'TR' )} >Dili Değiştir</button>
        </>
    )
}