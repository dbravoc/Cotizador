document.addEventListener("DOMContentLoaded", function() {
    const GastoLuz = parseFloat(document.getElementById("GastoLuz").value);
    const NombreApellido = document.getElementById("NombreApellido");
    const RUT = document.getElementById("RUT");
    const Telefono = document.getElementById("Telefono");
    const Email = document.getElementById("Email");

BotonCotizar.addEventListener("click", function() {
    const costototal = parseFloat(document.getElementById("CostoTotal"));
    const consumoeletricoanual = parseFloat(document.getElementById("ConsumoEletricoAnual"));
    const generacionenergiasolar = parseFloat(document.getElementById("GeneracionEnergiaSolar"));
    const ahorroestimadoanual = parseFloat(document.getElementById("AhorroEstimadoAnual"));
    const ahorroambientalanual = parseFloat(document.getElementById("AhorroAmbientalAnual"));



        // Aplica tu fórmula de cálculo aquí
        const resultado = input1 + input2; // Ejemplo de suma, cambia esto según tu fórmula

        resultElement.textContent = resultado;
        resultContainer.style.display = "block";
    });
});