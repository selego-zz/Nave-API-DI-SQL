let _pruebaServicio = null;

class PruebaController {
  constructor({ PruebaServicio }) {
    _pruebaServicio = PruebaServicio
  }

  index(req, res) {
    return res.send(_pruebaServicio.index());
  }
}

module.exports = PruebaController;