import models from '../../models';
import { generateCloudinaryUrl } from '../../helpers/do';

class Products {
  static async createProduct(req, res) {
    try {
      const {
        title, description, status, price, categoryId,
      } = req.body;

      const images = await generateCloudinaryUrl(req.files);

      const inputs = {
        ownerId: Number(req.user.id),
        title,
        description,
        status,
        price,
        categoryId: Number(categoryId),
        images,
      };

      const product = await models.Product.create(inputs, { raw: true });

      return res.status(201).json({ status: 200, data: product });
    } catch (err) {
      console.log('err ====', err);
      return res.status(500).json({ errors: [{ msg: 'server error' }] });
    }
  }

  static async fetchProducts(req, res) {
    try {
      const products = await models.Product.findAll();

      return res.status(200).json({
        status: 200,
        data: products,
      });
    } catch (err) {
      console.log('err ====', err);
      return res.status(500).json({ errors: [{ msg: 'server error' }] });
    }
  }

  static async fetchProduct(req, res) {
    const { id } = req.params;
    const product = await models.Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).json({ status: 404, err: 'Product not found!' });
    }
    return res.status(200).json({
      status: 200,
      data: product,
    });
  }

  static async updateProduct(req, res) {
    try {
      const { id } = req.params;

      const owner = req.user.id;

      const {
        title, description, status, price, categoryId,
      } = req.body;

      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ status: 404, err: 'Product to update does not exist!' });
      }

      if (owner !== product.dataValues.ownerId) {
        return res
          .status(403)
          .json({
            status: 403,
            err:
              'Sorry, you can not update product which does not belong to you.',
          });
      }

      const inputs = {
        title,
        description,
        status,
        price,
        categoryId,
      };

      const [, resulsts] = await models.Product.update(inputs, {
        where: { id },
        returning: true,
      });

      return res.status(200).json({
        status: 200,
        data: resulsts[0].dataValues,
      });
    } catch (err) {
      console.log('err', err.message);
      return res.status(500).json({ errors: [{ msg: 'server error' }] });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      const owner = req.user.id;

      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ status: 404, err: 'Product to delete does not exist!' });
      }

      if (owner !== product.dataValues.ownerId) {
        return res
          .status(403)
          .json({
            status: 403,
            err:
              'Sorry, you can not delete product which does not belong to you.',
          });
      }

      await models.Product.destroy({
        where: { id },
      });

      return res.status(200).json({
        status: 200,
        message: 'Product was successfully deleted!',
      });
    } catch (err) {
      console.log('err', err.message);
      return res.status(500).json({ errors: [{ msg: 'server error' }] });
    }
  }
}

export default Products;
