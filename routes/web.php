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
    if(Auth::check()) {
        return redirect('/index');
    }
    else {
        return view('/auth/login');
    }
});

Auth::routes();

Route::get('/index/{path?}', 'HomeController@index')
    ->where('path', '.*')
    ->name('home');

Route::get('/api/cursos', 'Api\\CursoController@index');
Route::post('/api/curso/store', 'Api\\CursoController@store');
Route::delete('/api/cursos/delete/{id}', 'Api\\CursoController@destroy');