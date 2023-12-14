import express from 'express';
import bodyParser from 'body-parser';
 const app = express();




//  middleweare
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static('public'));
 app.set('view engine', 'ejs');

 let blogs =[]
 var Search = "";
 var newContent = "";





//  handling main home route
 app.get('/', (req, res) =>{
   res.render('index.ejs' ,{blogs: blogs}) 

 });



//  handling the get request for add path
 app.get('/add', (req, res) =>{
   res.render('add.ejs') 
 });


 //  handling the get request for edit
 app.get('/edit', (req, res) =>{
   res.render('edit.ejs' ,{blogs: blogs,Search,newContent}) 
 });



//  handling  data from form and sending back data
 app.post('/add', (req, res) => {

   const newBlog = {
      title: req.body.title,
      content: req.body.content
   }
   blogs.push(newBlog);
 

      
 
 
console.log(req.body);
   res.render('index.ejs' ,{blogs: blogs}); 
 });


 //  handling  data from form and sending back data
 app.post('/edit', (req, res) => {

   Search = req.body.search
   newContent = req.body.newContent


console.log(newContent);
console.log(req.body.Content);
console.log(req.body , "Content")


   
   res.render('edit.ejs' ,{blogs: blogs,Search,newContent}); 
 });





//  port starting 
 app.listen(3000,() => {
    console.log('listening on port 3000');
 });