import dotenv from 'dotenv';
import users from './src/data/users';
import products from './src/data/products';
import User from './src/schemas/userSchema';
import Product from './src/schemas/productSchema';
import Order from './src/schemas/orderSchema';
import connectDB from './src/config/db';

dotenv.config();
connectDB();

const wipeData = async () => {
  await Order.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
};

const importData = async () => {
  try {
    console.log('Wiping DB...');
    await wipeData();
    console.log('Wipe completed');

    console.log('Creating users...');
    const createdUsers = await User.insertMany(users);
    console.log('Users created');

    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    console.log('Creating products...');
    await Product.insertMany(sampleProducts);
    console.log('Products created');
    console.log('Seeding completed!');
    process.exit();
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    console.log('Wiping DB...');
    await wipeData();
    console.log('Wipe completed');
    console.log('Data destroyed');
    process.exit();
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
