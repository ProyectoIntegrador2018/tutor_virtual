class StakeholdersController < ApplicationController
  before_action :set_stakeholder, only: [:show, :edit, :update, :destroy]

  # GET /stakeholders
  # GET /stakeholders.json
  def index
    if params[:search]
      @stakeholders = Stakeholder.where('name ILIKE ?', "%#{params[:search]}%").order("username ASC")
    else
      @stakeholders = Stakeholder.order("username ASC")
    end
  end

  # GET /stakeholders/1
  # GET /stakeholders/1.json
  def show
  end

  # GET /stakeholders/new
  def new
    @stakeholder = Stakeholder.new
  end

  def import
   Stakeholder.import(params[:file])
   redirect_to stakeholders_path
  end

  # GET /stakeholders/1/edit
  def edit
  end

  # POST /stakeholders
  # POST /stakeholders.json
  def create
    @stakeholder = Stakeholder.new(stakeholder_params)

    respond_to do |format|
      if @stakeholder.save
        format.html { redirect_to @stakeholder, notice: 'Stakeholder was successfully created.' }
        format.json { render :show, status: :created, location: @stakeholder }
      else
        format.html { render :new }
        format.json { render json: @stakeholder.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stakeholders/1
  # PATCH/PUT /stakeholders/1.json
  def update
    respond_to do |format|
      if @stakeholder.update(stakeholder_params)
        format.html { redirect_to @stakeholder, notice: 'Stakeholder was successfully updated.' }
        format.json { render :show, status: :ok, location: @stakeholder }
      else
        format.html { render :edit }
        format.json { render json: @stakeholder.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stakeholders/1
  # DELETE /stakeholders/1.json
  def destroy
    @stakeholder.destroy
    respond_to do |format|
      format.html { redirect_to stakeholders_url, notice: 'Stakeholder was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_multiple

    if params[:stakeholder_ids]
      Stakeholder.destroy(params[:stakeholder_ids])
      message = {notice: 'borrado con éxito.'}
    else
      message = {alert: 'Por favor selecciona al menos uno.'}
    end

    respond_to do |format|
      format.html { redirect_to stakeholders_url }
      format.json { head :no_content }
    end
  end

  def destroy_all
    Stakeholder.all.each do  |stakeholder|
      stakeholder.destroy
    end

    redirect_to stakeholders_path, notice: "Borrados Exitosamente"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stakeholder
      @stakeholder = Stakeholder.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stakeholder_params
      params.require(:stakeholder).permit(:username, :internal_password, :name, :first_last_name, :second_last_name, :email, :country, :state, :city, :partner, :organization_code, :gender, :dob, :phone_number, :language)
    end
end
