import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import FormGroup3_9Name from "../FormGroup/formGroup3_9Name";
import FormGroup3_9Input from "../FormGroup/formGroup3_9Input";
import FormGroup3_9Contact from "../FormGroup/formGroup3_9Contact";
import './addPatientCard.css';



export default class AddPatientCard extends React.Component {

    onClicked(event) {
        this.props.enrollPatient(event)
    }


    onChanged(event) {
        this.props.handleInputChange(event)
    }



    render () {
        return (

            <Card style={{display: this.props.addPatientCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                    <CardText>
                        <br />
        
                        <Form>

                            <FormGroup3_9Name
                                nameFirstName = {"pt_firstname"}
                                nameLastName = {"pt_lastname"}
                                valueFirstName = {this.props.firstname}
                                valueLastName= {this.props.lastname}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                              <FormGroup3_9Input
                                label = {"Hospital number"}
                                placeholder = {"hosp1234"}
                                name = {"pt_hospnum"}
                                value = {this.props.hospnum}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <FormGroup3_9Input
                                label = {"Date of birth"}
                                placeholder = {"mm/dd/yyyy"}
                                name = {"pt_dob"}
                                value = {this.props.dob}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <FormGroup3_9Contact
                                labelEmail = {"Contact email"}
                                labelPhone = {"Contact phone"}
                                valueEmail = {this.props.email}
                                nameEmail = {"pt_email"}
                                valuePhone = {this.props.phone}
                                namePhone = {"pt_phone"}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button style={{marginRight: 6}} onClick={(event) => this.onClicked(event)}>Enroll</Button>
                            <Button style={{marginRight: 6}}>Cancel</Button>
                        </Form>
                    
                    </CardText>
                </CardBody>
            </Card>

        )
    }
}           