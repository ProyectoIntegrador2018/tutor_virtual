<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
    //return redirect('auth/login');
});

Route::get('menuLateral', function () {
    return view('menuLateral');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

