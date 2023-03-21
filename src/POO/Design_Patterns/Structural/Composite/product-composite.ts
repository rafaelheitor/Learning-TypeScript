abstract class ProductComponent {
  protected parent!: ProductComponent | null;

  public setParent(parent: ProductComponent | null) {
    this.parent = parent;
  }

  getParent(): ProductComponent | null {
    return this.parent;
  }

  public add(product: ProductComponent): void {}
  public remove(product: ProductComponent): void {}
  public abstract getPrice(): number;
}

class ProductLeaf extends ProductComponent {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }
}

class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  public add(product: ProductComponent): void {
    this.children.push(product);
    product.setParent(this);
  }

  public remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    product.setParent(null);
    this.children.splice(productIndex, 1);
  }

  public getPrice(): number {
    return this.children.reduce(
      (actualValue, child) => actualValue + child.getPrice(),
      0
    );
  }
}

const product1 = new ProductLeaf("Product 1", 55);
const product2 = new ProductLeaf("Product 2", 89);
const product3 = new ProductLeaf("Product 3", 2_000);
const order = new ProductComposite();
order.add(product1);
order.add(product2);
order.add(product3);

console.log(order.getPrice());
console.log(product2.getParent());
order.remove(product2);
console.log(order.getPrice());
console.log(product2.getParent());
