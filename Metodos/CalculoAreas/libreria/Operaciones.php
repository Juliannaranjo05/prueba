<?php 
    class Operaciones {

        private $numeroUno;
        private $numeroDos;
        private $AreaCuadrado;
        private $AreaTriangulo;
        private $AreaCirculo;

        public function __construct(Numero $numeroUno, Numero $numeroDos){
            $this->numeroUno = $numeroUno;
            $this->numeroDos = $numeroDos;

        }

        public function areaCuadrado(){
            $this->AreaCuadrado = $this->numeroUno->getValor() * $this->numeroDos->getValor();
            return $this->AreaCuadrado;
        }

        public function areaTriangulo(){
            $this->AreaTriangulo = ($this->numeroUno->getValor() * $this->numeroDos->getValor())/2;
            return $this->AreaTriangulo;
        }

        public function areaCirculo(){
            $this->AreaCirculo = ($this->numeroUno->getValor() * $this->numeroDos->getValor()) * 3.15;
            return $this->AreaCirculo;
        }

    
    }
?>