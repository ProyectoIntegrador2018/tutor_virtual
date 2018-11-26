<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Grupo;

class Tutor extends Model
{
    protected $table = 'tutores';

    protected $fillable = [
        'username',
        'password',
        'nombres',
        'apellidoPaterno',
        'apellidoMaterno',
        'correo',
        'pais',
        'estado',
        'ciudad_municipio',
        'socio',
        'organizacion',
        'rol'
    ];

    /**
     * Los grupos a los que esta asignado el tutor.
     */
    public function grupos()
    {
        return $this->belongsToMany('App\Grupo');
    }
}
