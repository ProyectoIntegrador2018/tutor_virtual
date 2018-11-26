<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Grupo;

class Tutor extends Model
{
    protected $table = 'tutores';

    /**
     * Los grupos a los que esta asignado el tutor.
     */
    public function grupos()
    {
        return $this->belongsToMany('App\Grupo');
    }
}
