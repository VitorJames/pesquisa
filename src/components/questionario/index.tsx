import './questionario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import questions from './questions.tsx';

const Questionario = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [respostas, setRespostas] = useState({});
    const [finish, setFinish] = useState(false);
    const [next, setNext] = useState(false);
    const totalPerguntas = questions.length;

    useEffect(() => {
        if (currentQuestion === totalPerguntas && finish) {
            console.log(respostas);
            
            showAlert();
        }
    }, [currentQuestion, totalPerguntas, finish]);

    const changeQuestion = (mode: string) => {
        let questionNumber = currentQuestion;

        if (mode == 'previous') {
            questionNumber -= 1
        } else {
            questionNumber += 1
        }

        setCurrentQuestion(questionNumber);

        const radioButtons = document.getElementsByTagName('input');
        
        Array.from(radioButtons).forEach((radioButton:any) => {
            radioButton.checked = false;
        });

        setNext(false);
    };

    const changeOption = (event: { target: { value: any } }) => {
        const questionId = currentQuestion;
        const answer = event.target.value;

        setRespostas(prevRespostas => ({
            ...prevRespostas,
            [questionId]: answer
        }));

        setNext(true)
    };

    const showAlert = () => {
        Swal.fire({
            title: 'Obrigado por sua participação!',
            text: 'Sua opinião é extremamente valiosa para nós.',
            icon: 'success',
            confirmButtonText: 'Voltar à página inicial'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/';
            }
        });
    };

    const renderQuestion = () => {
        const currentQuestionData = questions.find(question => question.id === currentQuestion);
        if (!currentQuestionData) return null;

        return (
            <div id={`question${currentQuestion}`}>
                <h2 className='mt-2 mb-4'> {currentQuestionData.id} - {currentQuestionData.question}</h2>
                <div className='pb-5 fs-5'>
                    {currentQuestionData.options.map((option, index) => (
                        <div key={index} className="form-check form-check-inline">
                            <input
                                className='form-check-input border-3'
                                type="radio"
                                name={`${currentQuestionData.id}`}
                                value={option}
                                onChange={changeOption}
                                required
                            />
                            {option}
                            <label className="form-check-label"></label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="h-full d-flex align-items-center justify-content-center flex-column mt-3">
                <div className="border border-2 rounded-3 p-4 bg-white">
                    {renderQuestion()}
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary" onClick={() => changeQuestion('previous')} hidden={currentQuestion <= 1}>
                            <i className="fa-solid fa-chevron-left"></i> Pergunta anterior
                        </button>
                        <div className="mt-2 text-center">{currentQuestion} de {totalPerguntas} perguntas</div>
                        {currentQuestion < totalPerguntas ? (
                            <button className={!next ? 'btn btn-secondary' : 'btn btn-primary'} onClick={() => changeQuestion('next')} disabled={!next}>
                                Próxima pergunta <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        ) : (
                            <button className="btn btn-success" onClick={() => setFinish(true)}>
                                <i className="fa-solid fa-check"></i> Enviar pesquisa
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questionario;
