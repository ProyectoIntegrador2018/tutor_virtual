<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tutor;
use App\Imports\TutoresImport;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Validators\ValidationException;

class TutorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Tutor::all();
        return $result;
    }
    public function search($tutor)
    {

        $request = $tutor;
        $result = Tutor::where('nombres','LIKE','%'.$request."%")
        ->orWhere('correo','LIKE','%'.$request."%")
        ->orWhere('apellidoPaterno','LIKE','%'.$request."%")
        ->orWhere('apellidoMaterno','LIKE','%'.$request."%")
        ->orWhere('username','LIKE','%'.$request."%")
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
        $tutor= new tutor();
        $tutor->username = $request->tutor_username;
        $tutor->password = $request->tutor_password;
        $tutor->nombres = $request->tutor_nombres;
        $tutor->apellidoPaterno = $request->tutor_apellidoPaterno;
        $tutor->apellidoMaterno = $request->tutor_apellidoMaterno;
        $tutor->correo = $request->tutor_correo;
        $tutor->pais = $request->tutor_pais;
        $tutor->estado = $request->tutor_estado;
        $tutor->ciudad_municipio = $request->tutor_ciudad_municipio;
        $tutor->socio = $request->tutor_socio;
        $tutor->organizacion = $request->tutor_organizacion;
        $tutor->rol = $request->tutor_rol;

        $tutor->save();
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
            Excel::import(new TutoresImport, $request['file']);
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
        $tutor = Tutor::where('id',$id)->get();
        return $tutor[0];
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
        $tutor = Tutor::find($id);

        $tutor->username = $request->tutor_username;
        $tutor->password = $request->tutor_password;
        $tutor->nombres = $request->tutor_nombres;
        $tutor->apellidoPaterno = $request->tutor_apellidoPaterno;
        $tutor->apellidoMaterno = $request->tutor_apellidoMaterno;
        $tutor->correo = $request->tutor_correo;
        $tutor->pais = $request->tutor_pais;
        $tutor->estado = $request->tutor_estado;
        $tutor->ciudad_municipio = $request->tutor_ciudad_municipio;
        $tutor->socio = $request->tutor_socio;
        $tutor->organizacion = $request->tutor_organizacion;
        $tutor->rol = $request->tutor_rol;

        $tutor->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tutor = Tutor::find($id);
        $tutor->delete();
    }
}
