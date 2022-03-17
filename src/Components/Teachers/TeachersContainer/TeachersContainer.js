import React from 'react';
import TeachersItems from './TeachersItems';
import './Teacher.css';

export default function TeachersContainer({data}) {
    return (
        <section className='teachers-section pdg-15 dark-bg center-content'>
            <TeachersItems data={data} />
        </section>
    )
}
