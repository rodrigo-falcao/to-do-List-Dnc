import React, { useState } from 'react';
import './index.scss'
import Delete from '../../assets/delete.png';
import Edit from '../../assets/edit.png';

function Table({ data }) {
    // Declaração de estados
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalNew, setShowModalNew] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState("");

    // Funções dos Modais (Edição e Deleção)
    const openModalEdit = (description) => {
        setSelectedDescription(description);
        setShowModalEdit(true);
    };
    const openModalDelete = (description) => {
        setSelectedDescription(description);
        setShowModalDelete(true);
    };
    const openModalNew = () => {
        setShowModalNew(true);
    };
    
    return (
        <div className='container'>
            {/* Tabela */}
            <table
                className='table'
                id='tabhover'
                style={{
                display: showModalEdit || showModalDelete || showModalNew ? "none" : "table",
                }}
                >
                <thead className='table__title'>
                    <tr>
                        <th>Tarefas</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obj) => (
                        <tr 
                        key={obj.id}
                        className='table__content'>
                            <td className='table__body'>{obj.title}</td>
                                <td className='table__tbCheckContainer'>
                                    <input 
                                    type="checkbox" 
                                    defaultChecked={obj.completed} />
                                </td>
                                <td colSpan={2}>
                                    <img 
                                    src={Edit} 
                                    alt="EditTable"
                                    onClick={() => {
                                        openModalEdit(obj.description)
                                    }}
                                    />
                                    <img src={Delete} 
                                    alt="Delete Table"
                                    onClick={() => {
                                        openModalDelete(obj.description)
                                    }}
                                    />
                                </td>
                        </tr>
                    ))}
                    <tr className='trNew'>
                        <td colSpan={2} onClick={openModalNew}>Nova tarefa...</td>
                        <td className='trNew__add' onClick={openModalNew}>+</td>
                    </tr>
                </tbody>
            </table>

            {/* Modal de Edição */}
            {showModalEdit && (
                <div className='modal'>
                    <div className='modal__content'>
                        <h1>Deseja editar esse item?</h1>
                        <span>{selectedDescription}</span>
                        <div className='modal__content--buttons'>
                            <button 
                            className='buttonNo'
                            onClick={() => setShowModalEdit(false)}>
                                Não
                            </button>
                            <button 
                            className="buttonYes"
                            onClick={() => setShowModalEdit(false)}
                            >
                                Sim
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Deleção */}
            {showModalDelete && (
                <div className='modal'>
                <div className='modal__content'>
                    <h1>Deseja excluir esse item?</h1>
                    <span>{selectedDescription}</span>
                    <div className='modal__content--buttons'>
                        <button 
                        className='buttonNo'
                        onClick={() => setShowModalDelete(false)}>
                            Não
                        </button>
                        <button 
                        className="buttonYes"
                        onClick={() => setShowModalDelete(false)}
                        >
                            Sim
                        </button>
                    </div>
                </div>
            </div>
            )}

            {/* Modal de Adição */}
            {showModalNew && (
                <div className='modal'>
                <div className='modal__content'>
                    <h1>Quer adicionar uma nova tarefa?</h1>
                    <input 
                    type="text" 
                    placeholder='Insira uma nova tarefa' 
                    />
                    <div className='modal__content--buttons'>
                        <button 
                        className='buttonNo'
                        onClick={() => setShowModalNew(false)}>
                            Não
                        </button>
                        <button 
                        className="buttonYes"
                        onClick={() => setShowModalNew(false)}
                        >
                            Sim
                        </button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Table