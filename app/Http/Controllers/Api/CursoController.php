<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Curso;
use App\Imports\CursosImport;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;

class CursoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Curso::all();
        return $result;
    }

    public function search($curso)
    {
        $request = $curso;
        $result = Curso::where('nombre','LIKE','%'.$request."%")
        ->orWhere('clave','LIKE','%'.$request."%")
        ->orWhere('fechaInicioInscripcion','LIKE','%'.$request."%")
        ->orWhere('fechaFinInscripcion','LIKE','%'.$request."%")
        ->get();
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $curso = new Curso();
        $curso->nombre = $request->curso_nombre;
        $curso->clave = $request->curso_clave;
        $curso->fechaInicioInscripcion = $request->curso_fechaInicioInscripcion;
        $curso->fechaFinInscripcion = $request->curso_fechaFinInscripcion;
        $curso->fechaInicio = $request->curso_fechaInicio;
        $curso->fechaFin = $request->curso_fechaFin;
        $curso->reconocimiento = $request->curso_reconocimiento;
        $curso->horas = $request->curso_horas;
        $curso->save();
    }

    /**
     * Store new resources from uploaded excel file.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function import(Request $request)
    {
        try {
            Excel::import(new CursosImport, $request['file']);
            return response()->json($content = 'Upload successful', $status=200);
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
                
            foreach ($failures as $failure) {
                $failure->row(); // row that went wrong
                $failure->attribute(); // either heading key (if using heading row concern) or column index
                $failure->errors(); // Actual error messages from Laravel validator
            }   
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $curso = Curso::where('id',$id)->get();
        return $curso[0];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $curso = Curso::find($id);
        $curso->nombre = $request->curso_nombre;
        $curso->clave = $request->curso_clave;
        $curso->fechaInicioInscripcion = $request->curso_fechaInicioInscripcion;
        $curso->fechaFinInscripcion = $request->curso_fechaFinInscripcion;
        $curso->fechaInicio = $request->curso_fechaInicio;
        $curso->fechaFin = $request->curso_fechaFin;
        $curso->reconocimiento = $request->curso_reconocimiento;
        $curso->horas = $request->curso_horas;
        $curso->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $curso = Curso::find($id);
        echo "dsasffs";
        echo $curso;
        $curso->delete();
    }
}
