<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Alumno;
use App\Grupo;

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

    /**
     * Los alumnos que tienen que tomar el curso.
     */
    public function alumnos()
    {
        return $this->belongsToMany('App\Alumno');
    }

    /**
     * Obtiene los grupos que tiene el curso
     */
    public function grupos()
    {
        return $this->hasMany('App\Grupo');
    }
}
