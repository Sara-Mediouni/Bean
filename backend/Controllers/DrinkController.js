const DrinkModel = require('../Models/DrinkSchema');


// Ajouter un plat
const addDrink = async (req, res) => {
  try {  console.log(req.body)
    let image_filename=`${req.file.filename}`;
  
    const newDrink = new DrinkModel
    ({ name:req.body.name,
       description:req.body.description,
       price:req.body.price,
       category:req.body.category,
       rating:req.body.rating,
       image:image_filename,
     });
    await newDrink.save();
    res.status(201).json(newDrink);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Supprimer un plat
const deleteDrink = async (req, res) => {
  try {
    const deletedDrink = await DrinkModel.findByIdAndDelete(req.params.id);
    if (!deletedDrink) {
      return res.status(404).json({ message: 'Plat non trouvé' });
    }
    res.json({ message: 'supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error });
  }
};

// Mettre à jour un plat
const updateDrink = async (req, res) => {
  try {
    const updatedDrink = await DrinkModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDrink) {
      return res.status(404).json({ message: 'Plat non trouvé' });
    }
    res.json({ message: ' mis à jour avec succès', Drink: updatedDrink });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour', error });
  }
};

// Récupérer tous les plats
const getAllDrinks = async (req, res) => {
   try {
     const Drinks = await DrinkModel.find();
     res.json(Drinks);
   } catch (error) {
     res.status(500).json({ message: 'Erreur lors de la récupération', error });
   }
 };
 const filterDrink = async (req, res) => {
  try {
    let drinks;
    const filter = req.params.category;

    if (filter !== "") {
      drinks = await DrinkModel.find({ category: filter });
    } else {
      drinks = await DrinkModel.find(); // Ajout du await ici
    }

    res.json(drinks);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération', error });
  }
};





const getAllCategories = async (req, res) => {
  try {
    
    
    // Utilisation de .lean() pour obtenir des objets JavaScript simples
    const drinkes = await DrinkModel.find().lean(); 
    console.log(drinkes);
    

    const uniqueCategories = drinkes.reduce((acc, drink) => {
      if (drink.category && !acc.includes(drink.category)) {
        acc.push(drink.category);
      }
      return acc;
    }, []);

    res.status(200).json(uniqueCategories );
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des plats', error });
  }
};
const getDrink=async(req,res)=>{
   try
   { 
    const id=req.params.id;
    const Drink=await DrinkModel.findById(id);
    res.status(200).json(Drink);
    }
    catch(error){
      res.status(500).json({ message: 'Error getting the drink', error });
    }
}
 module.exports = {
   addDrink,
   deleteDrink,
   updateDrink,
   getAllDrinks,
   filterDrink,
   
   getAllCategories,
  
   getDrink
 };