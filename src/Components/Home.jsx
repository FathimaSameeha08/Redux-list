import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteFromList } from '../Redux/Slices/listSlice';

function Home() {
    const list = useSelector((state) => state.listSliceReducer)
    const dispatch=useDispatch()
    console.log(list);
    return (
        <div>
            <Link to={'/add'}>
                <MDBBtn rounded color='secondary fs-6 mb-3'>
                    Add Student Details <i class="fa-solid fa-plus ms-2"></i>
                </MDBBtn>
            </Link>
            <div>
                <MDBTable className='border'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'> <b>ID</b></th>
                            <th scope='col'> <b>Name</b></th>
                            <th scope='col'> <b>Course</b></th>
                            <th scope='col'><b>Phone</b></th>
                            <th scope='col'><b>City</b></th>
                            <th scope='col'><b>Action</b></th>


                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            list.length > 0 ? list.map((item) => (
                                <tr>
                                    <td>{item.addId}</td>
                                    <td>{item.addName}</td>
                                    <td>{item.addCourse}</td>
                                    <td>{item.addPhone}</td>
                                    <td>{item.addCity}</td>
                                    <td>
                                    <Link to={'/edit/'+item.addId} >
                                        <MDBBtn className='me-4 btn-sm' color='warning'><i class="fa-regular fa-pen-to-square"></i></MDBBtn>
                                    </Link>
                                    <MDBBtn  className='me-1 btn-sm' color='danger' onClick={()=>dispatch(deleteFromList(item.addId))}><i class="fa-solid fa-trash"></i></MDBBtn>
                                    </td>
                                </tr>
                            )) :  <tr>
                            <td colSpan={6}>
                               No Data Available Currently
                            </td>
                        </tr>
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default Home