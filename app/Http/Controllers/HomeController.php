<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Tag;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all(['id', 'name']);
        $tags = Tag::all(['id', 'name']);

        return view('index', [
            'categories' => $categories,
            'tags' => $tags
        ]);
    }
}
