<?php

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Cviebrock\EloquentSluggable\Services\SlugService;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = ['Suport', 'Dev', 'Client'];

        foreach ($tags as $id => $tag)
            Tag::create(['name' => $tag, 'slug' => SlugService::createSlug(Tag::class, 'slug', $tag)]);
    }
}
