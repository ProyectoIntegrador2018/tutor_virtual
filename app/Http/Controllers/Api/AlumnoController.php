<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Alumno;

class AlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Alumno::all();
        return $result;
 
    }
    public function search($alumno)
    {
        $request = $alumno;
        $result = Alumno::where('nombre','LIKE','%'.$request."%")
            ->orWhere('correo','LIKE','%'.$request."%")
            ->orWhere('pais','LIKE','%'.$request."%")
            ->orWhere('idOrganizacion','LIKE','%'.$request."%")
            ->orWhere('socio','LIKE','%'.$request."%")
            ->orWhere('periodo','LIKE','%'.$request."%")
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
        $alumno= new alumno();
        $alumno->nombre = $request->alumno_nombre;
        $alumno->apellidoPaterno = $request->alumno_apellidoPaterno;
        $alumno->apellidoMaterno = $request->alumno_apellidoMaterno;
        $alumno->correo = $request->alumno_correo;
        $alumno->pais = $request->alumno_pais;
        $alumno->estado = $request->alumno_estado;
        $alumno->ciudad = $request->alumno_ciudad;
        $alumno->municipio = $request->alumno_municipio;
        $alumno->genero = $request->alumno_genero;
        $alumno->fechaNacimiento = $request->alumno_fechaNacimiento;
        $alumno->idOrganizacion = $request->alumno_idOrganizacion;
        $alumno->socio = $request->alumno_socio;
        $alumno->periodo = $request->alumno_periodo;
        
        $alumno->save();
        echo $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $alumno = Alumno::where('id',$id)->get();
        return $alumno[0];
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
        $alumno = Alumno::find($id);
        $alumno->nombre = $request->alumno_nombre;
        $alumno->apellidoPaterno = $request->alumno_apellidoPaterno;
        $alumno->apellidoMaterno = $request->alumno_apellidoMaterno;
        $alumno->correo = $request->alumno_correo;
        $alumno->pais = $request->alumno_pais;
        $alumno->estado = $request->alumno_estado;
        $alumno->ciudad = $request->alumno_ciudad;
        $alumno->municipio = $request->alumno_municipio;
        $alumno->genero = $request->alumno_genero;
        $alumno->fechaNacimiento = $request->alumno_fechaNacimiento;
        $alumno->idOrganizacion = $request->alumno_idOrganizacion;
        $alumno->socio = $request->alumno_socio;
        $alumno->periodo = $request->alumno_periodo;
        $alumno->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $alumno = Alumno::find($id);
        $alumno->delete();
    }
}
