const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

//Assertion style 
chai.should();
chai.use(chaiHttp);


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI2NmQ2ZWE5M2U4NjIzMmM0YzEyOTQiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR0VFk1MzFsSkRXV0dITTFRMjA0UTVlUWNCejgvLmwzWVVwdTZyTms2VnA0aGpyVjQxLkdlSyIsIm5hbWUiOiJhYmMiLCJfX3YiOjAsImlhdCI6MTU4OTAxNDg1NiwiZXhwIjoxNTg5MDI0ODU2fQ.NSASGJItYeTte7BRg_AKUtswnVAYnHtDa2XSsOQq0-c';

describe('Patient routes', () => {
    describe("POST api/v1/patients/register_patient", () => {
        it("Returns new patient", done => {
            const patient = {
                phone: 122,                     
            }
            chai.request(server)
                .post("api/v1/patients/register_patient")
                .set('content-type', 'application.json')
                .set({'Authorization':  'bearer ' + token})
                .send(patient)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.patient.should.have.property('phone');
                done();
                })
        })
    })

    describe("POST api/v1/patients/:id/create_report", () => {
        it("Create new report", done => {
            const reportBody = {
                doctor: 'abc'
            }
            const reportQuery = {
                id: "5eb69adb8466544604d8282b"
            }
            chai.request(server)
                .post(`/patients/${reportQuery.id}/create_report`)
                .set('content-type', 'application.json')
                .set({'Authorization':  'bearer ' + token})
                .send(reportBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.report.should.have.property('status');
                    res.body.report.should.have.property('doctor');
                    res.body.report.should.have.property('patient');
                done();
                })
        })
    })

    describe("POST api/v1//patients/:id/all_reports", () => {
        it("Returns all the Reports", done => {
            const reportQuery = {
                id: "5eb69adb8466544604d8282b"
            }
            chai.request(server)
                .get(`api/v1//patients/${reportQuery.id}/all_reports`)
                .set({'Authorization':  'bearer ' + token})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.reports.should.be.a('array');
                    res.body.reports[0].should.have.property('status');
                    res.body.reports[0].should.have.property('doctor');
                    res.body.reports[0].should.have.property('patient');
                done();
                })
        })
    })
})