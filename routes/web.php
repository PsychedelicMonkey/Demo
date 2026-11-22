<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $data = User::query()
        ->orderBy('name')
        ->simplePaginate()
        ->withQueryString()
        ->through(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->diffForHumans(),
            ];
        });

    return Inertia::render('Home', [
        'users' => $data,
    ]);
})->name('home');

require __DIR__.'/settings.php';
