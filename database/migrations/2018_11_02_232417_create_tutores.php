<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTutores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutores', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('appellidoPaterno');
            $table->string('apellidoMaterno');
            $table->string('correo');
            $table->string('pais');
            $table->string('estado');
            $table->string('ciudad');
            $table->string('municipio');
            $table->string('genero');
            $table->string('curso');
            $table->string('institucion');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tutores');
    }
}
