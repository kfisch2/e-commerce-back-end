const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [{
      model: Product,
      attributes: ['product_name']
    }]
  }).then(dbCategoryData => res.json(dbCategoryData))
    .catch(err)
  if (err) {
    console.log(err);
    res.json(err)
  }
});

// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    attributes: ['id', 'category_name'],
    where: {
      id: req.params.id
    },
    include: [{
      model: Product,
      attributes: ['product_name']
    }]
  }).then(dbCategoryData => res.json(dbCategoryData))
    .catch(err) 
    if (err) {
      console.log(err);
      res.json(err)
    }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({

  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({

  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({

  })
});

module.exports = router;
