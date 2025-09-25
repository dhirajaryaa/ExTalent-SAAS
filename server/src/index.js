import app from "./app.js";
import { port } from "./config/env.js";
import connectDB from "./config/db.js";

// data base connection
connectDB()
.then(()=>{
    // server listening
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
})
.catch((err) => console.error(err));

