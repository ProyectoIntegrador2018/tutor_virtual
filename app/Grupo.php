<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Curso;
use App\Tutor;
use App\Alumno;

class Grupo extends Model
{
    /**
     * Obtiene el curso al que pertenece el grupo.
     */
    public function curso()
    {
        return $this->belongsTo('App\Curso');
    }

    /**
     * Los tutores asignados a este grupo.
     */
    public function tutores()
    {
        return $this->belongsToMany('App\Tutor');
    }

    /**
     * Los alumnos que estan inscritos a este grupo.
     */
    public function alumnos()
    {
        return $this->belongsToMany('App\Alumno');
    }
}
