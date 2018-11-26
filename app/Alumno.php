<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Curso;
use App\Grupo;

class Alumno extends Model
{
    /**
     * Los cursos que tiene que tomar el alumno.
     */
    public function cursos()
    {
        return $this->belongsToMany('App\Curso');
    }

    /**
     * Los grupos que tiene asignado el alumno.
     */
    public function grupos()
    {
        return $this->belongsToMany('App\Grupo');
    }
}
