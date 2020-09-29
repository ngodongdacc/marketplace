const express = require("express");
const router = express.Router();
const Address = require("../Model/address");
const addressCtr = require("../Controllers/addressController");
const {checkSignIn} = require("../middleware/auth")
const {error_400} = require("../validator/errors")

 check_is_role_or_admin = (id)=>{
    return async (req, res, next) => {
        try {
            if(req.user.Role === "admin") next()
            else Address.findById(req.params.id)
                    .exec((e,f)=>{
                        if(e) next(e)
                        if(!f) return error_400(res,`Không tìm thấy địa chỉ ${id}`,"id")
                        if(f.IdUser !== req.user._id) return error_400(res,"Bạn không có quyền thực hiện chức năng này này","Role")
                        next()
                    })
        } catch (error) {
            next(error)
        }
}}

router.post("/",checkSignIn(), addressCtr.add_address);
router.post("/update/:id",checkSignIn(),check_is_role_or_admin(), addressCtr.update_address);
router.post("/delete/:id",checkSignIn(), addressCtr.remove_address);
router.post("/remove/list",checkSignIn(), addressCtr.remove_address);
router.get("/search",checkSignIn(), addressCtr.search_address);

module.exports = router;