document.write(`
<header id="buscador">
    <div class="col-md-9 col-md-push-1">
        <div class="container">
            <div class="row">
                <div class="col-xs-8 col-xs-offset-2">
                    <form action="#" method="get" id="searchForm" class="input-group">
                            <div class="search-panel input-group-btn">
                                <select name="search_param" id="search_param" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <option selected disabled>Buscá por filtros</option>
                                    <option value="Productos">Productos</option>
                                    <option value="Servicios">Servicios</option>
                                    <option value="Empleo">Empleo</option>
                                </select>
                            </div>
                            <input type="text" id="inputBuscador" class="form-control" name="x" placeholder="Busca aquí...">
                            <div class="selectores">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Minorista</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Mayorista</label>
                                </div>
                            </div>
                        <span class="input-group-btn search-button">
                            <button class="btn btn-default" type="submit">
                                <img src="../images/iconos/buscar.png">
                            </button>
                        </span>
                    </form>   
                </div>      
            </div> 
        </div>
    </div>
    <div class="selectores" style="display: none;">
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Minorista</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
            <label class="form-check-label" for="flexSwitchCheckChecked">Mayorista</label>
        </div>
    </div>
    <!-- MODAL WINDOW -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Elige tu idioma</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <button class="btn btn-outline-success">Inglés</button>
                </div>
            </div>
        </div>
    </div>
</header>
`)