const usuarios = [
    // ADM
    {
        nome: "FABIANA PEREIRA DA SILVA OLIVEIRA",
        funcao: "COORDENADOR",
        salario: "R$5.000,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "CASADA",
        cargaHoraria: "40 (quarenta) horas semanais",//40 horas
      
    },
    {
        nome: "ERIKA PRISCILLA FEITOSA",
        funcao: "ANALISTA ADMINISTRATIVO",
        salario: "R$3.000,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "40 (quarenta) horas semanais", //40horas
        
    },
    {
        nome: "ANA PAULA DA SILVA",
        funcao: "AUXILIAR ADMINISTRATIVO",
        salario: "R$2.100,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "40 (quarenta) horas semanais",//40horas
       
    },
    {
        nome: "JULIANA DA SILVA MOURA",
        funcao: "AUXILIAR ADMINISTRATIVO",
        salario: "R$1.800,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "36 (trinta e seis) horas semanais",//36horas
 
    },
    {
        nome: "SHEILA CRISTINA DE PAULA NASCIMENTO",
        funcao: "AUXILIAR ADMINISTRATIVO",
        salario: "R$1.800,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "CASADA",
        cargaHoraria: "36 (trinta e seis) horas semanais"//36horas

    },
    // ENFERMEIRA OBSTETRA
    {
        nome: "VANUZIA SANTOS PEREIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 10.600,00",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "NATALIA CAITANO DE LIMA COSTA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "BEATRIZ MARQUES CAVALCANTI",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "DAYANE SIMÕES AVILA GONZAGA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ARLETE PEREIRA SILVA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ERIKA CADENGUE DE SOUSA OLIVEIRA SILVA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARCILENE SILVA DE SOUZA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "IVONE BARBOSA DE OLIVEIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "RAQUEL MADALENA DE ASSIS",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CLAUDIA BATISTA ROCHA PEREIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ELZA MATEUS PORTELA TRINDADE",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANIVALDA CAETANO GAMA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LAUDICEIA MARIA DE OLIVEIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "PATRÍCIA APARECIDA FONTES DE ANDRADE",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CAREM MATOS COSTA",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ELIANE DAS VIRGENS SPINA",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA DE FATIMA OLIVEIRA PEREIRA CORREA DA SILVA",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "FERNANDA CORDEIRO ALBERTO",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ADRIANA GOMES STRAZZA",
        funcao: "ENFERMEIRA",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "JAQUELINE MOREIRA DE MORAIS",
        funcao: "ENFERMEIRA",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GERSON MIGUEL SANTOS CORREIA",
        funcao: "ENFERMEIRO",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "SOLTEIRO",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARCIA DE SOUZA OLIVEIRA",
        funcao: "ENFERMEIRA",
        salario: "R$3.886,36",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "20 horas - de segunda a sexta"
    },
    {
        nome: "MARJORIE FERNANDES BARBOZA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "AILTON PIRES DA COSTA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRO",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "BIANCA MENDES FERREIRA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CINTIA DE SOUSA COSTA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CLAUDIA FERREIRA DA SILVA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "DEBORA CIBELE SOARES SILVA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANA BEATRIZ TEIXEIRA DE SOUZA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "EDINALVA CERQUEIRA MARQUES",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GABRIELA HERNANDES ESTEVAM",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "UNIÃO ESTÁVEL",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GISELE RICARDO CAMPOS",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LUCIENE RODRIGUES DA SILVA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "SAMARA MARTINS DE SOUSA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "UTI NEO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LIDIANE ALVES DO NASCIMENTO",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "RAFAELA BRUNO DE JESUS",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRO",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "SIRLEIDE COUTINHO DE SOUZA NUNES",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "JOVELINE MATOS VALERIO",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "UTI NEO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "TAMIRA APARECIDA DOS SANTOS MADALENA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "UTI NEO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA DAS GRAÇAS FERREIRA DOS SANTOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "DENISE ANDRADE MIRANDA CASTRO",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "VITTORIA DO NASCIMENTO NOVAIS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GABRIELLY FERREIRA DOS SANTOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "AMANDA DOS SANTOS GAVIOLI",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CLEICIANE ALVES DE OLIVEIRA REIS",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CYNTHIA MAYUMI ONO OGATA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "EDICLEIDE DE LIMA SILVA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ROSANA MÁRCIA PEREIRA SILVA",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MICHELLE CRISTINA SADERIO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "HANNA LUIZA DA SILVA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "IARA SÁ TELES AMORIM",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "INESLENE NEVES FRANÇA",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "JULIANA NASCIMENTO DOS SANTOS",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LUCINETE DE OLIVEIRA",
        estadoCivil: "DIVORCIADA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA AUGUSTA JOAQUIM SILVA DE OLIVEIRA",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANA CAROLINE SANTOS RODRIGUES",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LUCAS DE SOUZA ANDRADE",
        estadoCivil: "SOLTEIRO",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeiro",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIANA APARECIDA DA SILVA CLARIMUNDO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "REBECA BARACHO ATANASIO DUO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "TANIELLY DOS SANTOS COSTA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "THAÍS DA SILVA AGUIAR",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "VANUZA GONÇALVES PEREIRA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MICHELE BERTINO DE OLIVEIRA",
        estadoCivil: "DIVORCIADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA LUCIA LIMA SAMUEL",
        estadoCivil: "VIÚVA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANTONIA NUBIA LIMA SAMUEL",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    // FONO
    {
        nome: "NATHALIA COSTA DE PAULA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 5.100,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FONOAUDIOLOGIA",
        cargaHoraria: "segunda a sábado (07h00 às 13h00 ou das 13h00 às 19h00)"
    },
    {
        nome: "GABRIELLA DIAS BATISTA",
        estadoCivil: "UNIÃO ESTÁVEL",
        salario: "R$ 2.500,00",
        funcao: "FONOAUDIOLOGIA",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        cargaHoraria: "segunda a sábado (07h00 às 13h00 ou das 13h00 às 19h00)"
    },
   // FISIOTERAPEUTA 
   {
        nome: "ALESSA CASTRO RIBEIRO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 6.800,00",
        funcao: "FISOTERAPEUTA",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        cargaHoraria: "30 (trinta) horas semanais",//30horas
    },

    {
        nome: "CINTIA MIKAELA PEREIRA DE LIMA COELHO",
        estadoCivil: "CASADA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "GABRIELLA SOUZA CARLOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "LUANA RODRIGUES DE SOUZA TINO",
        estadoCivil: "CASADA",
        salario: "R$ 3.800,00",
        funcao: "FISOTERAPEUTA",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "PAMELA FARIAS MORENO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "PAULA FERNANDA MORAES DOS ANJOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00", // qualquer periodo entre as 07:00 às 01:00 )
    },
    // SERVIÇO SOCIAL
    {
        nome: "VANESSA CRISTINE DE OLIVEIRA DO PRADO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "SERVIÇO SOCIAL",
        cargaHoraria: "segunda a sexta (07h00 às 13h00 ou das 13h00 às 19h00)"
    },
    // PSICÓLOGA
    {
        nome: "LAIS ROMÃO DE FREITAS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 4.000,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "PSICÓLOGA",
        cargaHoraria: "segunda a sexta (07h00 às 13h00 ou das 13h00 às 19h00)"
    }
];

    
document.addEventListener("DOMContentLoaded", () => {
    const nomeSelect = document.getElementById("nome");
    usuarios.forEach(usuario => {
        const option = document.createElement("option");
        option.value = usuario.nome;
        option.textContent = usuario.nome;
        nomeSelect.appendChild(option);
    });

    const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let startX, startY;

// Touch events
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevent default browser behavior (scrolling)
  drawing = true;
  const touch = e.touches[0];
  startX = touch.clientX - canvas.offsetLeft;
  startY = touch.clientY - canvas.offsetTop;
  ctx.moveTo(startX, startY);
});

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (drawing) {
    const touch = e.touches[0];
    const x = touch.clientX - canvas.offsetLeft;
    const y = touch.clientY - canvas.offsetTop;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

canvas.addEventListener("touchend", () => {
  drawing = false;
  ctx.beginPath();
});

// Mouse events (for compatibility)
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

    document.getElementById("clear").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById("capture").addEventListener("click", () => {
        const dataURL = canvas.toDataURL();
        const img = new Image();
        img.src = dataURL;
        img.onload = () => {
            window.signatureImage = img;
            alert("Assinatura capturada com sucesso!");
        };
    });

    document.getElementById("formAssinatura").addEventListener("submit", async (event) => {
        event.preventDefault();

        const nome = nomeSelect.value;
        const dataAdmissao = document.getElementById("data-admissao").value;
        const endereco = document.getElementById("endereco").value;

        const usuario = usuarios.find(u => u.nome === nome);
        if (!usuario) {
            return alert("Usuário não encontrado.");
        }

        const { salario, local, funcao, estadoCivil, cargaHoraria } = usuario;
        const dataFinal = calcularDataFinal(dataAdmissao, 60);

        const img = window.signatureImage;
        if (!img) {
            return alert("Por favor, capture sua assinatura.");
        }

        console.log("Dados capturados:", { nome, estadoCivil, endereco, funcao, local, salario, cargaHoraria, dataFinal });

        try {
            await generateContratoPDF(nome, estadoCivil, endereco, funcao, local, salario, cargaHoraria, dataFinal, img);
            await generateInstrucoesAdmissaoPDF(nome);
            alert("Contrato e Instruções de Admissão gerados com sucesso!");
        } catch (err) {
            console.error("Erro ao gerar PDFs:", err);
            alert("Erro ao gerar os arquivos PDF. Consulte o console para mais detalhes.");
        }
    });

    function calcularDataFinal(dataInicial, diasUteis) {
        const diasCorridos = Math.ceil(diasUteis * 7 / 5);
        const data = new Date(dataInicial);
        data.setDate(data.getDate() + diasCorridos);
        return data.toLocaleDateString('pt-BR');
    }

    async function generateContratoPDF(nome, estadoCivil, endereco, funcao, local, salario, cargaHoraria, dataFinal, assinaturaImg) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    
        const marginLeft = 20;
        const marginRight = 20;
        const marginTop = 30; // Margem superior de 3 cm
        const marginBottom = 30; // Margem inferior de 3 cm
        const usableWidth = doc.internal.pageSize.getWidth() - marginLeft - marginRight;
        const pageHeight = doc.internal.pageSize.getHeight();
        let currentY = marginTop;
    
        // Adicionando o logo da instituição à direita
        const logoWidth = 30;
        const logoHeight = 15;
        doc.addImage('selo.png', 'PNG', doc.internal.pageSize.getWidth() - marginRight - logoWidth, currentY - logoHeight, logoWidth, logoHeight);
    
        // Cabeçalho centralizado
        doc.setFont('Arial', 'bold');
        doc.setFontSize(11);
        doc.text("ASSOCIAÇÃO BENEFICENTE DE PIRANGI", doc.internal.pageSize.getWidth() / 2, currentY, { align: 'center' });
        currentY += 6;
        doc.setFont('Arial', 'normal');
        doc.text("O.S.S ORGANIZAÇÃO SOCIAL DE SAÚDE PIRANGI", doc.internal.pageSize.getWidth() / 2, currentY, { align: 'center' });
        currentY += 14;

        doc.setFont('Arial', 'bold');
        doc.setFontSize(11);
        doc.text("CONTRATO POR PRAZO DETERMINADO", doc.internal.pageSize.getWidth() / 2, currentY, { align: 'center' });
        currentY += 14;
    
        // Corpo do contrato com margens
        doc.setFont('Arial', 'normal');
        doc.setFontSize(11);
    

        const content = `Pelo presente instrumento, de um lado ASSOCIAÇÃO BENEFICENTE DE PIRANGI, estabelecida à Rua Doutor Rodrigues Alves nº 805 – Pirangi com CNPJ Nº51.804.771/0003-34, neste ato representado por JOÃO GONÇALVES DE SARRO, de agora em diante chamado EMPREGADOR, e ${nome}, Brasileiro(a), ${estadoCivil}, portador(a) da Carteira de Trabalho DIGITAL, residente e domiciliado à ${endereco}, de agora em diante chamado simplesmente de EMPREGADO, têm, entre si, como justo e contratado, nos termos do parágrafo único do artigo 443 e do artigo 445 ambos da Consolidação das Leis do Trabalho, e seguintes, um contrato de trabalho por tempo determinado, nas cláusulas e condições abaixo: 

1ª - O EMPREGADO prestará serviços para o EMPREGADOR na função de ${funcao}, nas atividades relacionadas a tal função, bem como outros que venham a ser objeto de cartas, comunicados ou ordens, dentro da sua natureza. 

2ª - O local de trabalho será na(o) ${local}, podendo, no entanto, ser transferido(a) para qualquer outra atividade vinculada à Saúde, assinada entre o EMPREGADOR e o ESTADO DE SÃO PAULO. 

3ª - O horário de trabalho será de ${cargaHoraria}, sendo que tal horário poderá ser alterado, ante a necessidade do EMPREGADOR em decorrência dos serviços específicos para a Saúde, conforme observado na cláusula 2ª, retro. 

4ª - Pela prestação de serviços, o EMPREGADO receberá a remuneração de ${salario}. 

5ª - O EMPREGADO reembolsará à EMPRESA todos os prejuízos que vierem a causar por dolo, imprudência, imperícia ou negligência no desempenho de suas funções, nos termos do artigo 462, da CLT. 

6ª - A vigência deste contrato será pelo prazo de 60 (SESSENTA) dias sendo que o início de sua vigência é a partir da data de assinatura, encontrando-se em ${dataFinal}, podendo o mesmo ser prorrogado por uma única vez, mediante a respectiva assinatura de Adição de Contrato. 

7ª - E por estarem de pleno acordo, as partes contratantes assinam o presente contrato em duas vias de igual teor, ficando a primeira em poder do EMPREGADOR e a segunda com o EMPREGADO, que dela dará o recibo competente.`;

currentY = justTextWithPageBreak(doc, content, marginLeft, currentY, usableWidth, pageHeight - marginBottom, 8);

 // Espaçando a data como um novo parágrafo
 const data = new Date().toLocaleDateString('pt-BR');
 currentY += 10;  // Espaço adicional para a data
 doc.text(`São Paulo, ${data}`, marginLeft, currentY);
 currentY += 10;

// Carimbo acima da assinatura da associação
const imgWidth = 40;
const imgHeight = 20;
doc.addImage('carimbo.png', 'PNG', marginLeft, currentY - 15, imgWidth, imgHeight);
currentY += imgHeight;

// Assinatura da instituição
doc.text("ASSOCIAÇÃO BENEFICENTE DE PIRANGI", marginLeft, currentY);
currentY += 10;

// Assinatura do associado
const signatureWidth = 50;
const signatureHeight = (assinaturaImg.height / assinaturaImg.width) * signatureWidth;
doc.addImage(assinaturaImg, 'PNG', marginLeft, currentY, signatureWidth, signatureHeight);
currentY += signatureHeight + 5;

// Nome do associado abaixo da assinatura
doc.text(nome, marginLeft, currentY);
currentY += 10;


// Rodapé
doc.text("Avenida Interlagos nº 6959 sala 2 – Interlagos", doc.internal.pageSize.getWidth() / 2, pageHeight - 15, { align: 'center' });
doc.text("Fone/Fax: (11) 5669 3564 / 93771 5293 – São Paulo – SP", doc.internal.pageSize.getWidth() / 2, pageHeight - 10, { align: 'center' });

const nomeArquivo = `Contrato_${nome.replace(/\s+/g, '_')}.pdf`;
doc.save(nomeArquivo);

return nomeArquivo;
}

    async function generateInstrucoesAdmissaoPDF(nome) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

        const marginLeft = 20;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const usableWidth = pageWidth - 2 * marginLeft;
        let currentY = 30;

        // Adicionando o logo no canto superior direito (se já estiver no formato adequado)
        const logoWidth = 30;
        const logoHeight = 15;
        doc.addImage('selo.png', 'PNG', pageWidth - marginLeft - logoWidth, currentY - logoHeight, logoWidth, logoHeight);

        // Cabeçalho - Associação Beneficente com negrito centralizado
        doc.setFont('Arial', 'bold');
        doc.setFontSize(11);
        doc.text("ASSOCIAÇÃO BENEFICENTE DE PIRANGI", pageWidth / 2, currentY, { align: 'center' });
        currentY += 6;
        doc.setFont('Arial', 'normal');
        doc.text("O.S.S ORGANIZAÇÃO SOCIAL DE SAÚDE PIRANGI", pageWidth / 2, currentY, { align: 'center' });
        currentY += 14;

        // Título "Orientações"
        doc.setFont('Arial', 'bold');
        doc.setFontSize(12);
        doc.text("ATENÇÃO ÀS ORIENTAÇÕES ABAIXO!", pageWidth / 2, currentY, { align: 'center' });
        currentY += 10;
        doc.text("CRONOGRAMA DE BENEFÍCIOS:", pageWidth / 2, currentY, { align: 'center' });

        // Corpo do contrato em fonte normal
        doc.setFont('Arial', 'normal');
        doc.setFontSize(11);

        const instructions = `
        Prezado(a) ${nome},
        Segue o cronograma de benefícios:
            - Salário: 5º dia útil (10:00 às 17:00); 
            - Refeição: refeitório no local;
            - Vale alimentação: R$130,00, recarga no Cartão Verocard dia 15/mês, que só é entregue após 40 dias trabalhados;
            - Vale transporte: desconto de 6% (somente solicitante); 5º dia útil.
            - Auxílio creche: R$ 107,00, para filhos até 2 anos;
            - Adicional Insalubridade:+20% do salário mínimo vigente; 
            - Adicional noturno: +20% das horas trabalhadas das 22:00 às 05:00;
            - Hora extra:  + 50%.           
        Quanto ao tipo de contratação:   
            - Contrato de trabalho por tempo determinado;
            - Características do Contrato de trabalho por tempo determinado: em regra, o término do contrato por prazo determinado se dá automaticamente no prazo estabelecido pelo empregador;
            - Término do contrato: é feito o pagamento das verbas rescisórias legais (saldo de salário, 13º salário proporcional e férias + 1/3 vencidas e/ou proporcionais e liberação do saldo do FGTS depositado na conta do empregado); 
            - Não é devido o pagamento pelo empregador: aviso prévio e multa de 40% do FGTS ao empregado e guias para saque de seguro desemprego.
            
            PARA VALIDAR SUA ADMISSÃO, envie o seu contrato assinado para o e-mail documentososspirangi@gmail.com, com o assunto: "CONTRATO ASSINADO - ${nome}."`;

        // Definindo o espaçamento entre as linhas para 1,5 cm (15mm)
    const lineHeight = 10; // 1,5 cm em milímetros
    currentY = justTextWithPageBreak(doc, instructions, marginLeft, currentY, usableWidth, pageHeight, lineHeight);

        const nomeArquivo = `Instrucoes_Admissao_${nome.replace(/\s+/g, '_')}.pdf`;
        doc.save(nomeArquivo);

        return nomeArquivo;
    }

    function justTextWithPageBreak(doc, content, marginLeft, currentY, usableWidth, pageHeight, lineHeight) {
        const lines = doc.splitTextToSize(content, usableWidth);
        for (const line of lines) {
            if (currentY + lineHeight > pageHeight - 10) {
                doc.addPage();
                currentY = 30;
            }
            doc.text(line, marginLeft, currentY);
            currentY += lineHeight;  // Ajusta o espaçamento entre as linhas
        }
        return currentY;
    }
});