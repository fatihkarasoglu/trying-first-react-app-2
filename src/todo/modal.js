export default function Modal({ name, data, close }) {

    return(
        <div>
            Modal içeriği
            <button onClick={close}>Kapat</button>
        </div>
    )
}