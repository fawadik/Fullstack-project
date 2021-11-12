import Product, { ProductDocument } from '../models/Product'
import { NotFoundError } from '../helpers/apiError'

const create = async (product: ProductDocument): Promise<ProductDocument> => {
  return product.save()
}

const update = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

const findProductById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  return foundProduct
}

const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find()
}

const deleteProduct = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  return foundProduct
}

export default {
  create,
  update,
  findProductById,
  findAll,
  deleteProduct,
}
