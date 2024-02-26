import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NhanvienModel from '../models/NhanvienModel';

function NhanvienDetail() {
    const [nhanvien, setNhanvien] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        NhanvienModel.find(id)
            .then(data => {
                setNhanvien(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching employee details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!nhanvien) {
        return <p>Employee not found</p>;
    }
    console.log(nhanvien);
    return (
        <div>
            <h2>Employee Detail</h2>
            <ul>
                <li><strong>Code:</strong> {nhanvien.data.code}</li>
                <li><strong>Name:</strong> {nhanvien.data.name}</li>
                <li><strong>Age:</strong> {nhanvien.data.age}</li>
                <li><strong>Salary:</strong> {nhanvien.data.salary}</li>
                <li><strong>Branch:</strong> {nhanvien.data.branch}</li>
            </ul>
       
            <Link to="/">Back to Employee List</Link>
        </div>
    );
}

export default NhanvienDetail;
