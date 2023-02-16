import express from "express";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
import upload from "../setup.js";
import Form from "../models/form.js";

const router = express.Router();

 router.post("/formData", verifyToken ,upload.single("image"), async (req, res) => {
  try {
    const fileName = req.file.filename;
    const aNumber = req.body.aadharNumber;
    const pNumber = req.body.panNumber;
    const id = req.user.id;
    // console.log({
    //   fileName,
    //   aNumber,
    //   pNumber,
    //   id,
    // });
    const form = await Form.create({
        user: id,
        image: "http://localhost:8800/uploads/"+fileName,
        
        panNumber : pNumber,
        aadharNumber: aNumber
    })
    return res.json(form.toJSON());
  } catch (error) {
    console.log(error);
  }
});
router.get("/", async(req,res)=>{
    await Form.del
    const requests = await Form.find().populate("user").exec()
    console.log(requests);
    return res.json(requests)

})

export default router;
