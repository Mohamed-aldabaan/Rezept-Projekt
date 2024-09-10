const Rezept = require("../models/Rezept");


exports.getRezepte = async (req, res) => {
    try {
        const rezepte = await Rezept.find()
        res.status(200).json(rezepte)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRezepteById = async (req,res) => {
    try {
        const rezept = await Rezept.findById(req.params.id);
        if (!rezept)
          return res.status(404).json({ message: "Rezept doesn't exist" });
    
        res.json(rezept);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

exports.createRezept = async (req, res) => {
    const rezept = new Rezept({
        title: req.body.title,
        zutaten: req.body.zutaten,
        anweisungen: req.body.anweisungen,
        kochzeit: req.body.kochzeit
    });
    try {
        const neuRezept = await rezept.save()
        res.status(201).json(neuRezept)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

exports.updateRezept = async (req, res) => {
    try {
        const rezept = await Rezept.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json({message: "Rezept updated successfully", rezept})
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}

exports.deleteRezept = async (req, res) => {
    try {
        const rezept = await Rezept.findByIdAndDelete(req.params.id);
        if (!rezept)
            return res.status(404).json({ message: "Rezept doesn't exist" });
        res.json({ message: "Rezept deleted successfully" });
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}