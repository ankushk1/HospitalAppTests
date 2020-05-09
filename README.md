

# HospitalAppTests
npm install in terminal


1.Open terminal and run index.js. Then on browser run on localhost:8000.

2.Register user on POST- http://localhost:8000/doctors/register and fill name ,email and password in body/x-www-form-urlencoded.

3.Login with email and password. POST-http://localhost:8000/doctors/login and fill email and password in body/x-www-form-urlencoded. A jwt token will be generated, copy it.

4.Toregister patient POST- http://localhost:8000/patients/register_patient. Go into header. Fill one column with content-type = application/json and other with Authourization =bearer+ copied token value. In body/x-www-form-urlencoded fill name and number.

5.To create report of patient with patient and doctors id. POST-http://localhost:8000/patients/create_report.

6.to get all reports of patient. GET- http://localhost:8000/patients/:id/all_reports.
