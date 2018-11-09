<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tutor;

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
        $result = Tutor::where('nombre','LIKE','%'.$request."%")
        ->orWhere('correo','LIKE','%'.$request."%")
        ->orWhere('curso','LIKE','%'.$request."%")
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
        $tutor->nombre = $request->tutor_nombre;
        $tutor->apellidoPaterno = $request->tutor_apellidoPaterno;
        $tutor->apellidoMaterno = $request->tutor_apellidoMaterno;
        $tutor->correo = $request->tutor_correo;
        $tutor->pais = $request->tutor_pais;
        $tutor->estado = $request->tutor_estado;
        $tutor->ciudad = $request->tutor_ciudad;
        $tutor->municipio = $request->tutor_municipio;
        $tutor->genero = $request->tutor_genero;
        $tutor->curso = $request->tutor_curso;
        $tutor->institucion = $request->tutor_institucion;
        
        $tutor->save();
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
        echo $request;
        $tutor = Tutor::find($id);
        $tutor->nombre = $request->tutor_nombre;
        $tutor->apellidoPaterno = $request->tutor_apellidoPaterno;
        $tutor->apellidoMaterno = $request->tutor_apellidoMaterno;
        $tutor->correo = $request->tutor_correo;
        $tutor->pais = $request->tutor_pais;
        $tutor->estado = $request->tutor_estado;
        $tutor->ciudad = $request->tutor_ciudad;
        $tutor->municipio = $request->tutor_municipio;
        $tutor->genero = $request->tutor_genero;
        $tutor->curso = $request->tutor_curso;
        $tutor->institucion = $request->tutor_institucion;
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