// /** criado a função */
const Footer = () => {
    const year = new Date().getFullYear()

    return ( /** return JSX */
        <footer className="bg-light bg py-2 fixed-bottom border-top px-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-9 col-md-4 d-flex align-items-center">
                    <small className="text-truncate">
                        © {year} - ESCOLA DE SAÚDE PÚBLICA DO CEARÁ
                    </small>
                </div>

                <ul className="nav col-3 col-md-4 d-flex justify-content-end list-unstyled">
                    <li className="ms-2 py-0">
                        <b>GETIC</b>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

/** exportado a função */
export default Footer
