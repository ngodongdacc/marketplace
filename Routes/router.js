const express = require('express');
const router = express.Router();

router.use("/users",require('./usersRouter'));
router.use("/address",require('./addressRouter'));
router.use("/role",require('./roleRouter'));
router.use("/product",require('./productRouter'));
router.use("/shop",require('./shopRouter'));
router.use("/cart",require('./cartRouter'));
router.use("/post",require('./commentRouter')); // Bài đăng  của sản phẩm
router.use("/category",require('./categoryRouter'));
router.use("/sub-category",require('./subcategoryRouter'));
router.use("/order",require('./orderRouter'));

<<<<<<< HEAD
router.use("/trademark", require('./trademarkRouter'));
router.use("/brandOrigin", require('./brandOriginRouter'));
router.use("/origin", require('./originRouter'));
=======
router.use("/trademark", require('./trademarkRouter'))
router.use("/brandOrigin", require('./brandOriginRouter'))
router.use("/origin", require('./originRouter'))
router.use("/unit", require('./unitRouter'))
>>>>>>> Hung
module.exports = router;
