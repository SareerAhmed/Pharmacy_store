    require("dotenv").config(); 

    const Express = require("express");
    const router = require('./router/auth-router');
    const connectDb = require("./utils/db");
    const app = Express();
    const port = 5000;
    app.use(Express.json());


    app.use("/api/auth", router);

    connectDb().then(()=>{
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
            });
    }   )

    
        
        

