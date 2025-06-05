import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const noticias = [
  {
    id: "1",
    titulo: "Inteligência Artificial transforma o mundo",
    conteudo: "A inteligência artificial eInteligência Artificial Transforma o Mundo e Redefine o Futuro da Humanidade\nPor Redação | 5 de junho de 2025\nA inteligência artificial (IA), antes vista como um conceito futurista restrito à ficção científica, tornou-se uma força dominante que está transformando profundamente todos os aspectos da vida humana. De setores industriais à vida cotidiana, a IA está redesenhando o mundo de maneira acelerada, gerando debates intensos sobre ética, trabalho, privacidade e o papel da tecnologia na sociedade.\nAvanços em ritmo acelerado\nNos últimos anos, os avanços em IA superaram as expectativas mais otimistas. Modelos de linguagem, como os desenvolvidos por grandes empresas de tecnologia, já são capazes de escrever textos complexos, gerar imagens realistas, compor músicas, diagnosticar doenças e até mesmo programar softwares inteiros. A chamada “IA generativa” – que cria novos conteúdos com base em dados existentes – revolucionou indústrias criativas, educação, publicidade e entretenimento.\nSegundo relatório publicado em maio de 2025 pela Organização Mundial de Tecnologia e Inovação, cerca de 80% das empresas em países desenvolvidos já utilizam IA em alguma etapa de seus processos produtivos. “Estamos vivendo uma nova revolução industrial, só que muito mais rápida e abrangente”, afirma a pesquisadora Marina Duarte, especialista em automação e IA na Universidade Federal de São Paulo (Unifesp).\nImpactos no mercado de trabalho\n\nUm dos efeitos mais imediatos da inteligência artificial é sua influência no mercado de trabalho. Funções repetitivas, administrativas ou baseadas em análise de dados vêm sendo automatizadas, reduzindo a necessidade de mão de obra humana. No entanto, especialistas alertam que a substituição de empregos não é o único cenário possível. “A IA está eliminando alguns cargos, sim, mas também está criando novas profissões que exigem habilidades específicas, como interpretação de dados, supervisão de algoritmos e desenvolvimento ético de sistemas inteligentes”, explica o economista Bruno Alves.\nEm países como Alemanha, Japão e Estados Unidos, governos já estão investindo em programas de requalificação profissional em larga escala, preparando trabalhadores para um futuro onde colaborar com sistemas inteligentes será uma habilidade essencial.\nMudanças na educação e na saúde.\nA inteligência artificial também começa a revolucionar a forma como aprendemos e cuidamos da saúde. Plataformas educacionais baseadas em IA oferecem experiências personalizadas de aprendizado, adaptando o conteúdo ao ritmo e ao estilo de cada estudante. Em países nórdicos, já é comum o uso de tutores virtuais em escolas públicas.\nNa medicina, a IA tem se mostrado uma aliada poderosa. Sistemas de diagnóstico auxiliam médicos na detecção precoce de doenças como câncer e Alzheimer, com taxas de acerto superiores às dos métodos tradicionais. Robôs cirúrgicos, orientados por algoritmos de aprendizado de máquina, já realizam procedimentos de alta precisão em hospitais de ponta.\n\nQuestões éticas e sociais.\nNo entanto, nem tudo são boas notícias. O uso crescente da IA também levanta preocupações éticas significativas. O vazamento de dados pessoais, o uso de algoritmos em sistemas judiciais, o reforço de preconceitos e a falta de transparência em decisões automatizadas são questões que vêm sendo debatidas por especialistas, juristas e ativistas.\nA ONU publicou recentemente um relatório recomendando a criação de uma regulamentação internacional para o uso de inteligência artificial, com foco em direitos humanos, privacidade e sustentabilidade. “A tecnologia não é neutra. Precisamos garantir que os sistemas de IA respeitem valores democráticos e não ampliem desigualdades existentes”, alerta a jurista Ana Carolina Mendes, membro do comitê de ética digital da organização.\n\nO futuro da IA: desafios e possibilidades\nÀ medida que a inteligência artificial continua sua ascensão, governos, empresas e cidadãos enfrentam o desafio de equilibrar inovação e responsabilidade. A IA tem o potencial de resolver problemas globais – como mudanças climáticas, escassez de recursos e crises sanitárias – mas, sem uma governança adequada, também pode aprofundar desigualdades e ameaçar liberdades fundamentais.\nEspecialistas concordam que a chave está na educação, na transparência e na participação democrática na construção das políticas de tecnologia. “O futuro da inteligência artificial será, em grande parte, decidido pelas escolhas que fizermos hoje”, conclui Marina Duarte.\nO mundo está, sem dúvida, diante de uma transformação histórica. E a inteligência artificial, com todo o seu poder e complexidade, está no centro dessa mudança. Resta agora à humanidade decidir como usará essa ferramenta – para construir um futuro mais justo, inteligente e humano, ou para reforçar velhas estruturas de poder e exclusão.stá revolucionando áreas como saúde, transporte e educação, transformando processos, criando novas oportunidades e facilitando o dia a dia das pessoas.",
    imagem:
      "https://didatica.tech/wp-content/uploads/2019/10/artificial-intelligence-3262753_1280-1024x557.jpg",
  },
  {
    id: "2",
    titulo: "Mudanças Climáticas: alerta global",
    conteudo:
      "O aquecimento global tem provocado secas, enchentes e mudanças no padrão climático, gerando preocupação mundial e um apelo por ações imediatas para reduzir os impactos ambientais.",
    imagem:
      "https://contec.org.br/wp-content/uploads/2024/11/mudancas-climaticas.png",
  },
  {
    id: "3",
    titulo: "Brasil investe em energia limpa",
    conteudo:
      "Projetos de energia solar e eólica recebem mais incentivos em várias regiões do país, impulsionando a economia sustentável e reduzindo a dependência de combustíveis fósseis.",
    imagem:
      "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/infox_Qdq0OPE.jpg",
  },
  {
    id: "4",
    titulo: "Exploração Espacial avança em ritmo acelerado",
    conteudo:
      "Novas missões espaciais prometem levar humanos a Marte em breve, expandindo nosso conhecimento do universo e abrindo caminho para colonização e exploração científica.",
    imagem:
      "https://c.files.bbci.co.uk/175E5/production/_116871759_gettyimages-118895520.jpg",
  },
  {
    id: "5",
    titulo: "Economia Digital cresce após pandemia",
    conteudo:
      "Negócios online, fintechs e plataformas digitais dominaram o mercado mundial após a pandemia, mudando hábitos de consumo e criando novas formas de trabalho.",
    imagem:
      "https://www.fecomercio.com.br/upload/img/ca99b2c44e4db32e1e8f35d70adea5feb871d40c.png",
  },
  {
    id: "6",
    titulo: "Saúde Mental ganha foco em políticas públicas",
    conteudo:
      "Atenção ao bem-estar emocional tem aumentado em vários países, com programas e políticas públicas focadas na prevenção, diagnóstico e tratamento de transtornos mentais.",
    imagem:
      "https://cdn.pixabay.com/photo/2021/06/01/19/51/mental-health-6301410_1280.jpg",
  },
  {
    id: "7",
    titulo: "Novas tecnologias revolucionam agricultura",
    conteudo:
      "Drones, sensores e inteligência artificial estão sendo usados para monitorar plantações e aumentar a produtividade, tornando a agricultura mais eficiente e sustentável.",
    imagem:
      "https://cdn.pixabay.com/photo/2016/04/20/18/47/agriculture-1343116_1280.jpg",
  },
];

export default function NoticiaDetalhe() {
  const { id } = useLocalSearchParams();
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Notícia não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}><b></b>PRIME NEWS</Text>
      </View>

      {/* Corpo */}
      <ScrollView style={styles.body}>
        <Text style={styles.titulo}>{noticia.titulo}</Text>
        <Image source={{ uri: noticia.imagem }} style={styles.imagem} />
        <Text style={styles.conteudo}>{noticia.conteudo}</Text>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 PRIME NEWS - Todos os direitos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#007ACC",
    paddingVertical: 20,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FF4500",
    marginBottom: 15,
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  conteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  error: {
    flex: 1,
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "red",
  },
  footer: {
    backgroundColor: "#007ACC",
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 13,
  },
});