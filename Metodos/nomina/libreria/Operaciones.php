<?php 
    class Operaciones {

        private $diasTrab;
        private $valorDia;
        private $salario;
        private $salud;
        private $pension;
        private $arl;
        private $descuento;
        private $sueldo;

        public function __construct(Numero $diasTrab, Numero $valorDia){
            $this->diasTrab = $diasTrab;
            $this->valorDia = $valorDia;

        }

        public function salario(){
            $this->salario = $this->diasTrab->getValor() * $this->valorDia->getValor();
            return $this->salario;
        }

        public function salud(){
            $this->salud = $this->salario * 0.12;
            return $this->salud;
        }

        public function pension(){
            $this->pension = $this->salario * 0.16;
            return $this->pension;
        }

        public function arl(){
            $this->arl = $this->salario * 0.052;
            return $this->arl;
        }

        public function descuento(){
            $this->descuento = $this->salud + $this->pension + $this->arl;
            return $this->descuento;
        }

        public function sueldo(){
            $this->sueldo = $this->salario - $this->descuento;
            return $this->sueldo;
        }
        
        public function mostrarValores() {
            return "Días trabajados: " . $this->diasTrab->getValor() . " y Valor por día: " . $this->valorDia->getValor();
        }
    }
?>