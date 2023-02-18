import React from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const pageSize = 10;
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}><button className='userListEdit'>Edit</button></Link>

            <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)

            } />
          </>

        )
      }
    },
  ];


  return (
    <div className='userList'>
      <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  )
}
