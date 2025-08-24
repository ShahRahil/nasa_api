import express from "express"
import ejs from "ejs"
import axios from "axios"

const app = express();
const port = 4000;
const API_URL = "https://api.nasa.gov/planetary/apod";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req,res)=>{
    // (API_URL+"?api_key="+API_KEY);
    // const data = request.data;
    // console.log(data); 
    res.render("index.ejs");
    // console.log(req.body);
});

app.get("/get-images", async (req,res)=>{
    // (API_URL+"?api_key="+API_KEY);
    // const data = request.data;
    // console.log(data); 
    res.render("index.ejs");
    // console.log(req.body);
});

app.post("/get-images", async (req, res)=>{
    const numImages = req.body.numberOfImages;
    try{
        const imageURL = API_URL+"?api_key="+API_KEY+"&count="+numImages;
        const request = await axios.get(imageURL);
        const bodyData = request.data;
        // console.log(bodyData);
        res.render("index.ejs",{
            content: bodyData
        });
    }
    catch(error){
        res.sendStatus(501);
        console.error(error);
    }
})

app.listen(port, ()=>{
    console.log(`App started at port ${port}`);
});
