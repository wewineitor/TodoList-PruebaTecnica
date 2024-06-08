<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
 
Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');

    Route::get('/tasks', [TaskController::class, 'index'])->middleware('auth:api');
    Route::post('/tasks', [TaskController::class, 'store'])->middleware('auth:api');
    Route::put('/tasks/{id}', [TaskController::class, 'update'])->middleware('auth:api');
    Route::delete('/tasks/{id}', [TaskController::class, 'destroy'])->middleware('auth:api');
});