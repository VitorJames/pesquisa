import './formulario.css';

import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Formulario = () => {
  const descricao_formulario = 'Agradecemos por dedicar seu tempo para realizar o preenchimento nosso questionário de pesquisa. Gostaríamos de tranquilizá-lo de que todos os dados fornecidos neste questionário são confidenciais e serão utilizados apenas para fins de análise e melhoria dos nossos serviços.';

  const showAlert = () => {
    Swal.fire({
      title: 'Atenção',
      text: descricao_formulario,
      confirmButtonText: 'Entendi'
    });
  };

  useEffect(() => {
    showAlert();
  });

  return (
    <div className="container">
      <div className="h-full d-flex align-items-center justify-content-center flex-column mt-3">
        <h1 className='formulario-titulo mb-4'>Pesquisa de satisfação do serviço da GETIC</h1>
        <h5 className='text-muted mb-4'>Por favor, avalie cada item a seguir, selecionando a opção que melhor descreve sua experiência.</h5>
        <a href='/survey' className='btn btn-success btn-lg rounded-1 mt-5'>
          <i className="fa-solid fa-play"></i> Iniciar
        </a>
      </div>
    </div>
  );
};

/** exportado a função */
export default Formulario;

