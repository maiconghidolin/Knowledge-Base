<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{

    public function all()
    {
        $categories = Category::all();
        return $this->json($categories);
    }

    public function info(Category $category)
    {
        return $this->json($category);
    }

    public function create()
    {
        $data = request()->validate([
            'name' => 'required|string|max:255',
        ], [], [
            'name' => __('name')
        ]);

        $slug = SlugService::createSlug(Category::class, 'slug', $data['name']);

        $data['slug'] = $slug;

        $category = Category::create($data);

        return $this->json($category);
    }

    public function update(Category $category)
    {
        $data = request()->validate([
            'name' => 'required|string|max:255',
        ], [], [
            'name' => __('name')
        ]);

        $slug = SlugService::createSlug(Category::class, 'slug', $data['name']);

        $data['slug'] = $slug;

        $category->update($data);

        return $this->json($category);
    }

    public function delete(Category $category)
    {
        $category->delete();

        return $this->json($category);
    }
}
