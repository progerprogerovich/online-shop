<?php

namespace Database\Seeders;

use App\Models\Product;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        $data = file_get_contents(__DIR__ . '/db.json');
        $products = json_decode($data, true)['products'];

        foreach ($products as $product) {
            Product::create([
                'image' => $product['image'],
                'name' => $product['name'],
                'price' => $product['price'],
                'article' => $product['article'],
                'available' => $product['available'],
                'category' => $product['category'],
            ]);
        }
    }
}

