const express = require('express');
const router = express.Router();
const reviewData = require('../data/reviews');
const docData=require('../data/doctors')
const xss = require('xss');

router.post('/:id',async(req,res)=>{
    if(!req.session.user){
        res.status(400).redirect('/login');
        return;
    }
    let doctorIdRoutes = xss(req.params.id);
    let review_textRoutes = xss(req.body.review_text);
    let ratingRoutes = xss(req.body.rating);
    if(!doctorIdRoutes){
        res.status(404).render('review',{error:'No Doctor ID was provided'});
        return;
    }
    if(!review_textRoutes){
        res.status(404).render('review',{error:'No Review Text was provided'});
        return;
    }
    if(!ratingRoutes){
        res.status(404).render('review',{error:'No Rating was provided'});
        return;
    }
    if(review_textRoutes.trim(' ').length===0){
        res.status(404).render('review',{error:'Review Text cannot contain only whitespaces'});
        return;
    }
    if(ratingRoutes < 6 || ratingRoutes > 1){
        res.status(404).render('review',{error:'Rating should be in range from 1 to 5'});
        return;
    }
    const postingReview = await reviewData.createReview(doctorIdRoutes,review_textRoutes,ratingRoutes);
    // const user = await reviewData.get();
    idd = xss(req.params.id);
    const doc= await docData.getDoctorById(req.params.id);
    
    if(postingReview){
        res.render('./userpage/idd');
        return;
        // res.redirect('/reviews/post/' + doctorIdRoutes);
    }
   
});

module.exports=router;