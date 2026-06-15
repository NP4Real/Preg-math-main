import { useEffect } from 'react';

function useMathJax() {
  useEffect(() => {
    const mathJax = window.MathJax;
    if (mathJax?.typesetPromise) {
      mathJax.typesetPromise().catch((error) => console.error('MathJax error:', error));
    }
  });
}

export function FracaoGuide() {
  useMathJax();
  return (
    <div className="theme-guide-content">
      <h2>O que é?</h2>
      <p>
        Fração é a representação matemática das partes de determinada quantidade que foi dividida
        em pedaços ou fragmentos iguais. As frações são extremamente úteis em nosso cotidiano,
        permitindo representar valores que não podem ser expressos de forma exata por meio de
        números naturais (inteiros positivos).
      </p>

      <h2>Escrita de uma fração e significado de cada termo</h2>
      <p>
        Maria comprou uma pizza e dividiu-a em 4 fatias iguais. Como não estava com muita fome,
        ela comeu apenas uma fatia. Das 4 fatias disponíveis, Maria consumiu apenas 1.
        Matematicamente, dizemos que ela comeu 1 de 4, o que é representado pela fração:
      </p>
      <p className="math-display">{'$$\\frac{1}{4}$$'}</p>
      <p>Uma fração é composta por dois termos sobrepostos, separados por um traço horizontal que indica uma divisão:</p>
      <ul>
        <li><strong>Numerador (termo superior):</strong> Vem do latim <em>numeratus</em> e significa "contar". Indica quantas partes do todo foram selecionadas. No exemplo, o numerador é 1.</li>
        <li><strong>Denominador (termo inferior):</strong> Sua origem é do latim <em>denominatus</em> e significa "dar nome". Indica em quantas partes iguais o todo foi dividido. No exemplo, o denominador é 4.</li>
      </ul>
      <p>{'Se a pizza inteira foi dividida em 4 partes iguais, o total da pizza é representado por $\\frac{4}{4}$, que equivale a 1 unidade inteira:'}</p>
      <p className="math-display">{'$$\\frac{4}{4} = 4 \\div 4 = 1$$'}</p>

      <h2>Regras para leitura das frações</h2>
      <p>{'O denominador de uma fração deve ser sempre diferente de zero ($B \\neq 0$), pois não existe divisão por zero. A leitura depende do valor do denominador:'}</p>
      <ul>
        <li>{'Denominadores de 2 a 9: $\\frac{1}{2}$ (um meio), $\\frac{1}{3}$ (um terço), $\\frac{1}{4}$ (um quarto), $\\frac{1}{5}$ (um quinto), $\\frac{1}{6}$ (um sexto), $\\frac{1}{7}$ (um sétimo), $\\frac{1}{8}$ (um oitavo), $\\frac{1}{9}$ (um nono)'}</li>
        <li>{'Denominadores decimais (10, 100, 1000, ...): $\\frac{1}{10}$ (um décimo), $\\frac{1}{100}$ (um centésimo), $\\frac{1}{1000}$ (um milésimo)'}</li>
        <li>{'Outros denominadores: lê-se o numerador, seguido do denominador cardinal e acrescenta-se "avos". Ex: $\\frac{3}{11}$ (três onze avos), $\\frac{5}{23}$ (cinco vinte e três avos).'}</li>
      </ul>

      <h2>Tipos de frações</h2>
      <ul>
        <li>{'<strong>Fração Própria:</strong> O numerador é menor que o denominador. Representa uma quantidade menor que um inteiro. Exemplo: $\\frac{3}{4}$ (três quartos).'}</li>
        <li>{'<strong>Fração Imprópria:</strong> O numerador é maior ou igual ao denominador. Exemplo: $\\frac{12}{5}$ (doze quintos).'}</li>
        <li>{'<strong>Fração Aparente:</strong> O numerador é múltiplo do denominador. O resultado é um número inteiro. Exemplo: $\\frac{8}{2} = 4$.'}</li>
      </ul>
      <p><strong>Fração Mista:</strong> Constituída por uma parte inteira e uma parte fracionária própria. Útil para representar frações impróprias de forma visual.</p>
      <p className="math-display">{'$$1 + 1 + \\frac{5}{8} = 2 + \\frac{5}{8} = 2\\frac{5}{8}$$'}</p>
      <p>Lê-se: "dois inteiros e cinco oitavos".</p>
      <p><strong>Conversão de Mista para Imprópria:</strong> Multiplica-se a parte inteira pelo denominador e soma-se o numerador. O denominador permanece o mesmo.</p>
      <p className="math-display">{'$$2\\frac{5}{8} = \\frac{(2 \\times 8) + 5}{8} = \\frac{16 + 5}{8} = \\frac{21}{8}$$'}</p>

      <h2>Frações Equivalentes e Simplificação</h2>
      <p>São frações com números diferentes no numerador e no denominador, mas que representam a mesma parte do todo.</p>
      <p className="math-display">{'$$\\frac{4}{8} = \\frac{2}{4} = \\frac{1}{2}$$'}</p>
      <p>Para encontrar a forma mais simples (fração irredutível), dividimos o numerador e o denominador pelo mesmo divisor comum até não haver mais divisores comuns além de 1:</p>
      <p className="math-display">{'$$\\frac{12}{18} \\div \\frac{2}{2} = \\frac{6}{9} \\div \\frac{3}{3} = \\frac{2}{3} \\quad \\text{(Fração Irredutível)}$$'}</p>

      <h2>Fração Geratriz</h2>
      <p>{'É a fração que, quando dividida, dá origem a uma dízima periódica (número decimal infinito com repetição). Exemplo: $\\frac{3}{9} = \\frac{1}{3} = 0{,}3333...$'}</p>

      <h2>Operações com Frações</h2>
      <h3>Adição e Subtração</h3>
      <p><strong>Com denominadores iguais:</strong> Mantém-se o denominador e somam-se ou subtraem-se os numeradores.</p>
      <p className="math-display">{'$$\\frac{5}{7} + \\frac{1}{7} = \\frac{5 + 1}{7} = \\frac{6}{7}$$'}</p>
      <p>{'<strong>Com denominadores diferentes:</strong> Encontra-se o Mínimo Múltiplo Comum (MMC) dos denominadores. Exemplo: $\\frac{1}{2} + \\frac{2}{3}$ (MMC de 2 e 3 é 6):'}</p>
      <p className="math-display">{'$$\\frac{1}{2} + \\frac{2}{3} = \\frac{(6 \\div 2 \\times 1) + (6 \\div 3 \\times 2)}{6} = \\frac{3 + 4}{6} = \\frac{7}{6}$$'}</p>

      <h3>Multiplicação</h3>
      <p>Multiplicam-se os numeradores entre si e os denominadores entre si.</p>
      <p className="math-display">{'$$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10} \\quad \\text{(simplificado por 2)}$$'}</p>

      <h3>Divisão</h3>
      <p>Conserva-se a primeira fração e multiplica-se pelo inverso da segunda fração.</p>
      <p className="math-display">{'$$\\frac{3}{4} \\div \\frac{5}{2} = \\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$$'}</p>
    </div>
  );
}

export function PorcentagemGuide() {
  useMathJax();
  return (
    <div className="theme-guide-content">
      <h2>O que é Porcentagem?</h2>
      <p>{'A porcentagem (ou percentagem) é uma razão matemática cujo denominador é igual a 100. Representa a comparação de uma parte em relação a um total de 100 partes. É indicada pelo símbolo $\\%$.'}</p>

      <p>Qualquer porcentagem pode ser expressa de três formas equivalentes:</p>
      <ul>
        <li>{'<strong>Forma Percentual:</strong> $25\\%$'}</li>
        <li>{'<strong>Forma Fracionária (razão centesimal):</strong> $\\frac{25}{100}$'}</li>
        <li><strong>Forma Decimal:</strong> 0,25</li>
      </ul>

      <div className="guide-table-wrapper">
        <table className="guide-table">
          <thead>
            <tr>
              <th>Percentual</th>
              <th>Fracionária</th>
              <th>Simplificada</th>
              <th>Decimal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>10%</td><td>{'$\\frac{10}{100}$'}</td><td>{'$\\frac{1}{10}$'}</td><td>0,1</td></tr>
            <tr><td>20%</td><td>{'$\\frac{20}{100}$'}</td><td>{'$\\frac{1}{5}$'}</td><td>0,2</td></tr>
            <tr><td>50%</td><td>{'$\\frac{50}{100}$'}</td><td>{'$\\frac{1}{2}$'}</td><td>0,5</td></tr>
            <tr><td>75%</td><td>{'$\\frac{75}{100}$'}</td><td>{'$\\frac{3}{4}$'}</td><td>0,75</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Como Calcular a Porcentagem?</h2>
      <p>Existem três metodologias comuns. Vamos resolver: <strong>Quanto é 15% de R$ 120,00?</strong></p>

      <h3>Método 1: Transformação em Fração</h3>
      <p>Substitui-se o "de" por uma multiplicação e escreve-se a porcentagem como fração:</p>
      <p className="math-display">{'$$15\\% \\text{ de } 120 = \\frac{15}{100} \\times 120 = \\frac{1800}{100} = 18$$'}</p>

      <h3>Método 2: Transformação em Decimal</h3>
      <p>{'Multiplica-se o valor total pela representação decimal da porcentagem ($15\\% = 0{,}15$):'}</p>
      <p className="math-display">{'$$120 \\times 0{,}15 = 18$$'}</p>

      <h3>Método 3: Regra de Três</h3>
      <p>{'Define-se que o valor total ($120$) equivale a $100\\%$ e a incógnita $x$ equivale à porcentagem procurada ($15\\%$):'}</p>
      <p className="math-display">{'$$\\begin{aligned} 120 &\\longrightarrow 100\\% \\\\ x &\\longrightarrow 15\\% \\end{aligned}$$'}</p>
      <p>Multiplicando de forma cruzada:</p>
      <p className="math-display">{'$$100 \\times x = 120 \\times 15 \\implies 100x = 1800 \\implies x = 18$$'}</p>

      <h2>Aumentos e Descontos Percentuais</h2>
      <p><strong>Para aplicar um aumento:</strong> Soma-se a taxa percentual a 100% (1 em decimal) e multiplica-se pelo valor.</p>
      <p>Exemplo: Um produto de R$ 80,00 que sofreu aumento de 10%.</p>
      <ul>
        <li>Fator de multiplicação = 1 + 0,10 = 1,10</li>
        <li>{'Novo valor = $80 \\times 1{,}10 = 88{,}00$'}</li>
      </ul>
      <p><strong>Para aplicar um desconto:</strong> Subtrai-se a taxa percentual de 100% (1 em decimal) e multiplica-se pelo valor.</p>
      <p>Exemplo: Uma blusa de R$ 150,00 com desconto de 20%.</p>
      <ul>
        <li>Fator de multiplicação = 1 - 0,20 = 0,80</li>
        <li>{'Novo valor = $150 \\times 0{,}80 = 120{,}00$'}</li>
      </ul>
    </div>
  );
}

export function RegraDe3Guide() {
  useMathJax();
  return (
    <div className="theme-guide-content">
      <h2>O que é Regra de Três?</h2>
      <p>A regra de três é uma ferramenta matemática utilizada para resolver problemas práticos que envolvem a relação de proporcionalidade entre duas ou mais grandezas.</p>

      <h2>Tipos de Grandezas</h2>
      <ul>
        <li><strong>Grandezas Diretamente Proporcionais (GDP):</strong> Quando o aumento de uma grandeza gera o aumento da outra na mesma proporção, ou quando a diminuição de uma gera a redução da outra. <em>Exemplo: Quantidade de combustível e distância percorrida.</em></li>
        <li><strong>Grandezas Inversamente Proporcionais (GIP):</strong> Quando o aumento de uma grandeza gera a redução da outra na mesma proporção. <em>Exemplo: Velocidade de um veículo e o tempo gasto para chegar ao destino.</em></li>
      </ul>

      <h2>Regra de Três Simples</h2>
      <p>Envolve apenas duas grandezas conhecidas para se descobrir um quarto valor oculto.</p>

      <h3>Exemplo 1: Grandezas Diretamente Proporcionais (GDP)</h3>
      <p>Uma impressora consegue imprimir 120 páginas em 6 minutos. Quantas páginas ela imprimirá em 15 minutos se mantiver o mesmo ritmo?</p>
      <p className="math-display">{'$$\\begin{aligned} \\text{Páginas} &\\quad \\text{Tempo (min)} \\\\ 120 &\\quad 6 \\\\ x &\\quad 15 \\end{aligned}$$'}</p>
      <p><strong>Análise:</strong> Se aumentamos o tempo, a impressora imprimirá mais páginas. Ambas as grandezas aumentam juntas. Logo, são diretamente proporcionais.</p>
      <p><strong>Resolução (Multiplicação Cruzada):</strong></p>
      <p className="math-display">{'$$6 \\times x = 120 \\times 15 \\implies 6x = 1800 \\implies x = \\frac{1800}{6} = 300 \\text{ páginas}$$'}</p>

      <h3>Exemplo 2: Grandezas Inversamente Proporcionais (GIP)</h3>
      <p>Um automóvel realiza um trajeto em 4 horas viajando a 80 km/h. Se ele fizesse o mesmo trajeto a 100 km/h, em quanto tempo completaria a viagem?</p>
      <p className="math-display">{'$$\\begin{aligned} \\text{Velocidade (km/h)} &\\quad \\text{Tempo (h)} \\\\ 80 &\\quad 4 \\\\ 100 &\\quad x \\end{aligned}$$'}</p>
      <p><strong>Análise:</strong> Ao aumentarmos a velocidade do veículo, ele fará o percurso em menos tempo. As grandezas comportam-se de formas opostas. Logo, são inversamente proporcionais.</p>
      <p><strong>Resolução (Multiplicação direta na horizontal):</strong></p>
      <p className="math-display">{'$$100 \\times x = 80 \\times 4 \\implies 100x = 320 \\implies x = \\frac{320}{100} = 3{,}2 \\text{ horas}$$'}</p>
      <p>{'(Nota: 3,2 horas equivale a 3 horas e 12 minutos, pois $0{,}2 \\times 60 = 12$ minutos).'}</p>

      <h2>Regra de Três Composta</h2>
      <p>Utilizada quando o problema envolve três ou mais grandezas proporcionais.</p>
      <p><strong>Exemplo:</strong> Numa fábrica de calçados, 8 operários trabalhando 6 horas por dia produzem 400 pares de sapatos em 5 dias. Quantos dias serão necessários para que 10 operários, trabalhando 8 horas por dia, produzam 600 pares de sapatos?</p>

      <p className="math-display">{'$$\\begin{array}{cccc} \\text{Operários} & \\text{Horas/Dia} & \\text{Pares} & \\text{Dias} \\\\ 8 & 6 & 400 & 5 \\\\ 10 & 8 & 600 & x \\end{array}$$'}</p>

      <p><strong>Análise da proporção em relação a Dias (incógnita):</strong></p>
      <ul>
        <li>{'Dias × Operários: Mais operários = menos dias (GIP). Inverter a razão: $\\frac{10}{8}$'}</li>
        <li>{'Dias × Horas/Dia: Mais horas = menos dias (GIP). Inverter a razão: $\\frac{8}{6}$'}</li>
        <li>{'Dias × Pares de Sapatos: Mais sapatos = mais dias (GDP). Manter a razão: $\\frac{400}{600}$'}</li>
      </ul>

      <p><strong>Montar a equação e resolver:</strong></p>
      <p className="math-display">{'$$\\frac{5}{x} = \\frac{10}{8} \\times \\frac{8}{6} \\times \\frac{400}{600}$$'}</p>
      <p className="math-display">{'$$\\frac{5}{x} = \\frac{10}{1} \\times \\frac{1}{6} \\times \\frac{4}{6} = \\frac{40}{36} = \\frac{10}{9}$$'}</p>
      <p className="math-display">{'$$10 \\times x = 5 \\times 9 \\implies 10x = 45 \\implies x = 4{,}5 \\text{ dias}$$'}</p>
      <p>Serão necessários 4,5 dias (ou 4 dias e meio) para completar o lote de calçados.</p>
    </div>
  );
}

export function RazaoProporcaoGuide() {
  useMathJax();
  return (
    <div className="theme-guide-content">
      <h2>Razão</h2>
      <p>{'A razão estabelece uma comparação por divisão entre duas grandezas. Sendo $A$ e $B$ dois números, com $B \\neq 0$, a razão entre $A$ e $B$ é escrita como:'}</p>
      <p className="math-display">{'$$\\frac{A}{B} \\quad \\text{ou} \\quad A : B$$'}</p>
      <ul>
        <li><strong>A (antecedente):</strong> O número de cima / primeiro número.</li>
        <li><strong>B (consequente):</strong> O número de baixo / segundo número.</li>
      </ul>
      <p><strong>Exemplo:</strong> Qual é a razão entre 40 kg e 20 kg?</p>
      <p className="math-display">{'$$\\frac{40}{20} = 2$$'}</p>
      <p>Isso significa que o primeiro valor é o dobro do segundo.</p>

      <h2>Proporção</h2>
      <p>{'A proporção é definida pela igualdade de duas razões equivalentes. Dizemos que as razões $\\frac{A}{B}$ e $\\frac{C}{D}$ são proporcionais se tiverem o mesmo valor:'}</p>
      <p className="math-display">{'$$\\frac{A}{B} = \\frac{C}{D}$$'}</p>
      <p>Na proporção, os elementos recebem denominações específicas:</p>
      <ul>
        <li>Os valores <strong>A</strong> e <strong>D</strong> são chamados de <em>extremos</em>.</li>
        <li>Os valores <strong>B</strong> e <strong>C</strong> são chamados de <em>meios</em>.</li>
      </ul>

      <h2>Propriedades Cruciais da Proporção</h2>
      <h3>Propriedade 1: Propriedade Fundamental das Proporções</h3>
      <p>O produto dos extremos é exatamente igual ao produto dos meios. Esta é a famosa regra de multiplicação cruzada:</p>
      <p className="math-display">{'$$\\frac{A}{B} = \\frac{C}{D} \\implies A \\cdot D = B \\cdot C$$'}</p>

      <h3>Propriedade 2: Soma ou Diferença dos Termos</h3>
      <p>A soma ou a diferença dos dois primeiros termos está para o primeiro (ou para o segundo), assim como a soma ou a diferença dos dois últimos termos está para o terceiro (ou para o quarto):</p>
      <p className="math-display">{'$$\\frac{A + B}{A} = \\frac{C + D}{C} \\quad \\text{e} \\quad \\frac{A - B}{B} = \\frac{C - D}{D}$$'}</p>

      <h2>Exemplo Prático Resolvido: Quarta Proporcional</h2>
      <p>{'Encontre o valor de $x$ na seguinte proporção:'}</p>
      <p className="math-display">{'$$\\frac{3}{x} = \\frac{12}{36}$$'}</p>
      <p>Aplicamos a Propriedade Fundamental (produto dos meios igual ao produto dos extremos):</p>
      <p className="math-display">{'$$12 \\cdot x = 3 \\cdot 36 \\implies 12x = 108 \\implies x = \\frac{108}{12} = 9$$'}</p>
      <p>Portanto, o valor de x que mantém a igualdade de proporção é 9.</p>
    </div>
  );
}
