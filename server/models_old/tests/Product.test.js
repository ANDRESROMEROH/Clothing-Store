import ProductModel from '../Product';

test('It accepts all params and implements all methods', () => {
    const raw = {id: '1234', name: 'Jacket', price: 200, images: ['1']};
    const product = new ProductModel(raw);
    expect(product.getId()).toBe(raw.id);
    expect(product.getName()).toBe(raw.name);
    expect(product.getPrice()).toBe(raw.price);
    expect(product.getImages()).toBe(raw.images);
    expect(product.getData()).toEqual(raw);
});
