import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NhanvienModel from '../models/NhanvienModel';

function NhanvienDelete(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    const handleDelete = () => {
        const ask = window.confirm("Are you sure ?")
        if( ask ){
            NhanvienModel.destroy( id ).then( function(data){
                alert('Xoa thanh cong')
                // Chuyen huong
                navigate('/')
            }).catch( function(error){
                alert('Xoa that bai')
            })
        }
    }
    return (
        <div>
            <button onClick={ handleDelete }>OK</button>
            <Link to={'/'}>Tro lai</Link>
        </div>
    );
}

export default NhanvienDelete;
