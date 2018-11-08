<?php

namespace App\Imports;

use App\Curso;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;

class CursosImport implements ToModel, WithStartRow, WithCalculatedFormulas, WithValidation, SkipsOnError
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
            || !isset($row[5]) || !isset($row[6]) || !isset($row[7])) {
            return null;
        }

        return new Curso([
            'nombre' => json_decode('"' . $row[0] . '"'),
            'clave' => json_decode('"' . $row[1] . '"'),
            'fechaInicioInscripcion' => gmdate("Y-m-d", ($row[2] - 25569) * 86400),
            'fechaFinInscripcion' => gmdate("Y-m-d", ($row[3] - 25569) * 86400),
            'fechaInicio' => gmdate("Y-m-d", ($row[4] - 25569) * 86400),
            'fechaFin' => gmdate("Y-m-d", ($row[5] - 25569) * 86400),
            'reconocimiento' => json_decode('"' . $row[6] . '"'),
            'horas' => $row[7],
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
