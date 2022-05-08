const express = require('express');
const router = express.Router();
const reviewData = require('../data/reviews');
const xss = require('xss');

router.post('/',async(req,res)=>{
    if(!req.session.user){
        res.status(400).redirect('/login');
        return;
    }
    let doctorIdRoutes = xss(req.body.doctorId);
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
    try{
    const postingReview = await reviewData.createReview(doctorIdRoutes,review_textRoutes,ratingRoutes);
    if(postingReview){
        res.redirect('/review/post/' + doctorIdRoutes);
    }
    }catch(e){
        res.status(400).render('review',{error:e});
    }
})

module.exports=router;