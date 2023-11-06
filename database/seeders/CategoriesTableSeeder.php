<?php

use App\Models\Category;
use Illuminate\Database\Seeder;
use Cviebrock\EloquentSluggable\Services\SlugService;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ['Drive', 'Chat', 'Office', 'Feed', 'Call', 'Callendar', 'Mail', 'Client'];

        foreach ($categories as $id => $categorie)
            Category::create(['name' => $categorie, 'slug' => SlugService::createSlug(Category::class, 'slug', $categorie)]);
    }
}
