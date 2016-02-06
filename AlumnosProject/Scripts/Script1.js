function AlumnosController($scope)
{
	$scope.alumnos =[
		{nombre:"Juan Blanco",telefono:"1234567890",curso:"Segundo ESO"},
			{nombre:"Alberto Herrera",telefono:"6727828231",curso:"Segundo ESO"},
			{nombre:"Rosa Luxemburgo",telefono:"52626131231",curso:"Primero ESO"},
			{nombre:"Ana Mariño",telefono:"9321323231",curso:"Tercero ESO"}
	];

	$scope.Save = function()
	{
		$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre,telefono:$scope.nuevoAlumno.telefono,curso:$scope.nuevoAlumno.curso})
	}
}