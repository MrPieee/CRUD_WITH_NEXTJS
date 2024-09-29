import EditCrud from '@/components/EditCrud/EditTodo';
import React from 'react';

const CrudEdit = ({params}) => {
    const {tId}=params;
    return (
        <div>
            <EditCrud tId={tId}/>
        </div>
    );
};

export default CrudEdit;