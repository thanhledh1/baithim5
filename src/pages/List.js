import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NhanvienModel from '../models/NhanvienModel';

function NhanvienList(props) {
    // bookList
    const [NhanvienList,setNhanvienList] = useState([])
    const [loading,setLoading] = useState(true)
    // Goi API
    useEffect( () => {
        NhanvienModel.all().then( function(data){
            // Log data trả về để kiểm tra dữ liệu
            setNhanvienList(data.data)
            setLoading(false)
        }).catch( function(error){
            alert('500 error')
        })
    },[] );

    return (
        <div>
            <Link to={'/create'}> Add new </Link>
            { loading ? <p>Data is loading</p> : null }
            <h1>Employee manager</h1>
            <table class="table table-striped" border={1}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>salary</th>
                        <th>branch</th>
                        <th>action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        NhanvienList.map( (Nhanvien,key) => (
                            <tr key={key}>
                                <th>{ Nhanvien.code }</th>
                                <th>{ Nhanvien.name }</th>
                                <th>{ Nhanvien.age }</th>
                                <th>{ Nhanvien.salary }</th>
                                <th>{ Nhanvien.branch }</th>

                                <th>
                                    <Link to={'edit/' + Nhanvien.id}> Edit </Link>
                                    <Link to={'delete/' + Nhanvien.id}> Delete </Link>
                                    <td>
                                <Link to={'details/' + Nhanvien.id}>Details</Link> {/* Liên kết để xem chi tiết */}
                            </td>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default NhanvienList;
