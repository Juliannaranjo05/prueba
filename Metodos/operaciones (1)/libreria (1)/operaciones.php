<?php
    class Operaciones{

        public $numeroUno;
        public $numeroDos;
        public $suma;
        public $resta;
        public $multiplicar;
        public $dividir;



        public function operaciones($numeroUno, $numeroDos){
            $this->numeroUno = $numeroUno;
            $this->numeroDos = $numeroDos;
            $this->suma = $numeroUno + $numeroDos;
            return $this->suma;
        }
        public function operaciones2($numeroUno, $numeroDos){
            $this->numeroUno = $numeroUno;
            $this->numeroDos = $numeroDos;
            $this->resta = $numeroUno - $numeroDos;
            return $this->resta;
        }
        public function operaciones3($numeroUno, $numeroDos){
            $this->numeroUno = $numeroUno;
            $this->numeroDos = $numeroDos;
            $this->multiplicar = $numeroUno * $numeroDos;
            return $this->multiplicar;
        }
        public function operaciones4($numeroUno, $numeroDos){
            $this->numeroUno = $numeroUno;
            $this->numeroDos = $numeroDos;
            $this->dividir = $numeroUno / $numeroDos;
            return $this->dividir;
        }
    }
?>