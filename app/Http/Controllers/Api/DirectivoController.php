<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Directivo;

class DirectivoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Directivo::all();
        return $result;
    }
    public function search($directivo)
    {
        $request = $directivo;
        $result = Directivo::where('nombres','LIKE','%'.$request."%")
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
        $directivo= new directivo();
        $directivo->username = $request->directivo_username;
        $directivo->password = $request->directivo_password;
        $directivo->nombres = $request->directivo_nombres;
        $directivo->apellidoPaterno = $request->directivo_apellidoPaterno;
        $directivo->apellidoMaterno = $request->directivo_apellidoMaterno;
        $directivo->correo = $request->directivo_correo;
        $directivo->pais = $request->directivo_pais;
        $directivo->estado = $request->directivo_estado;
        $directivo->ciudad_municipio = $request->directivo_ciudad_municipio;
        $directivo->socio = $request->directivo_socio;
        $directivo->organizacion = $request->directivo_organizacion;
        $directivo->rol = $request->directivo_rol;

        $directivo->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $directivo = Directivo::where('id',$id)->get();
        return $directivo[0];
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
        $directivo = Directivo::find($id);

        $directivo->username = $request->directivo_username;
        $directivo->password = $request->directivo_password;
        $directivo->nombres = $request->directivo_nombres;
        $directivo->apellidoPaterno = $request->directivo_apellidoPaterno;
        $directivo->apellidoMaterno = $request->directivo_apellidoMaterno;
        $directivo->correo = $request->directivo_correo;
        $directivo->pais = $request->directivo_pais;
        $directivo->estado = $request->directivo_estado;
        $directivo->ciudad_municipio = $request->directivo_ciudad_municipio;
        $directivo->municipio = $request->directivo_municipio;
        $directivo->socio = $request->directivo_socio;
        $directivo->organizacion = $request->directivo_organizacion;
        $directivo->rol = $request->directivo_rol;

        $directivo->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $directivo = Directivo::find($id);
        $directivo->delete();
    }
}
