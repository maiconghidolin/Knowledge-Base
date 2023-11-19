<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArticleController;


Route::get('/', [HomeController::class, 'index'])->name('index');

Route::get('articles/list', [ArticleController::class, 'list'])->name('articles.list');
