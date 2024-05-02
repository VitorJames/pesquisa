import './navbar.css'

// /** criado a função */
const Banner = () => 
{
 return ( /** return JSX */
        <nav className="navbar navbar-light bg-white border-nav d-flex justify-content-center shadow">
            <a href="https://www.esp.ce.gov.br/" className="navbar-brand" target="_blank">
                <img src="/imagens/logo_espce_gov.png" height="50" className="d-inline-block align-top" alt=""/>
            </a>
        </nav>
    )
}

/** exportado a função */
export default Banner
