import React from 'react'
import './index.scss'
import Header from "../../components/Header/header"
import Table from '../../components/Table/Table'

export default function home ({ data }) {
    return (
    <div>
        <Header />
        <section className='body'>
            <div className='body__margin'>
                <p className='body__text'>Otimize seu tempo e se organize com o nosso Planejador Diário.</p>
            </div>
            
        <Table data={data} />
        </section>
    </div>
);
}
