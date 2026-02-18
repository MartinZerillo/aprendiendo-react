import './App.css'

export function App () {
    return(
        <article className='x-follow-card'>
            <header className='x-follow-card-header'>
                <img className='x-follow-card-avatar' src="https://unavatar.io/random" alt="Imagen usario" />
                <div className='x-follow-card-container'>
                    <strong>Nombre de usuario</strong>
                    <span className='x-follow-card-username'>@username</span>
                </div>
            </header>

            <aside>
                <button className='x-follow-card-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}