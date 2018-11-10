<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DirectivoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('directivos')->truncate();

        DB::table('directivos')->insert([
            'username' => 'ADMINCCA',
            'password' => 'ADMINDED',
            'nombres' => 'Administrador',
            'apellidoPaterno' => 'CCA',
            'apellidoMaterno' => '',
            'correo' => '0',
            'pais' => 'México',
            'estado' => 'Nuevo León',
            'ciudad_municipio' => 'Monterrey',
            'socio' => 'Educación para el Desarrollo',
            'organizacion' => 'DED',
            'rol' => 'D',
        ]);

        DB::table('directivos')->insert([
            'username' => 'DCCA',
            'password' => '6148',
            'nombres' => 'Dra Laura',
            'apellidoPaterno' => 'Ruiz',
            'apellidoMaterno' => 'Pérez',
            'correo' => '0',
            'pais' => 'México',
            'estado' => 'Nuevo León',
            'ciudad_municipio' => 'Monterrey',
            'socio' => 'Educación para el Desarrollo',
            'organizacion' => 'DED',
            'rol' => 'D',
        ]);

        DB::table('directivos')->insert([
            'username' => 'CGCCA2',
            'password' => 'academico',
            'nombres' => 'Dora Elizabeth',
            'apellidoPaterno' => 'García',
            'apellidoMaterno' => 'Olivier',
            'correo' => 'degolivier@itesm.mx',
            'pais' => 'México',
            'estado' => 'Nuevo León',
            'ciudad_municipio' => 'Monterrey',
            'socio' => 'Educación para el Desarrollo',
            'organizacion' => 'DED',
            'rol' => 'Z',
        ]);

        DB::table('directivos')->insert([
            'username' => 'CPUTM',
            'password' => 'milenio',
            'nombres' => 'Cecilia',
            'apellidoPaterno' => 'Vargas',
            'apellidoMaterno' => 'Moreno',
            'correo' => 'cvargas@tecmilenio.mx',
            'pais' => 'México',
            'estado' => 'Nuevo León',
            'ciudad_municipio' => 'Monterrey',
            'socio' => 'Tecmilenio en Línea',
            'organizacion' => 'Campus Tecmilenio en Línea',
            'rol' => 'C',
        ]);

        DB::table('directivos')->insert([
            'username' => 'CPSTAFE',
            'password' => 'santafe',
            'nombres' => 'Wendy',
            'apellidoPaterno' => 'Zamarripa',
            'apellidoMaterno' => 'Aguilar',
            'correo' => 'wendy.zamarripa@itesm.mx',
            'pais' => 'México',
            'estado' => 'Ciudad de México',
            'ciudad_municipio' => 'Deleg. Alvaro Obregón',
            'socio' => 'Tecnológico de Monterrey',
            'organizacion' => 'Campus Santa Fe',
            'rol' => 'C',
        ]);

        DB::table('directivos')->insert([
            'username' => 'CSFA01330517',
            'password' => 'ericam',
            'nombres' => 'Erin Dinora',
            'apellidoPaterno' => 'Camacho',
            'apellidoMaterno' => 'López',
            'correo' => 'A01330517@itesm.mx',
            'pais' => 'México',
            'estado' => 'Ciudad de México',
            'ciudad_municipio' => 'Deleg. Alvaro Obregón',
            'socio' => 'Tecnológico de Monterrey',
            'organizacion' => 'Campus Santa Fe',
            'rol' => 'X',
        ]);
    }
}
