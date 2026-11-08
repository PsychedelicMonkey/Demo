<?php

use App\Models\User;
use Laravel\Fortify\Features;

beforeEach(fn () => $this->skipUnlessFortifyHas(Features::registration()));

test('registration screen can be rendered', function (): void {
    $response = $this->get(route('register'));

    $response->assertOk();
});

test('new users can register', function (): void {
    $user = User::factory()->make();

    $response = $this->post(route('register.store'), [
        'name' => $user->name,
        'email' => $user->email,
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('home', absolute: false));
});
