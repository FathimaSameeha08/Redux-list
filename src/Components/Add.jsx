import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../Redux/Slices/listSlice';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';


function Add() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const location = useNavigate()
  const list = useSelector((state) => state.listSliceReducer)
  // console.log(list);
  const handleDropdownSelect = (selectedCourse) => {
    setCourse(selectedCourse);}

  const handleAdd = () => {
    const body = {
      addId: id,
      addName: name,
      addCourse: course,
      addCity: city,
      addPhone: phone
    }
    if (list.some(item => item.addId == id)) {
      alert('ID already exist')
    }
    else {
      if (id === '' || name === '' || course === '' || city === '' || phone === '') {
        alert('Fill all the fields')
      }

      else {
        dispatch(addToList(body))
        alert('Student Add Successful')
        location('/')
      }
    }
  }

  return (
    <>
      <div className="container w-50">
        <h3>Fill the form</h3>
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
            Student ID
          </InputGroup.Text>
          <Form.Control type='number' value={id} onChange={(e) => setId(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
            Student Name
          </InputGroup.Text>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)}
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
          <Form.Control onChange={(e) => setPhone(e.target.value)}
            aria-label="Default"
            type='tel'  pattern="[0-9]{10}" required
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className='w-25' id="inputGroup-sizing-default">
            City
          </InputGroup.Text>
          <Form.Control onChange={(e) => setCity(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <MDBBtn rounded color='warning fs-6 mt-3' onClick={handleAdd}>
          Add  <i class="fa-solid fa-plus "></i>
        </MDBBtn>
      </div>
    </>
  )
}

export default Add