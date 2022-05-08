const express = require('express');
const router = express.Router();
const data = require("../data");
const doctorData = data.doctorData;

const xss = require('xss');

router.get('/', async (req, res)=>{
    try{
        res.status(200).render('dashboard/search', {title: "Dashboard"});
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    }
});

router.get('/userProfile', async (req, res)=>{
    try{
        res.status(200).render('dashboard/myPage', {title: "Dashboard"});
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    }
});

router.post('/searchDoctors', async (req, res) => {
    //const spec = req.body.searchTerm;
        try {  
            const doctorsData  = await doctorData.getDoctorBySpec(xss(req.body.searchTerm));
            if (doctorsData.length == 0) {
                res.render('dashboard/error', { class: 'not-found', message: "We're sorry, but no results were found" });
                return;                         
            }        

            res.render('dashboard/search', { title: "Doctors Found", results: doctorsData })
        } catch (e) {
            res.status(400).json({ error: e });
        }
    
});

router.get('/doctor/:id', async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).render({ class: "error", message: "Invalid ID" });
        return;
    }
    try {
        const doctorsData = await doctorData.getDoctorById(xss(id));
        res.render('dashboard/showDoctor', { title: 'Doctors Info', Doctor: doctorsData });     
    } catch (e) { 
        res.status(404).render('dashboard/error', { class: "error-not-found", message: "No Doctor was found for given zip code" });
    }
});

module.exports = router;