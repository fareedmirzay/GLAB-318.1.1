import express from 'express'
const app = express();
const PORT = 3002;

// middleware
function logger(req, res, next) {
    console.log(`request received: ${req.method}, ${req.url}, ${req.hostname}`)
    next();
}
app.use(logger);


///=================routes=================================================================== 
app.get("/", (req, res) => {
    console.log(req.url, req.hostname, req.method);  
    res.send('1this is the home page')
});

app.get("/About", (req, res) => {
    res.send('####2this is the About page')
});

app.get("/donate", (req, res) => {
    res.send("Please donate to help our cause")
});

app.get("/express", (req, res) => {
    res.send("<h1> Hello from express </h1>")
});

app.route("/user")
    .get((req, res) => {
        res.send("this is the users page");
    })
    .post((req, res) => {
        res.send("post any related to users")
    })
    .put((req, res) => {
        res.send("put anything as it relates to user");
    })
    .delete((req, res) => {
        res.send("delete something for users")
    })

// app.get('/user/:userId/profile/:profileId', (req, res) => {
//     res.send(req.params)
//     console.log(req.params);
// });


app.get("/user/:userID", (req, res) => {
    res.send(`11111Navigated to the user page for: ${req.params.userID}.`);
  });
  
app.get("/user/:userID/profile", (req, res) => {
    res.send(`22222Navigated to the user profile page for: ${req.params.userID}.`);
  });
  
app.get("/user/:userID/profile/:data", (req, res) => {
    res.send(
      `33333Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
    );
  });

// throw an error before error handing middleware//catch all routes
app.use('*', (req, res) => {
    throw new Error("Route not found");
})




//Error handing middleware
app.use((error, req, res, next) => {
    res.status(404).send(err.message);
    res.send(error.message)
    next()
})

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}`);
});

