<?php

namespace App\Imports;

use App\Tutor;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;

class TutoresImport implements ToModel, WithStartRow, WithCalculatedFormulas, WithValidation, SkipsOnError
{
    use Importable;

    public function rules(): array
    {
        return [];
    }

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        if (!isset($row[0]) || !isset($row[1]) || !isset($row[2]) || !isset($row[3]) || !isset($row[4])
            || !isset($row[5]) || !isset($row[7]) || !isset($row[8]) || !isset($row[9])
            || !isset($row[10]) || !isset($row[11])) {
            return null;
        }

        return new Tutor([
            'username' => json_decode('"' . $row[0] . '"'),
            'password' => json_decode('"' . $row[1] . '"'),
            'nombres' => json_decode('"' . $row[2] . '"'),
            'apellidoPaterno' => json_decode('"' . $row[3] . '"'),
            'apellidoMaterno' => json_decode('"' . $row[4] . '"'),
            'correo' => json_decode('"' . $row[5] . '"'),
            'pais' => json_decode('"' . $row[9] . '"'),
            'estado' => json_decode('"' . $row[10] . '"'),
            'ciudad_municipio' => json_decode('"' . $row[11] . '"'),
            'socio' => json_decode('"' . $row[7] . '"'),
            'organizacion' => json_decode('"' . $row[8] . '"'),
            'rol' => "T"
        ]);
    }

    public function startRow(): int {
        return 2;
    }

    /**
     * @param \Throwable $e
     */
    public function onError(\Throwable $e)
    {
        // Handle the exception how you'd like.
    }
}
