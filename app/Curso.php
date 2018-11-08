<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $fillable = [
        'nombre',
        'clave',
        'fechaInicioInscripcion',
        'fechaFinInscripcion',
        'fechaInicio',
        'fechaFin',
        'reconocimiento',
        'horas'
    ];
}
