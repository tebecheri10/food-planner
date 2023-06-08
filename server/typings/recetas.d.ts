export interface IngredienteType {
    nombreIngrediente: string;
    cantidad: number
}

export interface RecetasType {
    nombre: string,
    ingredientes: IngredienteType[]
}