class PreinscritosController < ApplicationController
  before_action :set_preinscrito, only: [:show, :edit, :update, :destroy]

  # GET /preinscritos
  # GET /preinscritos.json
  def index
    if params[:rol] == "Todos"
      rol_i = 0
    else
      rol_i = 1
    end
    if params[:search] && rol_i == 0
      @preinscritos = Preinscrito.where('nombre LIKE ?', "%#{params[:search]}%")
    elsif params[:search] && rol_i == 1
      @preinscritos = Preinscrito.where('nombre LIKE ? AND rol LIKE ?', "%#{params[:search]}%","%#{params[:rol]}%")
    else
      @preinscritos = Preinscrito.all
    end
  end

  # GET /preinscritos/1
  # GET /preinscritos/1.json
  def show
  end

  # GET /preinscritos/new
  def new
    @preinscrito = Preinscrito.new
  end

  # GET /preinscritos/1/edit
  def edit
  end

  # POST /preinscritos
  # POST /preinscritos.json
  def create
    @preinscrito = Preinscrito.new(preinscrito_params)

    respond_to do |format|
      if @preinscrito.save
        format.html { redirect_to @preinscrito, notice: 'Preinscrito was successfully created.' }
        format.json { render :show, status: :created, location: @preinscrito }
      else
        format.html { render :new }
        format.json { render json: @preinscrito.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /preinscritos/1
  # PATCH/PUT /preinscritos/1.json
  def update
    respond_to do |format|
      if @preinscrito.update(preinscrito_params)
        format.html { redirect_to @preinscrito, notice: 'Preinscrito was successfully updated.' }
        format.json { render :show, status: :ok, location: @preinscrito }
      else
        format.html { render :edit }
        format.json { render json: @preinscrito.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /preinscritos/1
  # DELETE /preinscritos/1.json
  def destroy
    @preinscrito.destroy
    respond_to do |format|
      format.html { redirect_to preinscritos_url, notice: 'Preinscrito was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_multiple
    Preinscrito.destroy(params[:preinscrito_ids])
    respond_to do |format|
      format.html { redirect_to preinscritos_url }
      format.json { head :no_content }
    end
  end

  def import
    Preinscrito.import(params[:file])
    redirect_to preinscritos_path, notice: "Preinscritos added successfully"
  end 

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_preinscrito
      @preinscrito = Preinscrito.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def preinscrito_params
      params.require(:preinscrito).permit(:nombre, :apellido_paterno, :apellido_materno, :correo_contacto, :cca, :estatus_user_mensajeria, :estatus_ins_mensajeria, :fecha_inscripcion, :genero, :fecha_nacimieto, :pais, :estado, :ciudad, :idioma, :id_organizacion, :rol)
    end
end
