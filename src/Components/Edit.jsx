import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {editList } from '../Redux/Slices/listSlice';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [course, setCourse] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch=useDispatch()
    const location=useNavigate()

    const handleDropdownSelect = (selectedCourse) => {
        setCourse(selectedCourse);
    }

    const urlId=useParams()
    const list = useSelector((state) => state.listSliceReducer)

    useEffect(()=>{
        const findData=list.filter((item)=>item.addId===urlId.urlId)
        if(findData.length>0){
            setId(findData[0].addId)
            setName(findData[0].addName)
            setPhone(findData[0].addPhone)
            setCourse(findData[0].addCourse)
            setCity(findData[0].addCity)
        }
    },[list, urlId.urlId])
    const handleEdit = () => {
        const body = {
            addId:id,
          addName: name,
          addCourse: course,
          addCity: city,
          addPhone: phone
        }        
          if ( name === '' || course === '' || city === '' || phone === '') {
            alert('Fill all the fields')
          }
    
          else {
            dispatch(editList(body))
            alert('Changes made successfully')
            location('/')
            setName('');setCity('');setPhone('');setCourse('')
          }
        
      }
      console.log(list);


    return (
        <div>
            <div className="container w-50">
                <h3>Edit Details</h3>
                <InputGroup className="mb-3 mt-3">
                    <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
                        Student ID
                    </InputGroup.Text>
                    <Form.Control value={id} 
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
                        Student Name
                    </InputGroup.Text>
                    <Form.Control value={name}  onChange={e=> setName(e.target.value)}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
                        Course
                    </InputGroup.Text>
                    <Form.Control value={course} disabled className='bg-white' onChange={(e) => setCourse(e.target.value)}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <Dropdown onSelect={handleDropdownSelect}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Select
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Mearn Stack">Mearn Stack</Dropdown.Item>
                            <Dropdown.Item eventKey="Python ">Python</Dropdown.Item>
                            <Dropdown.Item eventKey="Data Science">Data Science</Dropdown.Item>
                            <Dropdown.Item eventKey="AI/ML">AI/ML</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
                        Phone
                    </InputGroup.Text>
                    <Form.Control value={phone} onChange={e => setPhone(e.target.value)}
                        aria-label="Default"
                        type='tel' pattern="[0-9]{10}" required
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
                        City
                    </InputGroup.Text>
                    <Form.Control value={city} onChange={e => setCity(e.target.value)}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <MDBBtn rounded color='warning fs-6 mt-3' onClick={handleEdit} >
                    Submit Changes
                </MDBBtn>
            </div>
        </div>
    )
}

export default Edit