import React from 'react';

const CardsList = ({ data, handleDelete, handleEdit }) => {
    // console.log('CardsList: ', data);
    return (
        <div className='todo-cards-container'>
            {data.map((item) => (
                <div key={item.id} className='todo-card'>
                    <div className='todo-card-header'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.location}</p>
                        <p>{item.modifiedAt.toLocaleString()}</p>
                    </div>
                    <div className='todo-card-footer'>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsList;
