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
Route::get('/api/curso/{id}', 'Api\\CursoController@show');
Route::put('/api/curso/update/{id}', 'Api\\CursoController@update');
Route::post('/api/importCursos', 'Api\CursoController@import');
Route::get('/api/search/cursos/{search_info}', 'Api\\CursoController@search');

Route::get('/api/alumnos', 'Api\\AlumnoController@index');
Route::delete('/api/alumnos/delete/{id}', 'Api\\AlumnoController@destroy');
Route::post('/api/alumno/store', 'Api\\AlumnoController@store');
Route::get('/api/alumno/{id}', 'Api\\AlumnoController@show');
Route::put('/api/alumno/update/{id}', 'Api\\AlumnoController@update');
Route::get('/api/search/alumnos/{search_info}', 'Api\\AlumnoController@search');

Route::get('/api/tutores', 'Api\\TutorController@index');
Route::post('/api/tutor/store', 'Api\\TutorController@store');
Route::delete('/api/tutores/delete/{id}', 'Api\\TutorController@destroy');
Route::get('/api/tutor/{id}', 'Api\\TutorController@show');
Route::put('/api/tutor/update/{id}', 'Api\\TutorController@update');
Route::post('/api/importTutores', 'Api\TutorController@import');
Route::get('/api/search/tutores/{search_info}', 'Api\\TutorController@search');

Route::get('/api/directivos', 'Api\\DirectivoController@index');
Route::post('/api/directivo/store', 'Api\\DirectivoController@store');
Route::delete('/api/directivos/delete/{id}', 'Api\\DirectivoController@destroy');
Route::get('/api/directivo/{id}', 'Api\\DirectivoController@show');
Route::put('/api/directivo/update/{id}', 'Api\\DirectivoController@update');
Route::get('/api/search/directivos/{search_info}', 'Api\\DirectivoController@search');

Route::get('/api/grupos', 'Api\\GrupoController@index');
Route::delete('/api/grupos/delete/{id}', 'Api\\GrupoController@destroy');
Route::get('/api/grupo/{id}', 'Api\\GrupoController@show');
Route::post('/api/grupo/store', 'Api\\GrupoController@store');
