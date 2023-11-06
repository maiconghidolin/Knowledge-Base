<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;


Route::get('/', [HomeController::class, 'index'])->name('index');

Route::get('categories/check_slug', [CategoryController::class, 'check_slug'])->name('categories.check_slug');
Route::get('categories/{slug}/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('tags/check_slug', [TagController::class, 'check_slug'])->name('tags.check_slug');
Route::get('tags/{slug}/{tag}', [TagController::class, 'show'])->name('tags.show');

Route::get('articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('articles/check_slug', [ArticleController::class, 'check_slug'])->name('articles.check_slug');
Route::get('articles/{slug}/{article}', [ArticleController::class, 'show'])->name('articles.show');
