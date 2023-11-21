<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;


Route::get('/', [HomeController::class, 'index'])->name('index');

Route::group(['as' => 'faq.', 'prefix' => 'faq'], function () {

    Route::group(['as' => 'articles.', 'prefix' => '/articles'], function () {
        Route::get('/list', [ArticleController::class, 'list'])->name('articles.list');
    });

    Route::group(['as' => 'categories.', 'prefix' => '/categories'], function () {
        Route::get('/', [CategoryController::class, 'all'])->name('category.all');
        Route::post('/', [CategoryController::class, 'create'])->name('category.create');
        Route::get('/{category}', [CategoryController::class, 'info'])->name('category.info');
        Route::delete('/{category}', [CategoryController::class, 'delete'])->name('category.delete');
        Route::patch('/{category}', [CategoryController::class, 'update'])->name('category.update');
    });
});
