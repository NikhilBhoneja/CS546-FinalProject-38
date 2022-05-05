const express = require('express');
const router = express.Router();
const data = require('../data');
const pharmacyData = data.pharmacies;

router.get('/', async (req, res) => {
    try {
        res.status(200).render('pharmacy/home', {title: "Pharmacy Finder"});
    } catch (e) {
        res.status(404).json(e);
    }
});

router.post('/searchPharmacies', async (req, res) => {
    var allPharm = req.body.pharm;
    var nearbyPharm = req.body.nearpharm;
    if (allPharm){
        try {
            const pharmaciesData  = await pharmacyData.getAll();
            if (pharmaciesData.length == 0) {
                res.render('pharmacy/error', { class: 'not-found', message: "We're sorry, but no results were found" });
                return;
            }        

            res.render('pharmacy/searchResult', { title: "Pharmacies Found", results:pharmaciesData })
        } catch (e) {
            res.status(400).json({ error: e });
        }
    }
    if(nearbyPharm){
        const zid = req.body.usersZip;
        try {
            const pharmaciesData  = await pharmacyData.getZip(zid);
            if (pharmaciesData.length == 0) {
                res.render('pharmacy/error', { class: 'not-found', message: "We're sorry, but no results were found" });
             return;
            }        

            res.render('pharmacy/searchResult', { title: "List of nearby Pharmacies", results:pharmaciesData })
        } catch (e) {
            res.status(400).json({ error: e });
        }
    }
});


router.get('/pharmacy/:id', async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).render({ class: "error", message: "Invalid ID" });
        return;
    }
    try {
        const pharmaciesData = await pharmacyData.get(id);
        res.render('pharmacy/ShowPharmacy', { title: 'Pharamcy Info', pharmacy: pharmaciesData });     
    } catch (e) { 
        res.status(404).render('pharmacy/error', { class: "error-not-found", message: "No Pharmacy was found for given zip code" });
    }
});


module.exports = router;