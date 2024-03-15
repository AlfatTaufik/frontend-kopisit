import './popup.css'

const Popup = () => {
    return (
        <div className='msg'>
            {localStorage.getItem('msg')}
        </div>
    )
}

export default Popup