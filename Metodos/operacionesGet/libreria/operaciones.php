<?php
    class Operaciones{

        private $numeroUno;
        private $numeroDos;
        public $suma;
        public $resta;
        public $multiplicacion;
        public $division;

        public function __construct(Numero $numeroUno, Numero $numeroDos){
            $this->numeroUno = $numeroUno;
            $this->numeroDos = $numeroDos;

        }

        public function suma(){
            $this->suma = $this->numeroUno->getValor() + $this->numeroDos->getValor();
            return $this->suma;
        }
            
        }

?>