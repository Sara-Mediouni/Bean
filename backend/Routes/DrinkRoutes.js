const express = require("express");
const router = express.Router();

const {
  addDrink,
  deleteDrink,
  filterDrink,
  getAllCategories,
  updateDrink,
  getAllDrinks,

  getDrink
} = require("../Controllers/DrinkController");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${file.originalname}`),
});

const upload = multer({ storage: storage });

router.get("/", getAllDrinks);

router.get('/getallcategories',getAllCategories);
router.get("/category/:category", filterDrink);
router.get("/drink/:id", getDrink)



;
// Ajouter un plat
router.post("/", upload.single("image"), addDrink);

// Supprimer un plat
router.delete("/:id", deleteDrink);



// Mettre à jour un plat
router.put("/:id", updateDrink);

console.log('Routes loaded');

module.exports = router;
