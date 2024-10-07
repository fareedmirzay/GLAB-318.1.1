import express from "express";
import userRouter from './routes/user.js';
const app = express();
const PORT = 4000;

app.set('view engine', 'pug')
app.set('views', './views')



//middleware
app.use(express.static('public'))
app.use('/user', userRouter);


// Routes
app.get('/', (req, res) => {
    res.render('index', {title: "hello Pug!", message: "Created using pug!!!!"})
    res.send('Hello World!')
})

// Catch all route
app.use("*", (req, res) => {
  throw new Error("Route not found");
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(404).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});



