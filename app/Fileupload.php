<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fileupload extends Model
{
    Schema::create('fileuploads', function (Blueprint $table) {
        $table->increments('id');
        $table->string('filename');
        $table->timestamps();
    });
}
