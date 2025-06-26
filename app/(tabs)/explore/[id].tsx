import React, { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const noticias = [
  {
    id: "1",
    titulo: "Nova descoberta científica promete revolucionar a medicina",
    imagens: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Uma Descoberta Científica Promete Revolução na Medicina Regenerativa\n---\nSão Paulo, Brasil – Cientistas da Universidade Federal de São Paulo (USP) anunciaram hoje uma descoberta que pode redefinir o futuro da medicina regenerativa. Pesquisadores do Instituto de Ciências Biomédicas (ICB) desenvolveram uma nova técnica para reprogramar células-tronco, tornando-as mais eficientes e seguras para o tratamento de diversas doenças degenerativas.\n\nLiderada pela Dra. Ana Carolina Gomes, a equipe conseguiu identificar um conjunto de fatores genéticos que, quando ativados, permitem que as células-tronco pluripotentes induzidas (iPSCs) se diferenciem em tecidos específicos com uma precisão inédita. \"Este avanço é um divisor de águas\", afirmou a Dra. Gomes em coletiva de imprensa. \"Até então, um dos grandes desafios era garantir que as iPSCs se transformassem apenas nos tipos de células desejados, sem riscos de formação de tumores ou outros tecidos indesejados. Nossa técnica superou essa barreira.\"\n\nA pesquisa, publicada na renomada revista Nature Cell Biology, demonstra que as células reprogramadas com a nova metodologia apresentaram uma taxa de integração tecidual superior em modelos pré-clínicos, com resultados promissores na regeneração de tecidos cardíacos e neurais danificados. A expectativa é que a tecnologia possa ser aplicada no tratamento de condições como Parkinson, Alzheimer, infarto do miocárdio e lesões na medula espinhal.\n\n\"Estamos apenas no começo, mas o potencial é imenso\", disse o Reitor da USP, Prof. Dr. Carlos Eduardo Dias. \"Esta descoberta não só coloca o Brasil na vanguarda da pesquisa em células-tronco, mas também oferece uma nova esperança para milhões de pacientes em todo o mundo.\" A próxima fase dos estudos envolverá testes clínicos em humanos, previstos para iniciar nos próximos dois anos, após a aprovação das agências reguladoras."
  },
  {
    id: "2",
    titulo: "Evento internacional de tecnologia acontece esta semana",
    imagens: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Alerta Global: Cientistas Preveem Aceleração Sem Precedentes das Mudanças Climáticas\n---\nGenebra, Suíça – Um novo relatório alarmante, divulgado hoje pelas principais instituições científicas do mundo, incluindo a Organização Meteorológica Mundial (OMM) e o Painel Intergovernamental sobre Mudanças Climáticas (IPCC), adverte para uma aceleração sem precedentes dos impactos das mudanças climáticas globais. A análise aponta que a Terra está se aquecendo a um ritmo muito mais rápido do que o previsto, com consequências já visíveis e projeções futuras ainda mais sombrias.\n\nOs dados mais recentes revelam que as temperaturas médias globais continuam a subir, com os últimos dez anos (2015-2024) sendo os mais quentes já registrados. O aumento da temperatura da superfície terrestre e oceânica, que já ultrapassa 1.2°C acima dos níveis pré-industriais, está intensificando eventos climáticos extremos em todo o planeta, desde secas severas e incêndios florestais a inundações catastróficas e ondas de calor prolongadas. No Brasil, por exemplo, a intensidade e frequência de chuvas extremas e períodos de estiagem têm aumentado significativamente, afetando a agricultura e a infraestrutura.\n\nA pesquisa destaca o derretimento acelerado das calotas polares e glaciares, contribuindo para o aumento do nível do mar a uma taxa de 4.7mm por ano entre 2015 e 2024. Este fenômeno ameaça comunidades costeiras em todo o mundo, incluindo cidades litorâneas brasileiras. Além disso, a capacidade dos oceanos de absorver o excesso de calor e dióxido de carbono está diminuindo, levando à acidificação oceânica e à desestabilização de ecossistemas marinhos vitais.\n\nEspecialistas alertam que as emissões de gases de efeito estufa atingiram um novo recorde em 2023, comprometendo o planeta a um aquecimento contínuo por muitos anos. Para limitar o aquecimento global a 1.5°C – meta crucial do Acordo de Paris – as emissões precisam cair 42% até 2030 em comparação com os níveis de 2019. Sob as políticas atuais, o mundo está a caminho de um aumento de temperatura de 3.1°C, o que levaria a cenários de risco ainda maiores para a saúde humana, segurança alimentar e estabilidade econômica.\n\n\"Estamos em um ponto de inflexão crítico\", declarou a Dra. Elara Vance, cientista climática chefe da OMM. \"As evidências são inegáveis, e a janela de oportunidade para agir está se fechando rapidamente. É fundamental que governos, indústrias e a sociedade civil implementem medidas ambiciosas e coordenadas para a redução de emissões e para a adaptação às mudanças que já são inevitáveis.\"\n\nO relatório enfatiza a necessidade urgente de investimentos em energias renováveis, reflorestamento e tecnologias de captura de carbono, além de políticas robustas para proteger as comunidades mais vulneráveis aos impactos climáticos. A mensagem é clara: a inação terá custos muito mais elevados do que a ação imediata."
  },
  {
    id: "3",
    titulo: "Conservação ambiental ganha novo reforço com projeto global",
    imagens: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Conservação Ambiental Ganha Novo Reforço com Projeto Global Focado em Biodiversidade\n---\nOsvaldo Cruz, SP, Brasil – A conservação ambiental recebeu um impulso significativo com o lançamento de um ambicioso projeto global que visa proteger ecossistemas críticos e espécies ameaçadas. Esta iniciativa, anunciada por um consórcio internacional de organizações não governamentais, governos e instituições científicas, promete uma abordagem integrada e inovadora para enfrentar os desafios crescentes da perda de biodiversidade e das mudanças climáticas.\n\nO projeto, batizado de 'Aliança para a Biodiversidade Global', concentrará seus esforços em áreas consideradas \"hotspots\" de biodiversidade – regiões com alta concentração de espécies endêmicas, mas que estão sob grave ameaça. A estratégia inclui o estabelecimento de novas áreas de proteção, o fortalecimento da fiscalização contra o desmatamento e a caça ilegal, e a promoção de práticas de uso sustentável da terra junto às comunidades locais. No Brasil, o foco inicial estará na Amazônia e na Mata Atlântica, biomas cruciais para a biodiversidade mundial e que enfrentam pressões significativas.\n\n--- \n\nFinanciamento e Tecnologia a Serviço da Natureza\n\n--- \n\nUm dos diferenciais deste projeto é o robusto fundo de US$ 5 bilhões alocado para os próximos cinco anos, proveniente de doações de fundações filantrópicas, bancos de desenvolvimento e contribuições governamentais. Parte significativa desses recursos será destinada ao desenvolvimento e à implementação de tecnologias de ponta, como monitoramento por satélite com inteligência artificial para detecção de desmatamento em tempo real, drones para vigilância de áreas remotas e ferramentas de big data para análise de padrões de migração de espécies e comportamento de predadores.\n\n\"Esta é uma oportunidade sem precedentes para reverter a curva de perda de biodiversidade\", afirmou a Dra. Helena Costa, diretora executiva da Global Conservation Alliance, uma das líderes do projeto, durante o anúncio em Genebra. \"Ao unir forças e aplicar as melhores tecnologias disponíveis, podemos proteger nossos tesouros naturais para as futuras gerações.\" O projeto também prevê o fortalecimento da capacidade local, com programas de treinamento para guardas florestais, cientistas e comunidades indígenas, reconhecendo o papel vital de seus conhecimentos tradicionais na conservação.\n\n--- \n\nColaboração e Desafios Futuros\n\n--- \nA 'Aliança para a Biodiversidade Global' destaca a importância da colaboração internacional em um momento em que os desafios ambientais transcendem fronteiras. A iniciativa busca criar um modelo replicável de conservação que possa ser adaptado a diferentes contextos regionais, promovendo uma rede global de áreas protegidas e a troca de melhores práticas.\n\nContudo, o sucesso do projeto dependerá da capacidade de superar obstáculos como a resistência de setores econômicos, a corrupção e a instabilidade política em algumas regiões. A efetividade da governança e o engajamento contínuo de todos os stakeholders serão cruciais para garantir que os ambiciosos objetivos de conservação sejam alcançados e que a riqueza natural do planeta seja preservada. O que mais podemos fazer para garantir que iniciativas como esta atinjam seu potencial máximo?"
  },
  {
    id: "4",
    titulo: "Exploração Espacial avança em ritmo acelerado",
    imagens: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Exploração Espacial Acelera Rumo a Novas Fronteiras com Inovações Tecnológicas\n---\nHouston, EUA – A exploração espacial vive um de seus períodos mais dinâmicos, com avanços tecnológicos e a crescente participação de empresas privadas impulsionando a humanidade para além da órbita terrestre a um ritmo sem precedentes. A corrida para retornar à Lua e, em seguida, alcançar Marte, está mais aquecida do que nunca, com novas missões e descobertas sendo anunciadas constantemente.\n\nA reutilização de foguetes, popularizada por empresas como a SpaceX, tem revolucionado o acesso ao espaço, reduzindo drasticamente os custos de lançamento e permitindo missões mais frequentes. Isso abriu portas para um leque maior de experimentos científicos, implantação de satélites e até mesmo o início do turismo espacial comercial.\n\nAlém disso, a propulsão avançada está no centro das atenções. Tecnologias como a propulsão iônica e a por plasma prometem viagens mais rápidas e eficientes para o espaço profundo. Robôs e sistemas de inteligência artificial (IA) estão se tornando os olhos e as mãos da humanidade em outros corpos celestes, como o rover Perseverance da NASA em Marte, que coleta dados cruciais e amostras do solo, auxiliando na busca por sinais de vida e na compreensão da geologia planetária. Recentemente, a missão Magellan, por exemplo, revelou novas informações sobre a atividade geológica de Vênus, desafiando concepções anteriores sobre o planeta.\n\nCorrida Lunar e Marciana em Destaque\n\n--- \n\nA China tem se consolidado como um dos líderes na nova corrida espacial, com conquistas notáveis como a missão Chang'e 6, que trouxe amostras inéditas do lado oculto da Lua. A meta de estabelecer uma presença humana duradoura na Lua e, posteriormente, em Marte, é compartilhada por diversas agências espaciais e companhias. Os programas Artemis da NASA, em colaboração com parceiros internacionais e privados, visam o retorno de astronautas à superfície lunar, preparando o terreno para futuras missões tripuladas a Marte.\n\nAs empresas privadas como SpaceX (com sua Starship), Blue Origin (com o New Glenn e o lander lunar Blue Moon) e Virgin Galactic estão desempenhando um papel fundamental, não apenas no transporte de carga e pessoas, mas também no desenvolvimento de tecnologias inovadoras para habitats espaciais, mineração de asteroides e outras infraestruturas essenciais para a expansão humana no cosmos.\n\nO Futuro no Horizonte\n\n--- \n\nA exploração espacial não se limita apenas a missões ambiciosas; ela também gera benefícios tangíveis para a vida na Terra. Inovações desenvolvidas para o espaço, como tecnologias de filtragem de água, materiais de isolamento térmico e avanços em pesquisa biomédica, são adaptadas para uso diário, impactando desde smartphones até a medicina regenerativa.\n\nCom a colaboração crescente entre agências governamentais e o setor privado, e o desenvolvimento contínuo de novas tecnologias, a próxima década promete testemunhar marcos ainda mais audaciosos na jornada da humanidade pelo espaço, desvendando segredos do universo e expandindo as fronteiras do conhecimento e da presença humana. Estamos prontos para o que o espaço nos reserva?"
  },
  {
    id: "5",
    titulo: "Economia Digital cresce após pandemia",
    imagens: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Economia Digital Brasileira Acelera Pós-Pandemia, Comércio Online Lidera Expansão\n---\nSão Paulo, Brasil – A economia digital no Brasil segue em uma trajetória de crescimento robusto, consolidando os avanços tecnológicos e as mudanças de comportamento do consumidor que foram catalisados pela pandemia de COVID-19. Dados recentes do Ministério do Desenvolvimento, Indústria, Comércio e Serviços (MDIC) e de entidades do setor revelam um cenário de expansão contínua, com o comércio eletrônico e a digitalização de empresas impulsionando a transformação do mercado nacional.\n\nO e-commerce, em particular, despontou como um dos grandes beneficiados. Em 2024, as vendas online no Brasil movimentaram R$ 225 bilhões, um crescimento de 14,6% em relação ao ano anterior e um salto impressionante de 311% nos últimos cinco anos. As micro e pequenas empresas (MPEs) foram as que mais se adaptaram e se beneficiaram desse boom digital, com suas vendas pela internet crescendo cerca de 1.200% desde o início da pandemia. Esse fenômeno demonstra a capacidade de adaptação e inovação do empreendedorismo brasileiro, que encontrou no ambiente digital uma forma de não apenas sobreviver, mas prosperar.\n\n--- \n\nDigitalização em Massa e Novos Hábitos de Consumo\n\n--- \n\nA pandemia forçou a digitalização de quase 90% das empresas brasileiras em 2020, um processo que se manteve e se intensificou no período pós-pandemia. A migração para o online não se limitou ao varejo; setores como educação, saúde e serviços financeiros também viram uma aceleração sem precedentes na adoção de plataformas e soluções digitais. O Pix, sistema de pagamentos instantâneos do Banco Central, é um exemplo notório de como a população brasileira adotou rapidamente novas tecnologias, facilitando transações e impulsionando ainda mais o comércio digital.\n\nOs consumidores, por sua vez, consolidaram novos hábitos de compra e interação. Pesquisas indicam que 68% dos brasileiros optaram por compras online por medo da pandemia, e 75% continuaram com essa modalidade para economizar tempo. A conveniência e a praticidade oferecidas pelo ambiente digital se tornaram fatores determinantes na decisão de compra, e a expectativa é que essa tendência continue a crescer.\n\n--- \n\nDesafios e Oportunidades Futuras\n\n--- \n\nApesar do crescimento expressivo, a economia digital brasileira ainda enfrenta desafios. A inclusão digital e a superação das desigualdades de acesso à internet em diferentes regiões e classes sociais são pontos cruciais a serem endereçados. Além disso, a segurança e privacidade dos dados dos consumidores se tornaram preocupações crescentes, exigindo que as empresas invistam em proteção de informações para manter a confiança do cliente.\n\nMesmo assim, as projeções são otimistas. O e-commerce, por exemplo, deve crescer 70% no Brasil até 2027. Setores como hardware, software e serviços de tecnologia continuam em expansão, com São Paulo liderando o ranking de estados com mais empresas de tecnologia. A inteligência artificial (IA), a hiperpersonalização e a omnicanalidade são as próximas fronteiras, prometendo revolucionar ainda mais a forma como empresas e consumidores interagem no ambiente digital.\n\nCom a contínua digitalização e a adaptação das empresas e consumidores, o Brasil está pavimentando um caminho sólido para um futuro cada vez mais conectado e impulsionado pela inovação tecnológica. Quais serão os próximos grandes avanços que moldarão a economia digital brasileira?"
  },
  {
    id: "6",
    titulo: "Saúde Mental ganha foco em políticas públicas",
    imagens: [
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Saúde Mental: Cresce a Conscientização e a Busca por Políticas Públicas Inclusivas\n---\nRio de Janeiro, Brasil – A discussão sobre a saúde mental tem ganhado cada vez mais espaço nas agendas governamentais e na sociedade civil, refletindo uma crescente conscientização sobre a importância do bem-estar psicológico. Especialistas e ativistas defendem a necessidade de políticas públicas mais robustas e acessíveis para lidar com o aumento dos transtornos mentais, exacerbados por fatores como a pandemia, a pressão social e o ritmo acelerado da vida moderna.\n\nDados da Organização Mundial da Saúde (OMS) apontam que, globalmente, uma em cada oito pessoas vive com algum transtorno mental. No Brasil, a situação não é diferente, com a ansiedade e a depressão liderando o ranking das condições mais comuns. A estigmatização ainda é um grande obstáculo, impedindo muitos de procurar ajuda, o que ressalta a urgência de campanhas de conscientização e educação que promovam a abertura e o diálogo.\n\n--- \n\nAcesso a Tratamento e Prevenção\n\n--- \n\nUm dos maiores desafios é o acesso desigual a serviços de saúde mental. Em muitas regiões, a oferta de psicólogos, psiquiatras e terapeutas é insuficiente, e o custo do tratamento particular é proibitivo para a maioria da população. Por isso, a pressão por parte de ONGs e movimentos sociais para que o Sistema Único de Saúde (SUS) amplie a cobertura e a qualidade dos atendimentos tem sido fundamental. Iniciativas como a criação de Centros de Atenção Psicossocial (CAPS) e programas de saúde mental nas escolas são passos importantes, mas ainda insuficientes para atender à demanda.\n\nAlém do tratamento, a prevenção é crucial. Programas de bem-estar corporativo, apoio psicológico em universidades e a implementação de ações de promoção da saúde mental em comunidades têm demonstrado resultados positivos. O reconhecimento da saúde mental como um direito humano fundamental tem impulsionado a criação de leis e diretrizes que visam proteger e garantir o acesso a cuidados adequados.\n\n--- \n\nTecnologia e o Futuro da Saúde Mental\n\n--- \n\nA tecnologia também surge como aliada, com o desenvolvimento de aplicativos de meditação, plataformas de terapia online e ferramentas de inteligência artificial que auxiliam no diagnóstico precoce e no monitoramento de pacientes. Embora essas ferramentas não substituam o contato humano, elas podem complementar o tratamento tradicional e torná-lo mais acessível, especialmente em áreas remotas ou para pessoas com mobilidade reduzida.\n\nApesar dos avanços, o caminho para uma sociedade que priorize e ofereça suporte adequado à saúde mental ainda é longo. A colaboração entre governos, setor privado, profissionais de saúde e a própria comunidade é essencial para construir um futuro onde o bem-estar mental seja tão valorizado quanto a saúde física, garantindo que ninguém precise enfrentar seus desafios sozinho."
  },
  {
    id: "7",
    titulo: "Novas tecnologias revolucionam agricultura",
    imagens: [
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60",
    ],
    conteudo: "Novas Tecnologias Revolucionam a Agricultura e Impulsionam Produção Sustentável\n---\nOsvaldo Cruz, SP, Brasil – A agricultura brasileira e global está passando por uma revolução impulsionada por inovações tecnológicas que prometem otimizar a produção, reduzir impactos ambientais e garantir a segurança alimentar de uma população crescente. De drones a inteligência artificial, o campo nunca foi tão high-tech, transformando métodos tradicionais em práticas mais eficientes e sustentáveis.\n\nA agricultura de precisão lidera essa transformação. Com o uso de sensores, GPS e softwares de análise de dados, os agricultores agora podem monitorar suas lavouras com uma granularidade sem precedentes. Isso permite a aplicação otimizada de água, fertilizantes e defensivos agrícolas, minimizando desperdícios e custos, e aumentando a produtividade por área. Sistemas de irrigação inteligente, por exemplo, utilizam dados de umidade do solo e previsão do tempo para liberar a quantidade exata de água necessária, conservando esse recurso vital.\n\n--- \n\nDrones, Robótica e Inteligência Artificial no Campo\n\n--- \n\nOs drones se tornaram ferramentas indispensáveis, realizando mapeamento aéreo de lavouras, identificando pragas e doenças em estágios iniciais, e até mesmo realizando pulverizações localizadas com alta precisão. A robótica agrícola também avança rapidamente, com máquinas autônomas capazes de plantar, colher e monitorar culturas com intervenção humana mínima, liberando os trabalhadores para tarefas mais complexas e estratégicas.\n\nA inteligência artificial (IA) está no coração dessa revolução, analisando vastos volumes de dados para fornecer insights acionáveis aos produtores. Algoritmos de IA podem prever rendimentos, otimizar o tempo de plantio e colheita, e até mesmo ajudar na seleção de sementes mais resistentes a pragas e condições climáticas adversas. O uso de blockchain começa a garantir a rastreabilidade dos alimentos, aumentando a confiança do consumidor e a eficiência da cadeia de suprimentos.\n\n--- \n\nBiotecnologia e Agricultura Sustentável\n\n--- \n\nAlém das ferramentas digitais, a biotecnologia continua a desempenhar um papel crucial. O desenvolvimento de culturas geneticamente modificadas (OGMs) e de novas variedades por edição genética (CRISPR) tem permitido criar plantas mais resistentes a doenças, pragas e condições extremas, além de aumentar seu valor nutricional. Essas inovações são essenciais para garantir a resiliência da produção agrícola diante das mudanças climáticas.\n\nA transição para uma agricultura mais sustentável é um dos maiores benefícios dessas tecnologias. Ao otimizar o uso de recursos e reduzir a necessidade de produtos químicos, a tecnologia ajuda a diminuir a pegada ambiental da agricultura, protegendo o solo, a água e a biodiversidade. No Brasil, país com vasta área agrícola e rica biodiversidade, a adoção dessas tecnologias é fundamental para conciliar a produção de alimentos com a preservação ambiental. Como a adoção dessas inovações pode impactar a segurança alimentar global nos próximos anos?"
  },
];
 
export default function NoticiaDetalhe() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const noticia = noticias.find((n) => n.id === id);
 
  const [isFavorited, setIsFavorited] = useState(false);
 
  useEffect(() => {
    const loadFavoriteStatus = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorite_news');
        if (storedFavorites) {
          const favoritesArray = JSON.parse(storedFavorites);
          setIsFavorited(favoritesArray.includes(id));
        }
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    };
 
    loadFavoriteStatus();
  }, [id]);
 
  const toggleFavorite = async () => {
    try {
      let storedFavorites = await AsyncStorage.getItem('favorite_news');
      let favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
 
      if (isFavorited) {
        favoritesArray = favoritesArray.filter((favId: string) => favId !== id);
        Alert.alert("Removido", "Notícia removida dos favoritos.");
      } else {
        favoritesArray.push(id);
        Alert.alert("Adicionado", "Notícia adicionada aos favoritos!");
      }
 
      await AsyncStorage.setItem('favorite_news', JSON.stringify(favoritesArray));
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error("Erro ao salvar/remover favorito:", error);
      Alert.alert("Erro", "Não foi possível salvar/remover a notícia dos favoritos.");
    }
  };
 
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
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logo}>PRIME NEWS</Text>
      </View>
 
      {/* Corpo */}
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.titulo}>{noticia.titulo}</Text>
 
        {/* Container de Imagens */}
        <View style={styles.imagensContainer}>
          {noticia.imagens.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={styles.imagem}
              resizeMode="cover"
            />
          ))}
        </View>
 
        {/* Conteúdo */}
        <View style={styles.conteudoContainer}>
          <Text style={styles.conteudo}>{noticia.conteudo}</Text>
        </View>
      </ScrollView>
 
      {/* Botão de Marcar como Favorita */}
      <TouchableOpacity
        style={[styles.favoriteButton, isFavorited ? styles.favoritedButton : {}]}
        onPress={toggleFavorite}
      >
        <Ionicons
          name={isFavorited ? "bookmark" : "bookmark-outline"}
          size={20}
          color="#fff"
          style={styles.favoriteIcon}
        />
        <Text style={styles.favoriteButtonText}>
          {isFavorited ? "Desmarcar Favorita" : "Marcar como Favorita"}
        </Text>
      </TouchableOpacity>
 
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
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#007ACC",
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  backButton: {
    padding: 5,
    marginRight: 10
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    flex: 1
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 25
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FF4500",
    marginBottom: 20,
    textAlign: "center"
  },
  imagensContainer: {
    marginBottom: 20
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15
  },
  conteudoContainer: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10
  },
  conteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333"
  },
  error: {
    flex: 1,
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "red"
  },
  footer: {
    backgroundColor: "#007ACC",
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center"
  },
  footerText: {
    color: "#fff",
    fontSize: 13
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#007ACC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  favoritedButton: {
    backgroundColor: '#FF4500',
  },
  favoriteIcon: {
    marginRight: 8,
  },
  favoriteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
 